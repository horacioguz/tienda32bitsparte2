<template>
    <div class="text-center">
        <img class="w-25 my-5" src="https://www.bitcoinmarketjournal.com/wp-content/uploads/2019/02/404.png" alt="">
        <h1>La página que buscas no existe o ha ocurrido otro error.</h1>
        <h2>Regresa a nuestra pagina principal y vuelve a intentar.</h2>
        <router-link :to="{name: 'inicio'}">Volver al inicio</router-link>
        <br>
    </div>
</template>