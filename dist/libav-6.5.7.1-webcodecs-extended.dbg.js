/*
 * Copyright (C) 2019-2024 Yahweasel
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


(function() {
    function isWebAssemblySupported(module) {
        module = module || [0x0, 0x61, 0x73, 0x6d, 0x1, 0x0, 0x0, 0x0];
        if (typeof WebAssembly !== "object" || typeof WebAssembly.instantiate !== "function")
            return false;
        try {
            var module = new WebAssembly.Module(new Uint8Array(module));
            if (module instanceof WebAssembly.Module)
                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
        } catch (e) {}
        return false;
    }

    function isThreadingSupported() {
        try {
            var mem = new WebAssembly.Memory({initial: 1, maximum: 1, shared: true});
            if (!(mem.buffer instanceof SharedArrayBuffer))
                return false;
            return true;
        } catch (e) {}
        return false;
    }

var libav;
    var nodejs = (typeof process !== "undefined");

// Make sure LibAV is defined for later loading
if (typeof LibAV === "undefined")
    LibAV = {};
libav = LibAV;

    if (!libav.base) {
    if (typeof __dirname === "string") {
        libav.base = __dirname;
    } else {
        if (typeof document !== "undefined" && document && document.currentScript)
            libav.base = document.currentScript.src;
        else if (typeof self !== "undefined" && self && self.location)
            libav.base = self.location.href;
        else
            libav.base = "./.";
            libav.base = libav.base.replace(/\/[^\/]*$/, "");
    }
    }

    // Proxy our detection functions
    libav.isWebAssemblySupported = isWebAssemblySupported;
    libav.isThreadingSupported = isThreadingSupported;

    // Get the target that will load, given these options
    function target(opts) {
        opts = opts || {};
        var wasm = !opts.nowasm && isWebAssemblySupported();
        var thr = opts.yesthreads && wasm && !opts.nothreads && isThreadingSupported();
        if (!wasm)
            return "asm";
        else if (thr)
            return "thr";
        else
            return "wasm";
    }
    libav.target = target;
    libav.VER = "6.5.7.1";
    libav.CONFIG = "webcodecs-extended";
    libav.DBG = ".dbg";
    libav.factories = {};

    // Statics that are provided both by LibAV and by libav instances
    var libavStatics = {};

    /* libav.js returns and takes 64-bit numbers as 32-bit pairs, so we
     * need conversion functions to use those */
    libavStatics.i64tof64 = function(lo, hi) {
        // Common positive case
        if (!hi && lo >= 0) return lo;

        // Common negative case
        if (hi === -1 && lo < 0) return lo;

        /* Lo bit negative numbers are really just the 32nd bit being
         * set, so we make up for that with an additional 2^32 */
        return (
            hi * 0x100000000 +
            lo +
            ((lo < 0) ? 0x100000000 : 0)
        );
    };

    libavStatics.f64toi64 = function(val) {
        return [~~val, Math.floor(val / 0x100000000)];
    };

    libavStatics.i64ToBigInt = function(lo, hi) {
        var dv = new DataView(new ArrayBuffer(8));
        dv.setInt32(0, lo, true);
        dv.setInt32(4, hi, true);
        return dv.getBigInt64(0, true);
    };

    libavStatics.bigIntToi64 = function(val) {
        var dv = new DataView(new ArrayBuffer(8));
        dv.setBigInt64(0, val, true);
        return [dv.getInt32(0, true), dv.getInt32(4, true)];
    };

    libavStatics.ff_channel_layout = function(frame) {
        if (frame.channel_layout)
            return frame.channel_layout;
        else if (frame.channels && frame.channels !== 1)
            return (1 << frame.channels) - 1;
        else
            return 4; // Mono
    };

    libavStatics.ff_channels = function(frame) {
        if (frame.channels) {
            return frame.channels;
        } else if (frame.channel_layout) {
            var channels = 0;
            var cl = frame.channel_layout;
            while (cl) {
                channels += (cl & 1);
                cl >>= 1;
            }
            return channels;
        } else {
            return 1;
        }
    };

    // Some enumerations lifted directly from FFmpeg
    function enume(vals, first) {
        if (typeof first === undefined)
            first = 0;
        var i = first;
        vals.forEach(function(val) {
            libavStatics[val] = i++;
        });
    }

    libavStatics.AV_TIME_BASE = 1000000;

    // AV_OPT
    libavStatics.AV_OPT_SEARCH_CHILDREN = 1;

    // AVMediaType
    enume(["AVMEDIA_TYPE_UNKNOWN", "AVMEDIA_TYPE_VIDEO",
        "AVMEDIA_TYPE_AUDIO", "AVMEDIA_TYPE_DATA", "AVMEDIA_TYPE_SUBTITLE",
        "AVMEDIA_TYPE_ATTACHMENT"], -1);

    // AVSampleFormat
    enume(["AV_SAMPLE_FMT_NONE", "AV_SAMPLE_FMT_U8", "AV_SAMPLE_FMT_S16",
        "AV_SAMPLE_FMT_S32", "AV_SAMPLE_FMT_FLT", "AV_SAMPLE_FMT_DBL",
        "AV_SAMPLE_FMT_U8P", "AV_SAMPLE_FMT_S16P", "AV_SAMPLE_FMT_S32P",
        "AV_SAMPLE_FMT_FLTP", "AV_SAMPLE_FMT_DBLP", "AV_SAMPLE_FMT_S64",
        "AV_SAMPLE_FMT_S64P", "AV_SAMPLE_FMT_NB"], -1);

    // AVPixelFormat
    enume(["AV_PIX_FMT_NONE", "AV_PIX_FMT_YUV420P",
        "AV_PIX_FMT_YUYV422", "AV_PIX_FMT_RGB24", "AV_PIX_FMT_BGR24",
        "AV_PIX_FMT_YUV422P", "AV_PIX_FMT_YUV444P",
        "AV_PIX_FMT_YUV410P", "AV_PIX_FMT_YUV411P", "AV_PIX_FMT_GRAY8",
        "AV_PIX_FMT_MONOWHITE", "AV_PIX_FMT_MONOBLACK",
        "AV_PIX_FMT_PAL8", "AV_PIX_FMT_YUVJ420P",
        "AV_PIX_FMT_YUVJ422P", "AV_PIX_FMT_YUVJ444P",
        "AV_PIX_FMT_UYVY422", "AV_PIX_FMT_UYYVYY411",
        "AV_PIX_FMT_BGR8", "AV_PIX_FMT_BGR4", "AV_PIX_FMT_BGR4_BYTE",
        "AV_PIX_FMT_RGB8", "AV_PIX_FMT_RGB4", "AV_PIX_FMT_RGB4_BYTE",
        "AV_PIX_FMT_NV12", "AV_PIX_FMT_NV21", "AV_PIX_FMT_ARGB",
        "AV_PIX_FMT_RGBA", "AV_PIX_FMT_ABGR", "AV_PIX_FMT_BGRA",
        "AV_PIX_FMT_GRAY16BE", "AV_PIX_FMT_GRAY16LE",
        "AV_PIX_FMT_YUV440P", "AV_PIX_FMT_YUVJ440P",
        "AV_PIX_FMT_YUVA420P", "AV_PIX_FMT_RGB48BE",
        "AV_PIX_FMT_RGB48LE", "AV_PIX_FMT_RGB565BE",
        "AV_PIX_FMT_RGB565LE", "AV_PIX_FMT_RGB555BE",
        "AV_PIX_FMT_RGB555LE", "AV_PIX_FMT_BGR565BE",
        "AV_PIX_FMT_BGR565LE", "AV_PIX_FMT_BGR555BE",
        "AV_PIX_FMT_BGR555LE"], -1);

    // AVIO_FLAGs
    libavStatics.AVIO_FLAG_READ = 1;
    libavStatics.AVIO_FLAG_WRITE = 2;
    libavStatics.AVIO_FLAG_READ_WRITE = 3;
    libavStatics.AVIO_FLAG_NONBLOCK = 8;
    libavStatics.AVIO_FLAG_DIRECT = 0x8000;

    // Useful AVFMT_FLAGs
    libavStatics.AVFMT_FLAG_NOBUFFER = 0x40;
    libavStatics.AVFMT_FLAG_FLUSH_PACKETS = 0x200;

    // AVSEEK_FLAGs
    libavStatics.AVSEEK_FLAG_BACKWARD = 1;
    libavStatics.AVSEEK_FLAG_BYTE = 2;
    libavStatics.AVSEEK_FLAG_ANY = 4;
    libavStatics.AVSEEK_FLAG_FRAME = 8;

    // AVDISCARDs
    libavStatics.AVDISCARD_NONE = -16;
    libavStatics.AVDISCARD_DEFAULT = 0;
    libavStatics.AVDISCARD_NONREF = 8;
    libavStatics.AVDISCARD_BIDIR = 16;
    libavStatics.AVDISCARD_NONINTRA = 24;
    libavStatics.AVDISCARD_NONKEY = 32;
    libavStatics.AVDISCARD_ALL = 48;

    // AV_LOG levels
    libavStatics.AV_LOG_QUIET = -8;
    libavStatics.AV_LOG_PANIC = 0;
    libavStatics.AV_LOG_FATAL = 8;
    libavStatics.AV_LOG_ERROR = 16;
    libavStatics.AV_LOG_WARNING = 24;
    libavStatics.AV_LOG_INFO = 32;
    libavStatics.AV_LOG_VERBOSE = 40;
    libavStatics.AV_LOG_DEBUG = 48;
    libavStatics.AV_LOG_TRACE = 56;

    // AV_PKT_FLAGs
    libavStatics.AV_PKT_FLAG_KEY = 0x0001;
    libavStatics.AV_PKT_FLAG_CORRUPT = 0x0002;
    libavStatics.AV_PKT_FLAG_DISCARD = 0x0004;
    libavStatics.AV_PKT_FLAG_TRUSTED = 0x0008;
    libavStatics.AV_PKT_FLAG_DISPOSABLE = 0x0010;


    // Errors
    enume(["E2BIG", "EPERM", "EADDRINUSE", "EADDRNOTAVAIL",
        "EAFNOSUPPORT", "EAGAIN", "EALREADY", "EBADF", "EBADMSG",
        "EBUSY", "ECANCELED", "ECHILD", "ECONNABORTED", "ECONNREFUSED",
        "ECONNRESET", "EDEADLOCK", "EDESTADDRREQ", "EDOM", "EDQUOT",
        "EEXIST", "EFAULT", "EFBIG", "EHOSTUNREACH", "EIDRM", "EILSEQ",
        "EINPROGRESS", "EINTR", "EINVAL", "EIO", "EISCONN", "EISDIR",
        "ELOOP", "EMFILE", "EMLINK", "EMSGSIZE", "EMULTIHOP",
        "ENAMETOOLONG", "ENETDOWN", "ENETRESET", "ENETUNREACH",
        "ENFILE", "ENOBUFS", "ENODEV", "ENOENT"], 1);
    libavStatics.AVERROR_EOF = -0x20464f45;

    // Apply the statics to LibAV
    Object.assign(libav, libavStatics);


    // Now start making our instance generating function
    libav.LibAV = function(opts) {
        opts = opts || {};
        var base = opts.base || libav.base;
        var t = target(opts);
        var variant = "webcodecs-extended";
        if (t === "asm") {
            // In asm.js, we can't load alternate wasm
            variant = opts.variant || libav.variant || "webcodecs-extended";
        }

        // Determine the file to import
        var toImport = opts.toImport || libav.toImport ||
            base + "/libav-6.5.7.1-" + variant + ".dbg." + t + "." +
       "js";
        var ret;

        var mode = "direct";
        if (t === "thr")
            mode = "threads";
        else if (!nodejs && !opts.noworker && typeof Worker !== "undefined")
            mode = "worker";

        return Promise.all([]).then(function() {
            // Step one: Get LibAV loaded
            if (opts.factory || libav.factory)
                return opts.factory || libav.factory;
            if (libav.factories[toImport])
                return libav.factories[toImport];

            if (mode === "worker") {
                // Worker: Nothing to load now


            } else if (nodejs) {
                // Node.js: Load LibAV now
                return libav.factories[toImport] = require(toImport);

            } else if (typeof importScripts !== "undefined") {
                // Worker scope. Import it.
                importScripts(toImport);
                return libav.factories[toImport] = LibAVFactory;

            } else {
                // Web: Load the script
                return new Promise(function(res, rej) {
                    var scr = document.createElement("script");
                    scr.src = toImport;
                    scr.addEventListener("load", res);
                    scr.addEventListener("error", rej);
                    scr.async = true;
                    document.body.appendChild(scr);
                }).then(function() {
                    return libav.factories[toImport] = LibAVFactory;

                });

            }

        }).then(function(factory) {

            // Step two: Create the underlying instance
            if (mode === "worker") {
                // Worker thread
                ret = {};

                // Load the worker
                ret.worker = new Worker(toImport
                );

                ret.worker.postMessage({
                    config: {
                        variant: opts.variant || libav.variant,
                        wasmurl: opts.wasmurl || libav.wasmurl
                    }
                });

                // Report our readiness
                return new Promise(function(res, rej) {

                    // Our handlers
                    ret.on = 1;
                    ret.handlers = {
                        onready: [function() {
                            res();
                        }, null],
                        onwrite: [function(args) {
                            if (ret.onwrite)
                                ret.onwrite.apply(ret, args);
                        }, null],
                        onread: [function(args) {
                            try {
                                var rr = null;
                                if (ret.onread)
                                    rr = ret.onread.apply(ret, args);
                                if (rr && rr.then && rr.catch) {
                                    rr.catch(function(ex) {
                                        ret.ff_reader_dev_send(args[0], null, {error: ex});
                                    });
                                }
                            } catch (ex) {
                                ret.ff_reader_dev_send(args[0], null, {error: ex});
                            }
                        }, null],
                        onblockread: [function(args) {
                            try {
                                var brr = null;
                                if (ret.onblockread)
                                    brr = ret.onblockread.apply(ret, args);
                                if (brr && brr.then && brr.catch) {
                                    brr.catch(function(ex) {
                                        ret.ff_block_reader_dev_send(args[0], args[1], null, {error: ex});
                                    });
                                }
                            } catch (ex) {
                                ret.ff_block_reader_dev_send(args[0], args[1], null, {error: ex});
                            }
                        }, null]
                    };

                    // And passthru functions
                    ret.c = function() {
                        var msg = Array.prototype.slice.call(arguments);
                        var transfer = [];
                        for (var i = 0; i < msg.length; i++) {
                            if (msg[i] && msg[i].libavjsTransfer)
                                transfer.push.apply(transfer, msg[i].libavjsTransfer);
                        }
                        return new Promise(function(res, rej) {
                            var id = ret.on++;
                            msg = [id].concat(msg);
                            ret.handlers[id] = [res, rej];
                            ret.worker.postMessage(msg, transfer);
                        });
                    };
                    function onworkermessage(e) {
                        var id = e.data[0];
                        var h = ret.handlers[id];
                        if (h) {
                            if (e.data[2])
                                h[0](e.data[3]);
                            else
                                h[1](e.data[3]);
                            if (typeof id === "number")
                                delete ret.handlers[id];
                        }
                    };
                    ret.worker.onmessage = onworkermessage;

                    // And termination
                    ret.terminate = function() {
                        ret.worker.terminate();
                    };
                });

            } else if (mode === "threads") {
                /* Worker through Emscripten's own threads. Start with a real
                 * instance. */
                return Promise.all([]).then(function() {
                    return factory({
                        wasmurl: opts.wasmurl || libav.wasmurl,
                        variant: opts.variant || libav.variant
                    });
                }).then(function(x) {
                    ret = x;

                    // Get the worker
                    var pthreadT = ret.libavjs_create_main_thread();
                    var worker = ret.PThread.pthreads[pthreadT];
                    var ready = 0;

                    // Our handlers
                    var on = 1;
                    var handlers = {};
                    var readyPromiseRes = null;
                    var readyPromise = new Promise(function(res) {
                        readyPromiseRes = res;
                    });

                    // And passthru functions
                    ret.c = function() {
                        var msg = Array.prototype.slice.call(arguments);
                        return new Promise(function(res, rej) {
                            var id = on++;
                            msg = [id].concat(msg);
                            handlers[id] = [res, rej];
                            worker.postMessage({
                                c: "libavjs_run",
                                a: msg
                            });
                        });
                    };

                    var origOnmessage = worker.onmessage;
                    worker.onmessage = function(e) {
                        if (e.data && e.data.c === "libavjs_ret") {
                            // Return from a command
                            var a = e.data.a;
                            var h = handlers[a[0]];
                            if (h) {
                                if (a[2])
                                    h[0](a[3]);
                                else
                                    h[1](a[3]);
                                delete handlers[a[0]];
                            }
                        } else if (e.data && e.data.c === "libavjs_wait_reader") {
                            if (ret.readerDevReady(e.data.fd)) {
                                worker.postMessage({
                                    c: "libavjs_wait_reader",
                                    fd: e.data.fd
                                });
                            } else {
                                var name = ret.fdName(e.data.fd);
                                var waiters =
                                    ret.ff_reader_dev_waiters[name];
                                if (!waiters) {
                                    waiters =
                                        ret.ff_reader_dev_waiters[name] =
                                        [];
                                }
                                waiters.push(function() {
                                    worker.postMessage({
                                        c: "libavjs_wait_reader",
                                        fd: e.data.fd
                                    });
                                });
                            }
                        } else if (e.data && e.data.c === "libavjs_ready") {
                            readyPromiseRes();
                        } else {
                            return origOnmessage.apply(this, arguments);
                        }
                    };

                    // Termination is more complicated
                    ret.terminate = function() {
                        ret.PThread.unusedWorkers
                        .concat(ret.PThread.runningWorkers)
                        .forEach(function(worker) {
                            worker.terminate()
                        });
                    };

                    return readyPromise;
                });

            } else { // Direct mode
                // Start with a real instance
                return Promise.all([]).then(function() {
                    return factory({
                        wasmurl: opts.wasmurl || libav.wasmurl,
                        variant: opts.variant || libav.variant
                    });
                }).then(function(x) {
                    ret = x;
                    ret.worker = false;

                    // Simple wrappers
                    ret.c = function(func) {
                        var args = Array.prototype.slice.call(arguments, 1);
                        return new Promise(function(res, rej) {
                            try {
                                res(ret[func].apply(ret, args));
                            } catch (ex) {
                                rej(ex);
                            }
                        });
                    };

                    // No termination
                    ret.terminate = function() {};
                });

            }

        }).then(function() {
            // Step three: Add wrappers to the instance(s)

            function indirectors(funcs) {
                funcs.forEach(function(f) {
                    ret[f] = function() {
                        return ret.c.apply(ret, [f].concat(Array.prototype.slice.call(arguments)));
                    };
                });
            }

            function directs(funcs) {
                funcs.forEach(function(f) {
                    var real = ret[f + "_sync"] = ret[f];
                    ret[f] = function() {
                        var args = arguments;
                        return new Promise(function(res, rej) {
                            try {
                                var p = real.apply(ret, args);
                                if (typeof p === "object" && p !== null && p.then)
                                    p.then(res).catch(rej);
                                else
                                    res(p);
                            } catch (ex) {
                                rej(ex);
                            }
                        });
                    }
                });
            }

            var funcs = ["av_get_bytes_per_sample","av_compare_ts_js","av_opt_set","av_opt_set_int_list_js","av_frame_alloc","av_frame_clone","av_frame_free","av_frame_get_buffer","av_frame_make_writable","av_frame_ref","av_frame_unref","ff_frame_rescale_ts_js","av_log_get_level","av_log_set_level","av_packet_alloc","av_packet_clone","av_packet_free","av_packet_new_side_data","av_packet_ref","av_packet_rescale_ts_js","av_packet_unref","av_strdup","av_buffersink_get_frame","av_buffersink_get_time_base_num","av_buffersink_get_time_base_den","av_buffersink_set_frame_size","ff_buffersink_set_ch_layout","av_buffersrc_add_frame_flags","avfilter_free","avfilter_get_by_name","avfilter_graph_alloc","avfilter_graph_config","avfilter_graph_create_filter_js","avfilter_graph_free","avfilter_graph_parse","avfilter_inout_alloc","avfilter_inout_free","avfilter_link","avcodec_alloc_context3","avcodec_close","avcodec_descriptor_get","avcodec_descriptor_get_by_name","avcodec_descriptor_next","avcodec_find_decoder","avcodec_find_decoder_by_name","avcodec_find_encoder","avcodec_find_encoder_by_name","avcodec_flush_buffers","avcodec_free_context","avcodec_get_name","avcodec_open2","avcodec_open2_js","avcodec_parameters_alloc","avcodec_parameters_copy","avcodec_parameters_free","avcodec_parameters_from_context","avcodec_parameters_to_context","avcodec_receive_frame","avcodec_receive_packet","avcodec_send_frame","avcodec_send_packet","av_find_input_format","avformat_alloc_context","avformat_alloc_output_context2_js","avformat_close_input","avformat_find_stream_info","avformat_flush","avformat_free_context","avformat_new_stream","avformat_open_input","avformat_open_input_js","av_seek_frame","avformat_seek_file","avformat_seek_file_min","avformat_seek_file_max","avformat_seek_file_approx","avformat_write_header","avio_open2_js","avio_close","avio_flush","av_find_best_stream","av_get_sample_fmt_name","av_grow_packet","av_interleaved_write_frame","av_packet_make_writable","av_pix_fmt_desc_get","av_read_frame","av_shrink_packet","av_write_frame","av_write_trailer","av_dict_copy_js","av_dict_free","av_dict_set_js","sws_getContext","sws_freeContext","sws_scale_frame","AVPacketSideData_data","AVPacketSideData_size","AVPacketSideData_type","AVPixFmtDescriptor_comp_depth","ff_error","ff_nothing","calloc","close","dup2","free","malloc","mallinfo_uordblks","open","strerror","libavjs_with_swscale","libavjs_create_main_thread","ffmpeg_main","ffprobe_main","AVFrame_channel_layout","AVFrame_channel_layout_s","AVFrame_channel_layouthi","AVFrame_channel_layouthi_s","AVFrame_channels","AVFrame_channels_s","AVFrame_channel_layoutmask","AVFrame_channel_layoutmask_s","AVFrame_ch_layout_nb_channels","AVFrame_ch_layout_nb_channels_s","AVFrame_crop_bottom","AVFrame_crop_bottom_s","AVFrame_crop_left","AVFrame_crop_left_s","AVFrame_crop_right","AVFrame_crop_right_s","AVFrame_crop_top","AVFrame_crop_top_s","AVFrame_data_a","AVFrame_data_a_s","AVFrame_format","AVFrame_format_s","AVFrame_height","AVFrame_height_s","AVFrame_key_frame","AVFrame_key_frame_s","AVFrame_linesize_a","AVFrame_linesize_a_s","AVFrame_nb_samples","AVFrame_nb_samples_s","AVFrame_pict_type","AVFrame_pict_type_s","AVFrame_pts","AVFrame_pts_s","AVFrame_ptshi","AVFrame_ptshi_s","AVFrame_sample_aspect_ratio_num","AVFrame_sample_aspect_ratio_num_s","AVFrame_sample_aspect_ratio_den","AVFrame_sample_aspect_ratio_den_s","AVFrame_sample_aspect_ratio_s","AVFrame_sample_rate","AVFrame_sample_rate_s","AVFrame_time_base_num","AVFrame_time_base_num_s","AVFrame_time_base_den","AVFrame_time_base_den_s","AVFrame_time_base_s","AVFrame_width","AVFrame_width_s","AVPixFmtDescriptor_flags","AVPixFmtDescriptor_flags_s","AVPixFmtDescriptor_log2_chroma_h","AVPixFmtDescriptor_log2_chroma_h_s","AVPixFmtDescriptor_log2_chroma_w","AVPixFmtDescriptor_log2_chroma_w_s","AVPixFmtDescriptor_nb_components","AVPixFmtDescriptor_nb_components_s","AVCodec_name","AVCodec_sample_fmts","AVCodec_sample_fmts_s","AVCodec_sample_fmts_a","AVCodec_sample_fmts_a_s","AVCodec_supported_samplerates","AVCodec_supported_samplerates_s","AVCodec_supported_samplerates_a","AVCodec_supported_samplerates_a_s","AVCodec_type","AVCodec_type_s","AVCodecContext_codec_id","AVCodecContext_codec_id_s","AVCodecContext_codec_type","AVCodecContext_codec_type_s","AVCodecContext_bit_rate","AVCodecContext_bit_rate_s","AVCodecContext_bit_ratehi","AVCodecContext_bit_ratehi_s","AVCodecContext_channel_layout","AVCodecContext_channel_layout_s","AVCodecContext_channel_layouthi","AVCodecContext_channel_layouthi_s","AVCodecContext_channels","AVCodecContext_channels_s","AVCodecContext_channel_layoutmask","AVCodecContext_channel_layoutmask_s","AVCodecContext_ch_layout_nb_channels","AVCodecContext_ch_layout_nb_channels_s","AVCodecContext_extradata","AVCodecContext_extradata_s","AVCodecContext_extradata_size","AVCodecContext_extradata_size_s","AVCodecContext_frame_size","AVCodecContext_frame_size_s","AVCodecContext_framerate_num","AVCodecContext_framerate_num_s","AVCodecContext_framerate_den","AVCodecContext_framerate_den_s","AVCodecContext_framerate_s","AVCodecContext_gop_size","AVCodecContext_gop_size_s","AVCodecContext_height","AVCodecContext_height_s","AVCodecContext_keyint_min","AVCodecContext_keyint_min_s","AVCodecContext_level","AVCodecContext_level_s","AVCodecContext_max_b_frames","AVCodecContext_max_b_frames_s","AVCodecContext_pix_fmt","AVCodecContext_pix_fmt_s","AVCodecContext_profile","AVCodecContext_profile_s","AVCodecContext_rc_max_rate","AVCodecContext_rc_max_rate_s","AVCodecContext_rc_max_ratehi","AVCodecContext_rc_max_ratehi_s","AVCodecContext_rc_min_rate","AVCodecContext_rc_min_rate_s","AVCodecContext_rc_min_ratehi","AVCodecContext_rc_min_ratehi_s","AVCodecContext_sample_aspect_ratio_num","AVCodecContext_sample_aspect_ratio_num_s","AVCodecContext_sample_aspect_ratio_den","AVCodecContext_sample_aspect_ratio_den_s","AVCodecContext_sample_aspect_ratio_s","AVCodecContext_sample_fmt","AVCodecContext_sample_fmt_s","AVCodecContext_sample_rate","AVCodecContext_sample_rate_s","AVCodecContext_time_base_num","AVCodecContext_time_base_num_s","AVCodecContext_time_base_den","AVCodecContext_time_base_den_s","AVCodecContext_time_base_s","AVCodecContext_qmax","AVCodecContext_qmax_s","AVCodecContext_qmin","AVCodecContext_qmin_s","AVCodecContext_width","AVCodecContext_width_s","AVCodecDescriptor_id","AVCodecDescriptor_id_s","AVCodecDescriptor_long_name","AVCodecDescriptor_long_name_s","AVCodecDescriptor_mime_types_a","AVCodecDescriptor_mime_types_a_s","AVCodecDescriptor_name","AVCodecDescriptor_name_s","AVCodecDescriptor_props","AVCodecDescriptor_props_s","AVCodecDescriptor_type","AVCodecDescriptor_type_s","AVCodecParameters_bit_rate","AVCodecParameters_bit_rate_s","AVCodecParameters_channel_layoutmask","AVCodecParameters_channel_layoutmask_s","AVCodecParameters_channels","AVCodecParameters_channels_s","AVCodecParameters_ch_layout_nb_channels","AVCodecParameters_ch_layout_nb_channels_s","AVCodecParameters_chroma_location","AVCodecParameters_chroma_location_s","AVCodecParameters_codec_id","AVCodecParameters_codec_id_s","AVCodecParameters_codec_tag","AVCodecParameters_codec_tag_s","AVCodecParameters_codec_type","AVCodecParameters_codec_type_s","AVCodecParameters_color_primaries","AVCodecParameters_color_primaries_s","AVCodecParameters_color_range","AVCodecParameters_color_range_s","AVCodecParameters_color_space","AVCodecParameters_color_space_s","AVCodecParameters_color_trc","AVCodecParameters_color_trc_s","AVCodecParameters_extradata","AVCodecParameters_extradata_s","AVCodecParameters_extradata_size","AVCodecParameters_extradata_size_s","AVCodecParameters_format","AVCodecParameters_format_s","AVCodecParameters_framerate_num","AVCodecParameters_framerate_num_s","AVCodecParameters_framerate_den","AVCodecParameters_framerate_den_s","AVCodecParameters_framerate_s","AVCodecParameters_height","AVCodecParameters_height_s","AVCodecParameters_level","AVCodecParameters_level_s","AVCodecParameters_profile","AVCodecParameters_profile_s","AVCodecParameters_sample_rate","AVCodecParameters_sample_rate_s","AVCodecParameters_width","AVCodecParameters_width_s","AVPacket_data","AVPacket_data_s","AVPacket_dts","AVPacket_dts_s","AVPacket_dtshi","AVPacket_dtshi_s","AVPacket_duration","AVPacket_duration_s","AVPacket_durationhi","AVPacket_durationhi_s","AVPacket_flags","AVPacket_flags_s","AVPacket_pos","AVPacket_pos_s","AVPacket_poshi","AVPacket_poshi_s","AVPacket_pts","AVPacket_pts_s","AVPacket_ptshi","AVPacket_ptshi_s","AVPacket_side_data","AVPacket_side_data_s","AVPacket_side_data_elems","AVPacket_side_data_elems_s","AVPacket_size","AVPacket_size_s","AVPacket_stream_index","AVPacket_stream_index_s","AVPacket_time_base_num","AVPacket_time_base_num_s","AVPacket_time_base_den","AVPacket_time_base_den_s","AVPacket_time_base_s","AVFormatContext_duration","AVFormatContext_duration_s","AVFormatContext_durationhi","AVFormatContext_durationhi_s","AVFormatContext_flags","AVFormatContext_flags_s","AVFormatContext_nb_streams","AVFormatContext_nb_streams_s","AVFormatContext_oformat","AVFormatContext_oformat_s","AVFormatContext_pb","AVFormatContext_pb_s","AVFormatContext_start_time","AVFormatContext_start_time_s","AVFormatContext_start_timehi","AVFormatContext_start_timehi_s","AVFormatContext_streams_a","AVFormatContext_streams_a_s","AVStream_codecpar","AVStream_codecpar_s","AVStream_discard","AVStream_discard_s","AVStream_duration","AVStream_duration_s","AVStream_durationhi","AVStream_durationhi_s","AVStream_time_base_num","AVStream_time_base_num_s","AVStream_time_base_den","AVStream_time_base_den_s","AVStream_time_base_s","AVFilterInOut_filter_ctx","AVFilterInOut_filter_ctx_s","AVFilterInOut_name","AVFilterInOut_name_s","AVFilterInOut_next","AVFilterInOut_next_s","AVFilterInOut_pad_idx","AVFilterInOut_pad_idx_s","ff_init_encoder","ff_init_decoder","ff_free_encoder","ff_free_decoder","ff_encode_multi","ff_decode_multi","ff_set_packet","ff_init_muxer","ff_free_muxer","ff_init_demuxer_file","ff_write_multi","ff_read_frame_multi","ff_read_multi","ff_init_filter_graph","ff_filter_multi","ff_decode_filter_multi","ff_copyout_frame","ff_copyout_frame_video","ff_frame_video_packed_size","ff_copyout_frame_video_packed","ff_copyout_frame_video_imagedata","ff_copyout_frame_ptr","ff_copyin_frame","ff_copyout_packet","ff_copyout_packet_ptr","ff_copyin_packet","ff_copyout_codecpar","ff_copyin_codecpar","ff_malloc_int32_list","ff_malloc_int64_list","ffmpeg","ffprobe","av_frame_free_js","av_packet_free_js","avformat_close_input_js","avcodec_free_context_js","avcodec_parameters_free_js","avfilter_graph_free_js","avfilter_inout_free_js","av_dict_free_js"];
            var localFuncs = ["readFile","writeFile","unlink","unmount","mkdev","createLazyFile","mkreaderdev","mkblockreaderdev","mkreadaheadfile","unlinkreadaheadfile","mkwriterdev","mkstreamwriterdev","mountwriterfs","mkfsfhfile","unlinkfsfhfile","mkworkerfsfile","unlinkworkerfsfile","ff_reader_dev_send","ff_block_reader_dev_send","ff_reader_dev_waiting","copyin_u8","copyout_u8","copyin_s16","copyout_s16","copyin_s32","copyout_s32","copyin_f32","copyout_f32"];

            ret.libavjsMode = mode;
            if (mode === "worker") {
                // All indirect
                indirectors(funcs);
                indirectors(localFuncs);

            } else if (mode === "threads") {
                // Some funcs are direct, rest are indirect
                indirectors(funcs);
                directs(localFuncs);

            } else { // direct
                // All direct
                directs(funcs);
                directs(localFuncs);

            }

            // Apply the statics
            Object.assign(ret, libavStatics);

            return ret;
        });
    }

if (nodejs)
    module.exports = libav;
})();

