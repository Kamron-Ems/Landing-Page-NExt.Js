import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js", // Configutration Flowbi
  ],
  theme: {
    extend: {
      colors: {
        primary:"#4CAF4F",
        secondary:"#ed8900",
        text_title: "#4D4D4D",
        text_lambda: "#717171"
      },
      // container:{
      //   center: true,
      //   padding: {
      //     DEFAULT : "1rem",
      //     sm: "3rem"
      //   },
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // Configutration Flowbi
  ],
};
export default config;
