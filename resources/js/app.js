// import './bootstrap';
// import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

import '../../public/assets/css/bootstrap.min.css';
import '../../public/assets/css/global-style.css';
import '../../public/assets/css/home.css';
import '../../public/assets/css/web-application.css';
import '../../public/assets/css/blog.css';
import '../../public/assets/css/documentation.css';
import '../../public/assets/css/service.css';
import '../../public/assets/css/signup.css';
import '../../public/assets/css/privacy.css';

import '../../public/assets/css/element-header.css';
import '../../public/assets/css/element-details.css';
import '../../public/assets/css/element-user.css';
import '../../public/assets/css/promotion.css';
import '../../public/assets/css/element-pricing.css';
import '../../public/assets/css/lms-main.css';
import '../../public/assets/css/custom.css';
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

const appName = import.meta.env.VITE_APP_NAME || 'Creativeitem';
const captcheKey = '6LdAAcInAAAAAHLH_eG-CZ_COygmBCgWvY2rayUg';

createInertiaApp({
    // title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(VueReCaptcha, { 
                siteKey: captcheKey, 
                loaderOptions: {
                    useRecaptchaNet: true,
                    autoHideBadge: true
                } 
            })
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
