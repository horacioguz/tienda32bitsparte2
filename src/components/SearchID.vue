<template lang="">
    <div>
        <form>
            <h1>Busca tu juego por código:</h1>
            <br>
            <input type="text" placeholder="Ej: 0001" v-model="gameID">
            <table class="table" v-for="(searchProduct, i) in searchProductsByID" :key="i">
                <thead class="table-light">
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody  class="table-dark">
                    <tr>
                        <th>{{ searchProduct.codigo }}</th>
                        <td class="fw-bold">{{ searchProduct.nombre }}</td>
                        <td class="fw-bold">{{ searchProduct.stock }}</td>
                        <td class="fw-bold">${{ searchProduct.precio }}</td>

                    </tr>
                </tbody>
            </table>
        </form>
        <hr>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                gameID: '',
            }
        },
        computed: {
            searchProductsByID() {
                return this.$store.getters.filterByText(this.gameID)
            },
        },
    }
</script>
<style lang="">

</style>