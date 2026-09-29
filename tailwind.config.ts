import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Caveat: ["Caveat"],
        Agbalumo: ["Agbalumo"],
        Lilita: ["Lilita One"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
