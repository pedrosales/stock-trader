import Vuex from "vuex";
import Vue from "vue";

import stocks from "./modules/stocks";
import portifolio from "./modules/portifolio";

import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portifolio
    },
    actions
});