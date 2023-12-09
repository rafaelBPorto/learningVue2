new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		bgBlue: true,
		classDigitada: "",
		class041: "",
		class042: false,
		corEscolhida: "",
		quadrado: {
			height:'100px',
			width:'100px'
		},
		porcentagem: 0,
		barra: {
			width:`${this.porcentagem}%`,
			backgroundColor: 'blue',
		}
	},
 	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.class1 = this.class1 =='destaque' ?
				'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			this.porcentagem++
		}
	},
	computhed:{
		completado(){
			return this.porcentagem = 0
		}
	},
	watch: {
		porcentagem(at,an) {
			if(at<100){
				setTimeout(()=>{
					return this.porcentagem++
				}, 100)	
			}
		}
	}
})
