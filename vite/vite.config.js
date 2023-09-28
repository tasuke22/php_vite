import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import autoprefixer from "autoprefixer";
import sassGlobImports from "vite-plugin-sass-glob-import";
import path from "path";
// import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    liveReload([
      __dirname + "/../dist/**/*.php",
      __dirname + "/src/js/**/*.js"
    ]),
    sassGlobImports(),
    // viteImagemin({
    //   // 画像圧縮の設定
    //   gifsicle: {
    //     optimizationLevel: 3
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //     progressive: true
    //   },
    //   pngquant: {
    //     quality: [0.8, 0.9],
    //     speed: 5
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: "removeViewBox"
    //       }
    //     ]
    //   }
    // })
  ],
  root: "",
  base: process.env.NODE_ENV === "development" ? "./" : "/dist/",
  build: {
    outDir: path.resolve(__dirname, "../dist"),
    emptyOutDir: false,
    manifest: true,
    rollupOptions: {
      input: path.resolve(__dirname, "main.js"),
      output: {
        entryFileNames: `_asset/js/[name].js`,
        chunkFileNames: `_asset/js/[name].js`,
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? "")) {
            return "_asset/css/[name].[ext]";
          }
          if (/\.js$/.test(name ?? "")) {
            return "_asset/js/[name].[ext]";
          }
          // if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(name ?? "")) {
          //   return "_asset/images/[name].[ext]";
          // }
          return "_asset/[name].[ext]";
        }
      }
    },
    assetsInlineLimit: 0,
    minify: false,
    write: true
  },
  server: {
    cors: true,
    host: true,
    strictPort: true,
    port: 5125, // 5125で固定する。ブラウザではMAMPで設定したポートを指定する。
    https: false,
    hmr: {
      host: "localhost"
    }
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
});
