tailwind.config = {
    theme: {
        extend: {
            colors: {
                gray: '#4F4F4F',
                primary: {
                    100: '#B1E4E9',
                    300: '#3AB7C2',
                    500: '#009FAD',
                    600: '#0D7D87',
                    800: '#1A4F54',
                    900: '#0C3437',
                    950: '#0E2022',
                },
                shadowWhite: '#E4E4E4',
                blackDark: '#1A1A1A',
                black: '#121212',
            },
            backgroundImage: {
                heroBike: "url('./images/hero/hero.webp')",
                darkGradient: "linear-gradient(180deg, rgba(14, 32, 34, 0.00) 0%, #0E2022 100%)",
                corner: "url('./icons/additional/corner.svg')",
            },

        },
    },
};