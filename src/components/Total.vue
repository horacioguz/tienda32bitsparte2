<template>
    <div class="text-center">
        <h1>Listado total de ventas</h1>
        <h4>Cantidad total de ventas: </h4>
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody v-for="(soldGame, i) in soldGames" :key="i">
                <tr>
                    <th>{{ soldGame.codigo }}</th>
                    <td class="fw-bold">{{ soldGame.nombre }}</td>
                    <td class="fw-bold">${{ soldGame.precio }}</td>
                </tr>
            </tbody>
        </table>
        <hr>
        <h1>Monto total de ventas</h1>
        <h4>Total de ventas: {{ totalSales }}$</h4>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
            totalSales() {
            return this.$store.state.totalSales
            },
            ...mapState({
                soldGames: (state) =>{
                    return state.soldGames
                }
            }),
        },
}
</script>