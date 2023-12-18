<template>
  <div id="app">{{ titulo }}</div>
</template>
<script>
export default {
  data: function(){
    return {
      titulo: 'Teste Data usando Vue.js'
    }
  }
}
</script>

<style>
  #app {
    background-color: cornflowerblue;
    color: aquamarine;
  }
</style>