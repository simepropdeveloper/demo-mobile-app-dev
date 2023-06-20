import { createApp } from 'vue';
import { createStore } from 'vuex';
import { UniqueComponentId,DomHandler,ZIndexUtils } from 'primevue/utils';
import moment from 'moment';
import axios from 'axios';

const $store = createStore({
    state: () => ({
        origin       : appURL,
        appPage      : 'PageAccount',
        searchKey    : null,
        currentProfile : null,
        currentMovie : null,
        slotArray    : [],
        stateArray   : [],
        locationArray: [],
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

//# Parent Component
import PageHome from '../components/parent/page-home.vue';
import PageTicketSelection from '../components/parent/page-ticket-selection.vue';
import PageDetail from '../components/parent/page-detail.vue';
import PageAccount from '../components/parent/page-account.vue';
import PageCongrate from '../components/parent/page-congrate.vue';

//# Child Component
import ProfileHeader from '../components/children/profile-header.vue';
import StarRating from '../components/children/star-rating.vue';
import ToolBar from '../components/children/tools-bar.vue';
import SearchBar from '../components/children/search-bar.vue';
import Movies from '../components/children/movie-list.vue';
import MovieSkeleton from '../components/children/movie-skeleton.vue';
import MovieThumbnail from '../components/children/movie-thumbnail.vue';
import SeatPicker from '../components/children/seat-picker.vue';
import MonthPicker from '../components/children/month-picker.vue';
import DayPicker from '../components/children/day-picker.vue';
import LocationPicker from '../components/children/location-picker.vue';
import StatePicker from '../components/children/state-picker.vue';
import TimeSlot from '../components/children/time-slot.vue';
import SeatDate from '../components/children/seat-date.vue';
import ScrollerTab from '../components/children/scroller-tab.vue';

//# Prime Setup
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

//# Prime Component
import ConfirmDialog from 'primevue/confirmdialog';
import Dropdown from 'primevue/dropdown';
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

//# Parent Component
app.component('PageAccount', PageAccount);
app.component('PageHome', PageHome);
app.component('PageDetail', PageDetail);
app.component('PageCongrate', PageCongrate);
app.component('PageTicketSelection', PageTicketSelection);

//# Child Component
app.component('ToolBar', ToolBar);
app.component('StarRating', StarRating);
app.component('SearchBar', SearchBar);
app.component('ProfileHeader', ProfileHeader);
app.component('Movies', Movies);
app.component('MovieSkeleton', MovieSkeleton);
app.component('MovieThumbnail', MovieThumbnail);
app.component('SeatPicker', SeatPicker);
app.component('MonthPicker', MonthPicker);
app.component('LocationPicker', LocationPicker);
app.component('StatePicker', StatePicker);
app.component('DayPicker', DayPicker);
app.component('TimeSlot', TimeSlot);
app.component('SeatDate', SeatDate);
app.component('ScrollerTab', ScrollerTab);

//# Prime Component
app.component('ConfirmDialog', ConfirmDialog);
app.component('Dropdown', Dropdown);
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