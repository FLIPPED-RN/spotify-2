import { defineConfig } from "vite";
import observerPlugin from "mobx-react-observer/babel-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [
          observerPlugin(
            // optional
            { exclude: ["src/ui-components/**"] },
          ),
        ],
      },
    }),
  ],
});
