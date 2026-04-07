module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff4ff',
          100: '#d8e5ff',
          200: '#b9ccff',
          300: '#8ea6ff',
          400: '#6a84ff',
          500: '#3563ff',
          600: '#2345d9',
          700: '#1b36a7',
          800: '#172f7a',
          900: '#12234f'
        },
        surface: {
          950: '#0a1221'
        }
      },
      boxShadow: {
        soft: '0 28px 80px rgba(15, 23, 42, 0.08)',
        inset: 'inset 0 0 0 1px rgba(148, 163, 184, 0.12)'
      },
      backgroundImage: {
        'hero-soft': 'radial-gradient(circle at top left, rgba(59,130,246,0.08), transparent 40%), radial-gradient(circle at right, rgba(59,130,246,0.12), transparent 22%)'
      }
    }
  },
  plugins: []
}
