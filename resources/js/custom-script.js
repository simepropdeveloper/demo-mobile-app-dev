import { createApp } from 'vue';
import { createStore } from 'vuex';
import { UniqueComponentId,DomHandler,ZIndexUtils } from 'primevue/utils';
import moment from 'moment';
import axios from 'axios';

const $store = createStore({
    state: () => ({
        origin: 'http://localhost:41062/www/demo-mobile-app-dev/public',
        appPage: 'PageHome',
        currentMovie: null,
        searchKey: null
    }),
    mutations: {
        
    }
});

const lib = {
    axios,
    moment,
    UniqueComponentId,
    DomHandler,
    ZIndexUtils
};

import Icons from './icons.js';
import CinemaApp from '../components/app.vue';
import PageHome from '../components/parent/page-home.vue';
import PageDetail from '../components/parent/page-detail.vue';
import HeaderText from '../components/children/header-text.vue';
import StarRating from '../components/children/star-rating.vue';
import ToolBar from '../components/children/tools-bar.vue';
import SearchBar from '../components/children/search-bar.vue';
import Movies from '../components/children/movie-list.vue';
import MovieSkeleton from '../components/children/movie-skeleton.vue';
import MovieThumbnail from '../components/children/movie-thumbnail.vue';

//# Prime Setup
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

//# Prime Component
import Divider from 'primevue/divider';
import OverlayPanel from 'primevue/overlaypanel';
import Skeleton from 'primevue/skeleton';
import Tooltip from 'primevue/tooltip';
import Sidebar from 'primevue/sidebar';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Panel from 'primevue/panel';
import ProgressSpinner from 'primevue/progressspinner';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Checkbox from 'primevue/checkbox';
import BlockUI from 'primevue/blockui';
import Toast from 'primevue/toast';

const app = createApp(CinemaApp, {});

//# Child Component
app.component('PageHome', PageHome);
app.component('PageDetail', PageDetail);
app.component('ToolBar', ToolBar);
app.component('StarRating', StarRating);
app.component('SearchBar', SearchBar);
app.component('HeaderText', HeaderText);
app.component('Movies', Movies);
app.component('MovieSkeleton', MovieSkeleton);
app.component('MovieThumbnail', MovieThumbnail);

//# Prime Component
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Panel', Panel);
app.component('Toast', Toast);
app.component('BlockUI', BlockUI);
app.component('TabView', TabView);
app.component('Checkbox', Checkbox);
app.component('TabPanel', TabPanel);
app.component('ProgressSpinner', ProgressSpinner);
app.component('OverlayPanel', OverlayPanel);
app.component('Divider', Divider);
app.component('Skeleton', Skeleton);
app.component('Dialog', Dialog);

app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.use($store);
app.use({
    install: (e) => {
        e.config.globalProperties.$library = lib;
        e.config.globalProperties.$icon = Icons;
    }
});

app.directive('tooltip', Tooltip);

app.mount("#app");