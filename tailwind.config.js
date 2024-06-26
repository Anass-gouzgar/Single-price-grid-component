/** @type {import('tailwindcss').Config} */
module.exports = {
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
        Cyan: "hsl(179, 62%, 43%)",
        BrightYellow: "hsl(71, 73%, 54%)",
        LightGray: "hsl(204, 43%, 93%)",
        GrayishBlue: "hsl(218, 22%, 67%)",
      },
    },
  },
  plugins: [],
};
