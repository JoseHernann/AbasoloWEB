const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: () => import('../layout/layout.vue'),
        meta:{
            showInHeader: false
        },
        children: [
            {
                path:'',
                name: 'Inicio',
                component: () => import('../views/Inicio/homePage.vue'),
                meta:{
                    title: 'Gobierno de Abasolo Nuevo León',
                    metaTags: [
                        {
                            name: 'description',
                            content: 'Bienvenidos al gobierno de Abasolo Nuevo Leon , en Abasolo Seguimos avanzando'
                        },
                        {
                            property: 'og:description',
                            content: 'El Gobierno de Abasolo Nuevo León, trabaja para mejorar la calidad de vida de sus habitantes.'
                        }],
                    showInHeader: true,

                }
            },
            {
                path: '/gobierno',
                name: 'Gobierno',
                component: () => import('../views/Gobierno/gobiernoPage.vue'),
                meta:{
                    showInHeader: true,
                }
            },
            /*{
                path: '/historia',
                name: 'Historia',
                component: () => import('../views/Historia/historiaPage.vue'),
                meta:{
                    showInHeader: true,
                }
            },*/
            {
                path: '/transparencia',
                name: 'Transparencia',
                component: () => import('../views/Transparencia/transparenciaPage.vue'),
                meta:{
                    showInHeader: true,
                }
            },
            {
                path: '/articulo/:acode',
                name: 'Articulo',
                component: () => import('../views/Transparencia/articuloPage.vue'),
            }

        ]
    },

]

export default routes;