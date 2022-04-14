import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    games: [
      {codigo: "0001", nombre: "Sekiro", stock: "100", precio: "30000", color: "red", destacado: "true"},
      {codigo: "0002", nombre: "Fifa 21", stock: "100", precio: "25000", color: "blue", destacado: "false"},
      {codigo: "0003", nombre: "Gears of War 4", stock: "100", precio: "15000", color: "green", destacado: "true"},
      {codigo: "0004", nombre: "Mario Tennis Aces", stock: "100", precio: "35000", color: "yellow", destacado: "false"},
      {codigo: "0005", nombre: "Bloodborne", stock: "100", precio: "10000", color: "blue", destacado: "false"},
      {codigo: "0006", nombre: "Forza Horizon 4", stock: "100", precio: "20000", color: "red", destacado: "true"},
    ],
    totalSales: 0,
    soldGames:[]
  },
  getters: {
    availableItems: state =>{
      return state.games.filter((game) => {
        return game.stock > 0
      })
    },
    filterByText: state => (id) => {
      return state.games.filter((game) =>{
        return game.codigo == id
      })
    },
    totalStock: state =>{
      let totalStock = 0
      for (let i = 0; i < state.games.length; i++) {
        const gameStock = parseInt(state.games[i].stock);
        totalStock = totalStock + gameStock
      }
      return totalStock
    }
  },
  mutations: {
    sellProduct: (state, productSold) =>{
      state.games.forEach((game)=>{
        if (game.codigo == productSold.codigo && game.stock > 0) {
          game.stock--
          state.totalSales += parseInt(game.precio)
          setTimeout(()=>{
            alert ('Venta procesada')
          },100)
        }
      })
    },
    soldGamesList: (state, soldGame)=>{
      const soldGameObj = {codigo: soldGame.codigo, nombre: soldGame.nombre, precio: soldGame.precio}
      state.soldGames.push(soldGameObj)
    }

  },
  actions: {
    sellProduct({commit}, productSold){
      return new Promise(()=>{
        setTimeout(() =>{
          commit('sellProduct', productSold)
        }, 2000)
      })
    },
    soldGamesList({commit}, soldGame){
      return new Promise(() =>{
        setTimeout(() =>{
          commit('soldGamesList', soldGame)
        }, 1000)
      })
    }
  }
});

export default store;