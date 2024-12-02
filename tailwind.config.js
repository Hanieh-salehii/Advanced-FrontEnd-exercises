/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-red": "#4F0806",
      "light-red": "#780000",
      "dark-beige": "#BC6C25",
      "light-beige": "#DDA15E",
      "light-green": "#606C38",
      "dark-green": "#283618",
    },
    extend: {
      spacing: {
        "spacing-0": "0px",
        "spacing-1": "4px",
        "spacing-2": "8px",
        "spacing-3": "16px",
        "spacing-4": "24px",
        "spacing-5": "32px",
      },
      borderRadius: {
        "radius-0": "50%",
        "radius-1": "4px",
        "radius-2": "8px",

      },
    },
    plugins: [],
  },
};



