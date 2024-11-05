import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
};
