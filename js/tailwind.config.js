
tailwind.config = {
    theme: {
        extend: {
            colors: {
                white: "#fff",
                black: "#000",
                blue: "#3533CD",
            },
            height: {
              'heroVideo': 'calc(100dvh - 104px)',
            },
            borderRadius: {
                'box': '10px',
            },
            backgroundImage: {
                'letterM': 'url("/images/aboutme/aboutme-letter-bg.svg")',
            },
            borderWidth: {
                '3':'3px',
            }
        },
    },
};