import darkImgDesk from "../images/bg-desktop-dark.jpg";
import darkImgMobile from "../images/bg-mobile-dark.jpg";
import lightImgDesk from "../images/bg-desktop-light.jpg";
import lightImgMobile from "../images/bg-mobile-light.jpg";

export const theme = {
  dark: {
    dark: true,
    primary: "hsl(235, 24%, 19%)",
    background: "hsl(235, 21%, 11%)",
    detail: "hsl(237, 14%, 26%)",
    text: "hsl(236, 33%, 92%)",
    textFocus: "hsl(220, 98%, 61%)",
    textOOF: "hsl(233, 14%, 35%)",
    // util
    iconURL: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="%23FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>')`,
    backgroundDesktop: darkImgDesk,
    backgroundMobile: darkImgMobile,
    bold: 700,
    regular: 400,
    barHeight: "80px",
  },
  light: {
    light: true,
    primary: "hsl(0, 0%, 98%)",
    background: "hsl(236, 33%, 92%)",
    detail: "hsl(233, 11%, 84%)",
    text: "hsl(235, 19%, 35%)",
    textFocus: "hsl(220, 98%, 61%)",
    textOOF: "hsl(236, 9%, 61%)",
    // util
    iconURL: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="%23FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>')`,
    backgroundDesktop: lightImgDesk,
    backgroundMobile: lightImgMobile,
    bold: 700,
    regular: 400,
    barHeight: "80px",
  },

  BrightBlue: "hsl(220, 98%, 61%)",
  VeryDarkBlue: "hsl(235, 21%, 11%)",
  VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
  LightGrayishBlue: "hsl(234, 39%, 85%)",
  LightGrayishBlueHover: "hsl(236, 33%, 92%)",
  DarkGrayishBlue: "hsl(234, 11%, 52%)",
  VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
  VeryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
  VeryDarkGrayishBlue3: "hsl(237, 14%, 16%)",
};
