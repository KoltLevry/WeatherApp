import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias:
    {
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'store': path.resolve(__dirname, 'src/store')
    }
  },
  // resolve: {
    //   alias: {
    //     assets: "/WeatherApp/src/assets",
    //     components: "/WeatherApp/src/components",
    //     pages: "/WeatherApp/src/pages",
    //     styles: "/WeatherApp/src/styles",
    //     store: "/WeatherApp/src/store",
    //   }
    // },
  // resolve: {
  //   alias: {
  //     assets: "/src/assets",
  //     components: "/src/components",
  //     pages: "/src/pages",
  //     styles: "/src/styles",
  //     store: "/src/store",
  //   }
  // },  
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },

})
