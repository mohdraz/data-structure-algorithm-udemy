import { src, dest, watch, series, parallel } from "gulp";
import browserSync from "browser-sync";

export const themeLocation = "./";

// Browser Syc

const server = browserSync.create();

export const serve = (done) => {
  server.init({
    proxy: "http://127.0.0.1:5500/",
  });
  done();
};

export const reload = (done) => {
  server.reload();
  done();
};

//================== end of Browser Syc

export const watchForChanges = () => {
  watch(`${themeLocation}/**/*.js`, reload);
};

const dev = series(serve, watchForChanges);

export default dev;
