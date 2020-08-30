import Vue from "vue";

export default {
    getData({
        commit
    }) {
        Vue.prototype.$http.get("data.json").then(response => {
            const data = response.data;

            if (data) {
                commit("setStock", data.stocks);
                commit("setPortifolio", {
                    funds: data.funds,
                    stockPortifolio: data.stockPortifolio
                });
            }
        });
    }
}