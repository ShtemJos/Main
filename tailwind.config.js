/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img3: "url('/images/3.png')",
        img1: "url('/images/1.png')",
        img4: "url('/images/4.png')",
        img2: "url('/images/44.png')",
      },
      colors: {
        grin: "#A6CC45",
      },
    },
  },
  plugins: [],
};
