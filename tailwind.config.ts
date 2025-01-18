import type { Config } from "tailwindcss";
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary:"#51ACD9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [scrollbar({nocompatible: true}),],
} satisfies Config;
