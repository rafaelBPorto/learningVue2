<template>
<div class="contadores">
  <app-contador v-for= "c in 5" :key="c"/>
</div>
</template>

<script>
import AppContador from './Contador.vue'
export default {
  components: {
    'app-contador': AppContador
  },
}
</script>

<style>

</style>