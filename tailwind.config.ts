import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          background: '#F8F9FA',
          white: '#FFFFFF',
          black: '#212124'
        },
        primary: {
          primary: '#233FA7',
          shade_10: '#3952B0',
          shade_30: '#6579C1',
        },
        primaryShades: {
          primeshade_30: '#192C75',
          primeshade_40: '#152664',
          primeshade_50: '#122054'
        },
        border: {
          border_1: '#D8DEEB',
          border_2: '#E1E5ED',
          border_3: '#E5E7EB',
          border_4: '#C7DDF6',
          border_5: '#98CFE3'
        },
        neutralGray: {
          grey_50: '#F9FAFC',
          grey_100: '#F2F4F7',
          grey_200: '#EAECF0',
          grey_300: '#D0D5DD',
          grey_400: '#98A2B3',
          grey_500: '#667085',
          grey_600: '#475467',
          grey_700: '#525f7f'
        },
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '15px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '22px',
        xxxl: '24px'
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'login-background': "url('./src/assets/sidebar/logo.svg')"
      }
    }
  },
  plugins: []
};
export default config;
