module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fef7da",
          secondary: "#1F2937",
          accent: "#F000B8",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "synthwave",
    ],
  },
  plugins: [require("daisyui")],
}
