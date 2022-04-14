<template>
    <div class="text-center">
        <search-id></search-id>

        <h4>Cantidad de productos con stock: {{availableProducts.length}}</h4>
        <h4>Stock total de video juegos: {{totalStock}}</h4>
        <hr>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody v-for="(game, i) in games" :key="i">
                <tr :style="{backgroundColor: game.color}">
                    <th>{{ game.codigo }}</th>
                    <td class="fw-bold">{{ game.nombre }}</td>
                    <td class="fw-bold">{{ game.stock }}</td>
                    <td class="fw-bold">${{ game.precio }}</td>
                </tr>
            
            </tbody>
        </table>

    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    import SearchId from './SearchID.vue'
    export default {
        components: {
            SearchId
        },
        computed: {
            availableProducts() {
                return this.$store.getters.availableItems
            },
            totalStock(){
                return this.$store.getters.totalStock
            },
            ...mapState({
                games: (state) => {
                    return state.games
                },
            }),
        },
    }
</script>
