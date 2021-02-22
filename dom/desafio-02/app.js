new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('estou te alertando!')
        },
        keyup(e) {
            this.valor = e.target.value
        },
        keyenter(e) {
            this.valor = e.target.value
        }
    }
})