const port = 3000;

/**
 * Docz config
 */
export default {
    title: 'Lime Elements',
    description: 'Documentation for Lime Elements',
    typescript: true,
    indexHtml: 'src/index.html',
    port: port,
    base: '/lime-elements/',
    hashRouter: true,
    themeConfig: {
        colors: {
            primary: '#00b3a7',
        },
    },
    menu: [
        {
            name: 'Home',
            menu: ['Lime Elements'],
        },
        'Components',
    ],
};
