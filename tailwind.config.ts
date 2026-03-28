import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        rustic: {
          50: '#faf7f1',
          100: '#f3eadc',
          200: '#e6d2b7',
          300: '#d7b890',
          400: '#c59163',
          500: '#a86f44',
          600: '#825437',
          700: '#643f2b',
          800: '#4a2f22',
          900: '#2e1d15'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)']
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(46, 29, 21, 0.45)'
      },
      backgroundImage: {
        'grain': 'radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 40%)',
      }
    }
  },
  plugins: []
};

export default config;
