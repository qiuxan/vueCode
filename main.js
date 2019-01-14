Vue.component('coupon',{
    template:'<input placeholder="Enter your code" @blur="onCouponApplied">',
     methods:{
        onCouponApplied(){
        
            //alert('hddhdh');
            //
            this.$emit('applied');
      }
    },
});

var app= new Vue({
    el: '#root',

    data: {
        couponApplied:false
    
    },
    methods:{
        onCouponApplied(){
        
           // alert('this is applied');
            this.couponApplied=true;
        }
    
    }
                  
});
