/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        rosePompadour: "#DA7998",
        amaranthPink: "#E394AF",
        puce: "#D48BA2",
        blush: "#D86A8D",
        amaranthPurple: "#A7305D",
        chinaRose: "#A64B60",
        licorice: "#150506",
        unbleachedSilk: "#FBD9C8",
      },
    },
  },

  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: "#D86A8D", // Custom primary color
          secondary: "#E394AF", // Custom secondary color
          accent: "#DA7998", // Custom accent color (blush)
          neutral: "#150506",
          "base-100": "#150506",
          info: "#E394AF",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "light", // include DaisyUI's light theme for fallback
      "dark", // include DaisyUI's dark theme for fallback
    ],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};