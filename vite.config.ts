import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tvoroshcov-miniapp/", // 👈 название твоего репозитория
});
