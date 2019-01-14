Vue.component('task-list',{
    template:'<div><task v-for="task in tasks">{{task.task}}</task></div>', 
    
    data(){
        return{

            tasks:[
                {task: 'Go to bedroom',complete: false},
                {task: 'Go to bed',complete: false},
                {task: 'Go to school',complete: true},
                {task: 'Go to store',complete: true},
            ]
        }
    }
});

Vue.component('task',{
    template:'<li><slot></slot></li>' 

});

var app= new Vue({
    el: '#root',
                  
});
