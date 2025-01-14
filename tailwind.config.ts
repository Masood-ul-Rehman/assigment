import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08122E",
        opacityWhite: "#FFFFFF0D",
        opacityBlue: "#5577FF33",
        textGrey: "#B2BEE0",
        accent: "#5577FF",
      },
      boxShadow: {
        customShadow: "46px 46px 40px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        customGradient: `
          linear-gradient(113.96deg, rgba(255, 231, 231, 0.46) 0%, rgba(255, 255, 255, 0.47) 7.3%, rgba(0, 0, 0, 0) 23.96%, rgba(255, 255, 255, 0.3) 57.81%, rgba(115, 129, 255, 0.45) 81.28%, rgba(0, 7, 73, 0.31) 100%), 
          linear-gradient(0deg, rgba(188, 196, 215, 0.2), rgba(188, 196, 215, 0.2))
        `,
        bgImg: `url(/bg-img.png)`,
      },
    },
  },
  plugins: [],
} satisfies Config;
