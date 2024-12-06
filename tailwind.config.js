/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-red": "#E26D5C",
      "dark-red": "#4F0806",
      "light-beige": "#FFE1A8",
      "dark-beige": "#BC6C25",
      "light-green": "#BCBE94",
      "dark-green": "#3A4E22",
      "disabled-light-green" : "#777952",
      "disabled-dark-green" : "#202D12",
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



