import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'asr-green' : '#00E79B',
        'asr-blue' : '#82D2FF',
        'asr-purple' : '#9082FF',
      },
      fontFamily: {
        'lexend': ['var(--font-lexend)'],
        'iceland': ['var(--font-iceland)'],
      },
    },
  },
  plugins: [],
}
export default config
