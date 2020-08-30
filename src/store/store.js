import Vuex from "vuex";
import Vue from "vue";

import stocks from "./modules/stocks";
import portifolio from "./modules/portifolio";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portifolio
    }
});