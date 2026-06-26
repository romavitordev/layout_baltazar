import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tela escura — carvão levemente quente
        carvao: '#0C0A09',
        grelha: '#17110D', // superfícies/cards elevados
        brasaBorda: '#241813', // hairlines no escuro
        // Texto
        osso: '#F4ECE0',
        fumaca: '#988B7E', // muted
        // Acento — só em acento
        brasa: '#E2541C',
        ember: '#F4A23C', // realce de calor (só em gradiente/halo)
      },
      fontFamily: {
        anton: ['var(--font-anton)', 'Impact', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '72rem',
        wide: '80rem',
      },
      transitionTimingFunction: {
        saida: 'cubic-bezier(.16,1,.3,1)',
        expo: 'cubic-bezier(.16,1,.3,1)',
        cortina: 'cubic-bezier(.76,0,.24,1)',
      },
      boxShadow: {
        // Elevação pra UI escura: profundidade + leve calor, sem sombra "preta chapada".
        'elev-1': '0 1px 0 0 rgba(244,236,224,0.04) inset, 0 8px 24px -16px rgba(0,0,0,0.7)',
        'elev-2': '0 1px 0 0 rgba(244,236,224,0.05) inset, 0 18px 50px -28px rgba(0,0,0,0.8)',
        brasa: '0 14px 40px -12px rgba(226,84,28,0.55)',
        'brasa-lg': '0 22px 60px -22px rgba(244,162,60,0.55)',
      },
      keyframes: {
        descer: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(220%)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        // Tremular da brasa (halos de fogo)
        brasapulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        // Fagulhas subindo
        fagulha: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '12%': { opacity: '1' },
          '100%': { transform: 'translateY(-120px) scale(0.3)', opacity: '0' },
        },
        kenburns: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1)' },
        },
        // Brilho de skeleton (loading)
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        descer: 'descer 1.8s ease-in-out infinite',
        marquee: 'marquee 60s linear infinite',
        brasapulse: 'brasapulse 3.2s ease-in-out infinite',
        kenburns: 'kenburns 16s ease-in-out infinite alternate',
        shimmer: 'shimmer 1.6s infinite',
      },
    },
  },
  plugins: [],
}

export default config
