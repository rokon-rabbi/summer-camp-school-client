/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#eaccff",

          secondary: "#ffc9fb",

          accent: "#4473ff",

          neutral: "#282338",

          "base-100": "#E2EBF3",

          info: "#3B7FDE",

          success: "#139A6F",

          warning: "#F9BF39",

          error: "#DF4370",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
