/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color-1": " #9BEF05", //Login btn
        "custom-color-2": "#659c05", //Login btn hover
        "custom-color-3": "#FF5050", //Forget password btn
        "custom-color-4": "#202020", //Background Color of the login page
        "custom-color-5": "#282828", //input field
        "custom-color-6": "#9BEF05", //Sign up btn
        "custom-color-7": "#6D6D6D", //placeholder color
      },
    },
  },
  plugins: [],
};