/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
];
export const theme = {
    extend: {
        backgroundColor: {
            'custom-purple': '#4D44B5',
            'icon-bg': '#C1BBEB',
            'page-bg': '#edeefc',
            'button-bg': '#007bff',
        },
        colors: {
            title: '#4D44B5',
            content: '#C1BBEB',
            locationIcon: '#FB7D5B',
            textStatic: '#A098AE'
        },
        boxShadow: {
            'custom-blue': '0px 4px 10px rgba(77, 68, 181, 0.4)',
            'custom-blue-lg': '0px 10px 20px rgba(77, 68, 181, 0.4)',
            'left-only': '-20px 0 1px rgba(77, 68, 181, 1)',
        },
    },
};
export const plugins = [];