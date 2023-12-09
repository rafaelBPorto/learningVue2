new Vue ({
	el: '#desafio',
	data: {
		valor: ''
		},
	methods:{
		alertOnClick(){
			alert(`Voce utilizou a diretiva v-on:click da maneira correta
Pode-se utilizar tambem as abriacoes:
		@click='alertOnClick'
		@[event]='alertOnClick'`)
		},
		listenKeyDown(e){
			this.valor = e.target.value;
		}
	}
})