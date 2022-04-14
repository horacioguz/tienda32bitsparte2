<template>
    <div class="text-center">
        <div class="my-4">
            <h1>Juegos con Stock</h1>
            <h4>Cantidad de productos con stock: {{availableProducts.length}}</h4>
        </div>
        <hr>
        <h1 class="my-4">Venta de Juegos</h1>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody v-for="(game, i) in availableProducts" :key="i">
                <tr>
                    <th>{{ game.codigo }}</th>
                    <td class="fw-bold">{{ game.nombre }}</td>
                    <td class="fw-bold">{{ game.stock }}</td>
                    <td class="fw-bold">${{ game.precio }}</td>
                    <td class="fw-bold"><button @click="sellProduct(game), soldGamesList(game)">Vender</button></td>
                </tr>
            </tbody>
        </table>

    </div>
</template>
<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    export default {
        computed: {
            availableProducts() {
            return this.$store.getters.availableItems
            },
            ...mapState({
                games: (state) => {
                    return state.games
                },
                soldGames: (state) =>{
                    return state.soldGames
                }
            }),
        },
        methods: {
            ...mapMutations(['sellProduct', 'SoldGamesList']),
            sellProduct(product){
                this.$store.dispatch('sellProduct', product)
            },
            soldGamesList(soldGame){
                this.$store.dispatch('soldGamesList', soldGame)
            }
        },
    }
</script>