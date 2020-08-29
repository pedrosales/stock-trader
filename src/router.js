import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Home.vue";
import Stocks from "./components/stocks/Stocks.vue";
import Portifolio from "./components/portifolio/Portifolio.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            component: Home
        },
        {
            path: "/stocks",
            component: Stocks
        },
        {
            path: "/portifolio",
            component: Portifolio
        }
    ]
});