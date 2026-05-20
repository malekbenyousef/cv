const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
                "anime-slide":  "anime-slide 4.2s cubic-bezier(.22,1,.36,1) forwards",
                "bobble":       "bobble 2s ease-in-out infinite",
                "bubble-pop":   "bubble-pop 0.35s ease 0.55s both",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",

					},
                    "anime-slide": {
                        "0%":   { transform: "translateX(-120%) translateY(40px)", opacity: "0" },
                        "12%":  { transform: "translateX(10px) translateY(0)",     opacity: "1" },
                        "18%":  { transform: "translateX(0) translateY(0)" },
                        "72%":  { transform: "translateX(0) translateY(0)",        opacity: "1" },
                        "100%": { transform: "translateX(-130%) translateY(0)",    opacity: "0" },
                    },
                    "bobble": {
                        "0%,100%": { transform: "translateY(0)" },
                        "50%":     { transform: "translateY(-5px)" },
                    },
                    "bubble-pop": {
                        "0%":   { transform: "scale(0.5)", opacity: "0" },
                        "60%":  { transform: "scale(1.08)", opacity: "1" },
                        "100%": { transform: "scale(1)",   opacity: "1" },
                    },
                },
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
