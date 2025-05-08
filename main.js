import {Transcoder} from "./transcoder.js";


const formats = {
  "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
  "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"],
  "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
  "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"],
  "mkv": ["avc1.42403e", "opus", "video/x-matroska"],
};

const resolutions = [1080,
  2160,
]
const fpss = [30,
  60,
]

async function getLocalVideo(format,res,fps) {
  const response = await fetch(`test_videos/${format}/bbb_${res}_${fps}_noaud.${format}`);
  const blob = await response.blob();
  return new File([blob], 'video.mp4', {type: 'video/mp4'});
}


function getVideoDimensions(file) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    video.addEventListener("loadedmetadata", () => {
      URL.revokeObjectURL(video.src); // Освобождаем память
      resolve({
        width: video.videoWidth,
        height: video.videoHeight,
      });
    });
    video.onerror = () => {
      URL.revokeObjectURL(video.src);
      reject(new Error("Ошибка при чтении видео"));
    };
  });
}

async function main() {
  const fileBox = document.getElementById("file");
  await new Promise(res => {
    fileBox.onchange = function () {
      if (fileBox.files.length) res();
    };
  });

  document.getElementById("input-box").style.display = "none";

  const libav = await LibAV.LibAV({noworker: true});
  let transcoder = new Transcoder({libav});


  let metrics = {};
  for (const format of Object.keys(formats)) {
    metrics[format] = {};
    for (const res of resolutions) {
      for (const fps of fpss) {
        const key = `${res}_${fps}`;
        metrics[format][key] = {};
        for (const targetFormat of Object.keys(formats)) {
          if (targetFormat !== format) {
            metrics[format][key][targetFormat] = [0, 0, 0, 0, 0];
          }
        }
      }
    }
  }

  // Получаем размеры видео из самого файла

  for (const format in formats) {
    for(const res of resolutions){
      for (const fps of fpss) {
        const file = await getLocalVideo(format,res,fps);
        const height = res;
        const width = res===1080? 1920:3840;
        console.log(format,width, height,fps)
        for (const containerType in formats) {
          if ( containerType === format) continue;
          const [vc, ac,] = formats[containerType];
          for (let i = 0; i < 5; i++) {
            console.log("start transcode");
            const st = performance.now();
            const output = await transcoder.transcode(file, {
              containerType,
              vc,
              ac,
              width,
              height,
              keepAspectRatio: false,
            });
            const duration = (performance.now() - st) / 1000;const key = `${res}_${fps}`;
            metrics[format][key][containerType][i] = parseFloat(duration.toFixed(2));
            console.log(`end transcode from ${format} to ${containerType}, time: ${duration}`);
          }
        }
      }
    }
  }

  await libav.terminate();

  let res = "";
  for (const source of Object.keys(metrics)) {
    for (const resFps of Object.keys(metrics[source])) {
      for (const target of Object.keys(metrics[source][resFps])) {
        res += `${source},${target},${resFps},${metrics[source][resFps][target].join(',')}\n`;
      }
    }
  }
  console.log(res);

  const blob = new Blob([res], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'transcoding_metrics.txt'; // Имя файла для скачивания
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); // Освобождаем память

}

main();