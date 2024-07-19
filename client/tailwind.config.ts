import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary100: "#0077C2;",
        primary200: "#59a5f5",
        primary300: "#c8ffff",
        accent100: "#00BFFF",
        accent200: "#00619a",
        text100: "#FFFFFF",
        text200: "#f5f5f5",
        bg100: "#cccccc",
        bg200: "#333333",
        bg300: "#5c5c5c",
      },
    },
  },
  plugins: [],
};
export default config;
