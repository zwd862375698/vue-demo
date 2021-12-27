/*
 * @Author: zhang_weidie
 * @LastEditors: zhang_weidie
 * @Date: 2021-04-27 13:57:54
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
});
