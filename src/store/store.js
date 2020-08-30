import Vuex from "vuex";
import Vue from "vue";

import stocks from "./modules/stocks";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks
    }
});