import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        restaurant: "5rem 1fr",
        menu: "3fr 1fr",
        dishes: "repeat(auto-fill, minmax(150px, 1fr))"
      },
      gridTemplateRows: {
        dishes:"repeat(auto-fill, minmax(150px, 250px))",
        menu: "1fr 4fr",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
