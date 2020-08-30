import stocks from "../../data/stocks";

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStock(state, payload) {
            state.stocks = payload;
        }
    },
    actions: {
        buyStock({
            commit
        }, order) {
            commit();
            console.log(order);
        },
        initStocks({
            commit
        }) {
            console.log("initStocks");
            commit("setStock", stocks);
        },
    },
    getters: {
        stocks(state) {
            return state.stocks;
        }
    }
}