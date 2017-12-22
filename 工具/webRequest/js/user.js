window.onload = function () {
    new Vue({
        el: '#app',
        data: function () {
            return {
                visible: false
            }
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })
}