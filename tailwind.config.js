

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
    colors: {
      lightPurple1: "#FCDDEC",
      lightPurple2: "#C74FEB",
      lightPurple3: "#C035A2",
      darkBlue1: "#1E1E30",
      darkBlue2: "#38394E",
      darkBlue3: "#27283C",
      darkBlue4: "#5A5B70",
      darkBlue5: "#43445A",
      lightGray: "#5A5B70",
      grayText: "#C7C7C7",
      grayText1: "#828282",
      grayText2: "#4F4F4F",
      white: "#FFFFFF",
      adminLogin: "#FFFEFE",
      whiteLight: "#F2F2F2",
      mainGray: "#F3F4F6",
      whiteLight2: "#E0E0E0",
      whiteLight3: "#BDBDBD",
      textBlack: "#1E1E30",
      textGreenLight: "#00B2A9",
      lightRed: "#EB5757",
      lightRed1: "#FFE7E7",
      mainRed: "#D63626",
      mainRedLight: "rgba(214, 54, 38, 0.3)",
      lightPink: "#EC5CF8",
      black: "#181617",
      blackLight: "#272727",
      orange: "#FFB64F",
      green: "#6fcf97",
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      mmd: "935px",
      lg: "1024px",
      llg: "1094px",
      xl: "1280px",
      xxl: "1440px",
    },
  },
},
  plugins: [],
};


