import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  globalCss: {
  },
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },
  jsxFramework: 'react',

  // Useful for theme customization
  theme: {
    textStyles: {
      paragraph: {
        value: {
          _dark: 'white',
          _light: 'black'
        }
      },
    },
    extend: {
      semanticTokens: {
        colors: {
          text: {
            paragraph: {
              value: {
                _dark: 'white',
                _light: 'black'
              }
            },
          },
          background: {
            value: {
              _dark: '#18191B',
              _light: '#F2E1CA'
            }
          }
        }
      },
      tokens: {
        spacing: {
          xsm: {
            value: '4px'
          },
          sm: {
            value: '8px'
          },
          md: {
            value: '16px'
          },
          lg: {
            value: '32px'
          }
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
