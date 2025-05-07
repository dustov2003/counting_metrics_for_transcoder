import { Transcoder } from "./transcoder.js";

// const formats = {
//   "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
//   "mkv": ["avc1.42403e", "opus", "video/x-matroska"],
//   "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
// };

const formats = {
  // "webm": ["vp09.00.10.08.03.1.1.1.0", "opus", "video/webm"],
  // "mp4": ["hvc1.1.6.L123.B0", "mp4a.40.2", "video/mp4"],
  // "mkv": ["avc1.42403e", "opus", "video/x-matroska"],
  // "avi": ["avc1.42403e", "mp4a.40.2", "video/x-msvideo"],
  // "mov": ["avc1.42403e", "mp4a.40.2", "video/quicktime"],
  // "flv": ["avc1.42403e", "mp4a.40.2", "video/x-flv"],
  "mpg": ["mp1v", "mp2a", "video/mpeg"],
  // "ts": ["avc1.42403e", "mp4a.40.2", "video/mp2t"],
};

async function getLocalVideo() {
  const response = await fetch('test_videos/bbb_1080_30_noaud.mp4');
  const blob = await response.blob();
  const file = new File([blob], 'video.mp4', { type: 'video/mp4' });
  return file;
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

  const file = await getLocalVideo();
  document.getElementById("input-box").style.display = "none";

  const libav = await LibAV.LibAV({ noworker: true });
  let transcoder = new Transcoder({ libav });

  let metrics = {
    "webm": [0, 0, 0, 0, 0],
    "mkv": [0, 0, 0, 0, 0],
    "mov": [0, 0, 0, 0, 0],
    "avi": [0, 0, 0, 0, 0],
    "flv": [0, 0, 0, 0, 0],
    "mpg": [0, 0, 0, 0, 0],
  };

  // Получаем размеры видео из самого файла
  const width =1920, height =1080 ;

  console.log(width,height)
  for (const containerType in formats) {
    const [vc, ac, mimeType] = formats[containerType];

    for (let i = 0; i < 2; i++) {
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
      const duration = (performance.now() - st) / 1000;
      metrics[containerType][i] = parseFloat(duration.toFixed(2));
      console.log("end transcode")
    }
  }

  await libav.terminate();

  let res = "";
  for (const key in metrics) {
    if (metrics.hasOwnProperty(key)) {
      res += `${key},${metrics[key].join(',')}\n`;
    }
  }
  console.log(res);
}

main();