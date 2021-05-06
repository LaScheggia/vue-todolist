const app = new Vue ({
  el: '#app',
  data:{
    alertActive: false,
    strTodo:'',

    //array di oggetti (che sono i todo)
    todos:[
      {
        todo: 'Studiare vue',
        checked: false
      },
      {
        todo: 'Dormire',
        checked: true
      },
      {
        todo: 'Ripassare HTML/CSS',
        checked: false
      },
      {
        todo: 'Fare gli esercizi brutti come questo',
        checked: true
      },
    ]
  },
  methods:{
    removeTodo(index){
      this.todos.splice(index,1)
      //elimino un solo elem dall'array
      //se non metto 1 lui leva tutto
    },
    addTodo(){
      //vedo se la stringa è più corta di 3
      if (this.strTodo.length > 2){
        //puscho stringa e checked fals
        this.todos.push(
          {
            todo: this.strTodo, 
            checked: false
          });
          //resetto var v-model
          this.strTodo = '';

      }else{
        //se è più corta visualizzo l'alert
        //facendo diventare true il flag
        this.alertActive = true;
        setTimeout(() =>{
          this.alertActive = false; 
        }, 2000)
        //dopo due sec viene tolto
      }
    },
  }

});