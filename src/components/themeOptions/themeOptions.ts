import { ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    security: {
      topsecret: React.CSSProperties["color"];
      secret: React.CSSProperties["color"];
      confidential: React.CSSProperties["color"];
      unclassified: React.CSSProperties["color"];
    };
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    security: {
      topsecret: React.CSSProperties["color"];
      secret: React.CSSProperties["color"];
      restricted: React.CSSProperties["color"];
      confidential: React.CSSProperties["color"];
      unclassified: React.CSSProperties["color"];
    };
  }

  // interface PaletteColor {
  //   red?: string;
  //   pink?: string;
  //   violet?: string;
  //   darkViolet?: string;
  //   blue?: string;
  // }
  // interface SimplePaletteColorOptions {
  //   red?: string;
  //   pink?: string;
  //   violet?: string;
  //   darkViolet?: string;
  //   blue?: string;
  // }

  // interface ColorPartial {
  //   dark02: string,
  //   dark03: string,
  //   dark04: string,
  //   medium05: string,
  //   medium06: string,
  //   medium07: string,
  //   light08: string,
  //   light09: string
  // }
}

const gray = {
  dark02: "#2F384E",
  dark03: "#485160",
  dark04: "#6D7583",

  medium05: "#ACB1B9",
  medium06: "#C3C7CD",
  medium07: "#E1E2E3",

  light08: "#EAEBED",
  light09: "#F0F0F1",
};
const white = "#ffffff";

const defaultVariant = "outlined";

const customThemeOptions: ThemeOptions = {
  components: {
    MuiFormControl: {
      defaultProps: {
        variant: defaultVariant,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: defaultVariant,
      },
    },
  },

  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      light: "#2F384E",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff5661",
      main: "#D70F37",
      dark: "#AD1035",
      contrastText: "#000",
    },
    action: {
      active: gray.dark04,
      selected: gray.light08,
      hover: gray.light09,
      disabled: gray.medium06,
      disabledBackground: gray.medium07,
    },
    background: {
      default: "#fafafa",
      paper: white,
    },
    divider: "rgba(0, 0, 0, 0.12)",
    text: {
      primary: gray.dark02,
      secondary: gray.dark03,
      disabled: gray.medium05,
    },

    grey: {
      // 50: "#fafafa",
      100: gray.light09,
      200: gray.light08,
      300: gray.medium07,
      400: gray.medium06,
      500: gray.medium05,
      600: gray.dark04,
      // 700: "#616161",
      800: gray.dark03,
      // 900: gray.dark02,
      // A100: "#d5d5d5",
      // A200: "#aaaaaa",
      // A400: "#303030",
      // A700: "#616161",
    },
    success: {
      light: "#70cb5c",
      main: "#3C992E",
      dark: "#006a00",
    },
    warning: {
      light: "#fffc5a",
      main: "#FBC91D",
      dark: "#c39900",
    },
    error: {
      light: "#ff5661",
      main: "#D70F37",
      dark: "#9d0012",
    },
    info: {
      light: "#5e88ca",
      main: "#275B99",
      dark: "#00326a",
    },
    //example of custom palette options
    security: {
      topsecret: "#3C992E",
      secret: "#D70F37",
      restricted: "#E3B413",
      confidential: "#275B99",
      unclassified: "#ACB1B9",
    },
  },
};

export default customThemeOptions;
