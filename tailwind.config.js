/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color-1": "#9BEF05", //Login btn
        "custom-color-2": "#659c05", //Login btn hover
        "custom-color-3": "#FF5050", //Forget password btn
        "custom-color-4": "#202020", //Background Color of the login page
        "custom-color-5": "#282828", //input field
        "custom-color-6": "#9BEF05", //Sign up btn
        "custom-color-7": "#6D6D6D", //placeholder color
        "custom-color-8": " #4A4A4A", //placeholder color
        "custom-color-9": " #363636", //Chat bg color
        "custom-color-10": "#6D6D6D", //time text  color
      },
      animation: {
        "bounce-slow": "bounce 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
