import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#ffffff',
  			primary1: '#363739',
  			secondary: '#f5f5f5',
  			secondary1: '#fefaf1',
  			bg: '#ffffff',
  			text: '#fafafa',
  			text1: '#7d8184',
  			text2: '#000000',
  			secondary2: '#da4445',
  			button: '#000000',
  			button1: '#00ff67',
  			button2: '#da4445',
  			hoverButton1: '#df7575',
  			hoverButton2: '#a0bce1'
  		},
  		fontFamily: {
  			inter: ["var(--font-inter)", "sans-serif"],
  			poppins: ["var(--font-poppins)", "sans-serif"]
  		},
  		fontSize: {
  			xs: '12px',
  			sm: '14px',
  			base: '16px',
  			lg: '18px',
  			xl: '20px',
  			'2xl': '24px',
  			'3xl': '30px',
  			'4xl': '36px',
  			'5xl': '48px'
  		},
  		transform: {
  			'rotate-y-360': 'rotateY(360deg)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
