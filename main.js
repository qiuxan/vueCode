Vue.component('tabs',{
    template:`
        <div>
        
            <div class="tabs">
                  <ul>
                    <li v-for="tab in tabs" :class="{'is-active':tab.isActive}">
                        <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                    </li> 
                  </ul>
            </div>
            <div class="tabs-details">
                <slot></slot>
            </div>
        
        </div>
    `,
    data(){
    
        return {tabs:[]};
    },

 

    created(){
        this.tabs=this.$children; 
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(
            tab=>{
                tab.isActive=(tab.name==selectedTab.name);
            });
        }
    }

/*
    mounted(){
    
        console.log(this.$children);
    }
      */
});
Vue.component('tab',{
    template:`
       <div v-show="isActive"><slot></slot></div>
    `,
    props:{
        name:{required:true},
        selected:{default:false},

    },
    computed:{
        href(){
            return '#'+this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    data(){
    return { isActive:false};
    },

    mounted(){
        this.isActive=this.selected;
    }
});

var app= new Vue({
    el: '#root',

                  
});
