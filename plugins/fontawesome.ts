import { defineNuxtPlugin } from '#app';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHeart,
    faHome,
    faClose,
    faSpinner,
    faPlane,
    faPizzaSlice,
    faBeerMugEmpty,
    faChess,
    faMagnifyingGlass,
    faUsers,
    faCircleUser,
    faClock,
    faChessRook,
    faUser,
    faKey,
    faEye,
    faEyeSlash,
    faRightToBracket,
    faPenToSquare,
    faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faThreads, faAmazon } from '@fortawesome/free-brands-svg-icons';

library.add(
    faHeart,
    faHome,
    faClose,
    faSpinner,
    faPlane,
    faPizzaSlice,
    faBeerMugEmpty,
    faChess,
    faMagnifyingGlass,
    faUsers,
    faCircleUser,
    faClock,
    faChessRook,
    faUser,
    faKey,
    faEye,
    faEyeSlash,
    faRightToBracket,
    faPenToSquare,
    faPlusCircle,
    faInstagram,
    faThreads,
    faAmazon
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
