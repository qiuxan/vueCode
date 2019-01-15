window.Event = {

	vue: new Vue(),

	listen: function(event, callback){
		this.vue.$on(event, callback);
	},

	fire: function(event, data=null){
		this.vue.$emit(event, data);
	},
};

Vue.component('coupon', {
    template: `<input placeholder="Enter your coupon code" @blur="onCouponApplied">`,

    methods: {
        onCouponApplied() {
            Event.fire('applied')
        }
    }
})

new Vue({
    el: '#root',
    
    data: {
        couponApplied: false
    },

    created() {
        Event.listen('applied',  () => alert('Handling it!'))
    }
})
