module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        light: {
          primary: "#FFDF00",
          secondary: "#4D4300",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "synthwave",
    ],
  },
  plugins: [require("daisyui")],
}
