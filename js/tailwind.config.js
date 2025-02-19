
tailwind.config = {
    theme: {
        extend: {
            screens: {
                xs: "350px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                xxl: "1400px",
                "2xl": "1536px",
            },
            container: {
                center: true,
                padding: "1.25rem",
                screens: {
                    xs: "350px",
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    xxl: "1400px",
                    "2xl": "1536px",
                },
            },
            colors: {
                customBlack: "#393939",
                purple: "#44008B",
                cyan: "#8ff0ff",
                tercia: "#17E0FF",
            },
            backgroundImage: {

            },
            boxShadow: {
                card: "0px 0px 35px #0000000D"
            }

        },
    },
};