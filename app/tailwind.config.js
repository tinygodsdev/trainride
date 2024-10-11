const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    './index.html',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gabriela': ['Gabriela', 'serif'],
        'marck': ['Marck Script', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'nomumu': ['Nomumu', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        "central": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            default: "#DF5113",
            background: "#160A1E",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#591B43",
              foreground: "#ffffff",
            },
            content1: {
              DEFAULT: "#1F102D",
              foreground: "#ffffff",
            },
          },
        },
        "kepeken": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            default: "#2fadfb",
            background: "#0a2043",
            foreground: "#fffdfc",
            primary: {
              DEFAULT: "#70af3c",
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#f77792", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT: "#1c3d73",
              foreground: "#fffdfc",
            },
          },
        },
        // nice blue and white theme for coastral city of Velvet
        "velvet": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            default: "#ddae2b",
            background: "#081530",
            foreground: "#fffdfc",
            primary: {
              DEFAULT: "#2460ec",
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT: "#1e2b67",
              foreground: "#fffdfc",
            },
          },
        },
        // nice emerald, blue and crimson theme for the city of Apinu
        // https://huemint.com/brand-intersection/#palette=061f33-66af78-003da0-ff5959
        "apinu": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "train" : {
          extend: "dark",
          colors: {
            default: "#8B4513", 
            background: "#402E32", 
            foreground: "#F5F5F5", 
            primary: {
              DEFAULT: "#32723D", 
              foreground: "#F5F5F5",
            },
            content1: {
              DEFAULT: "#867369", 
              foreground: "#F5F5F5",
            },
          },
        },        
        "esha": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "kalarna": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "mash": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "risz": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "risz-channel": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "tilanka": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "valley-of-creeks": {
          extend: "dark",
          colors: {
            default: "#b94c49", 
            background: "#182B34", 
            foreground: '#fffdfc',
            primary: {
              DEFAULT: "#3ab0d6", 
              foreground: "#fffdfc",
            },
            secondary: {
              DEFAULT: "#35BE77", 
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT:  "#044558",
              foreground: "#fffdfc",
            },
          },
        },
        "velvet-again": {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            default: "#ddae2b",
            background: "#081530",
            foreground: "#fffdfc",
            primary: {
              DEFAULT: "#2460ec",
              foreground: "#fffdfc",
            },
            content1: {
              DEFAULT: "#1e2b67",
              foreground: "#fffdfc",
            },
          },
        },
      },
    }),
  ]
}

