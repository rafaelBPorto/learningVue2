new Vue({

    el: '#api',
    data: {
      jogadores: [
        { nome: 'Jogador', vida: 100 },
        { nome: 'Monstro', vida: 100 },
      ],
      comandos: [
        { nome: 'ATAQUES', acao: 'ataque', cor: 'red' },
        { nome: 'ATAQUE ESPECIAL', acao: 'ataqueEspecial', cor: 'orange' },
        { nome: 'CURAR', acao: 'curar', cor: 'green'},
        { nome: 'DESISTIR', acao: 'desistir', cor: 'grey' },
      ],
      logResultados: [],
      rodada: 0,
    },
    methods: {
      ataque() {
        const ataqueJogador = parseInt(Math.random()*7)
        const atqueMonstro = parseInt(Math.random()*10)
        this.jogadores[0].vida -= atqueMonstro
        this.jogadores[1].vida -=  ataqueJogador
        this.rodada++
        this.logResultados.unshift(
            {
              monstro: `MONSTRO ATINGIU JOGAGOR COM: ${atqueMonstro}`,
              jogador: `JOGADOR ATINGIU MONSTRO COM: ${ataqueJogador}`,
            })
      },
      ataqueEspecial() {
        const ataqueJogador = parseInt(Math.random()*10)
        const atqueMonstro = parseInt(Math.random()*3 + 1)
        this.jogadores[0].vida -= atqueMonstro
        this.jogadores[1].vida -=  ataqueJogador
        this.rodada++
        this.logResultados.unshift(
            {
              monstro: `MONSTRO ATINGIU JOGAGOR COM: ${atqueMonstro}`,
              jogador: `JOGADOR ATINGIU MONSTRO COM: ${ataqueJogador}`,
            })
      },
      curar() {
        const vidaJogador = parseInt(Math.random()*10)
        const atqueMonstro = parseInt(Math.random()*5)
        this.jogadores[0].vida -= atqueMonstro
        this.jogadores[0].vida +=  vidaJogador
        this.rodada++
        this.logResultados.unshift(
            {
              monstro: `MONSTRO ATINGIU JOGAGOR COM: ${atqueMonstro}`,
              jogador: `JOGADOR GANHO PONTOS DE VIDA: ${vidaJogador}`,
            })
      },
      desistir() {
        this.teste = 'desistir';
      },
      executarAcao(comando) {
        this[comando]();

      },
    },
    watch: {
      jogadores: {
        handler(newItems, oldItems) {
          console.log('Array alterado:', newItems);
          if (newItems[0].vida <= 90) {
            alert("Você perdeu");
          }
        },
        deep: true // Observa alterações nos objetos dentro do array
      }
    }
  })

