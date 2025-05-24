import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'spin-slow': {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%',
  					backgroundSize: '200% 200%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%',
  					backgroundSize: '200% 200%'
  				}
  			},
  			blob: {
  				'0%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				},
  				'33%': {
  					transform: 'translate(30px, -50px) scale(1.1)'
  				},
  				'66%': {
  					transform: 'translate(-20px, 20px) scale(0.9)'
  				},
  				'100%': {
  					transform: 'translate(0px, 0px) scale(1)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-40rem 0'
  				},
  				'100%': {
  					backgroundPosition: '40rem 0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'spin-slow': 'spin-slow 20s linear infinite',
  			'gradient-x': 'gradient-x 10s ease infinite',
  			'blob': 'blob 20s infinite',
  			'marquee': 'marquee 25s linear infinite',
  			'shimmer': 'shimmer 2s infinite'
  		},
  		transitionDelay: {
  			'1500': '1500ms',
  			'2000': '2000ms',
  			'3000': '3000ms',
  			'4000': '4000ms'
  		},
  		animationDelay: {
  			'200': '200ms',
  			'300': '300ms',
  			'400': '400ms',
  			'500': '500ms',
  			'600': '600ms',
  			'700': '700ms',
  			'800': '800ms',
  			'900': '900ms',
  			'1000': '1000ms',
  			'1500': '1500ms',
  			'2000': '2000ms',
  			'3000': '3000ms',
  			'4000': '4000ms'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: '100ch',
  					lineHeight: '1.75'
  				}
  			}
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme }: { addUtilities: (utilities: Record<string, any>) => void, theme: (path: string) => Record<string, string> }) {
      const newUtilities: Record<string, any> = {}
      Object.entries(theme('animationDelay')).forEach(([key, value]) => {
        newUtilities[`.animation-delay-${key}`] = { animationDelay: value }
      })
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
