import fs from "fs";
import chokidar from "chokidar";

const triggerFile = "main.scss"; // HMRをトリガーするために変更するファイルのパス
const watchPath = "src/sass"; // 監視するディレクトリのパス

function onAdd(path) {
  const date = new Date();
  fs.utimesSync(triggerFile, date, date);
}

const watcher = chokidar.watch(watchPath, {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  persistent: true,
  ignoreInitial: true,
});

watcher.on("add", (path) => onAdd(path));