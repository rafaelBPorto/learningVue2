new Vue({
    el: '#desafio',
    data: {
      nome: 'Rafael',
      idade: 25,
      urlDaImagem: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg'
    },
    computed: {
        idadeMultiplicada: function () {return this.idade*3} 


    },
    methods: {
        idadeVezes3() {
            return this.idade*3;
        },
        random() {
            return Math.random();
        }
    }
   
  });

/*
Observaçoes:

  Em popriedade computadas (computed):

    Pode utilizar apenas idadeMultiplicada:this.idade*3
  porém usando uma função permite que o Vue gerencie corretamente 
  o contexto this, enquanto a abordagem sem função pode levar a 
  problemas de contexto e valores incorretos. 
   
    Portanto, é sempre recomendável usar a forma de 
  função para propriedades computed no Vue.

    !!! Com arrow function, o this não será vinculado corretamente 
  à instância Vue. Oque pode levar a erros ou comportamentos inesperados.
*/ 
