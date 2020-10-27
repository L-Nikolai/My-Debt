import React, {Component} from 'react';



import AppHeader from './Components/app-header';
import InputForm from './Components/input-form';
import List from './Components/list';

export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
          data : [
            {label : 'Name Surname', debt:100, id : 1},
            {label : 'Name Surname', debt:200, id : 2},
            {label : 'Name Surname', debt:400, id : 3}
          ]
      }
      this.deleteElem = this.deleteElem.bind(this);
      this.AddPost = this.AddPost.bind(this);
      
    }

    

    deleteElem(id){
      this.setState(({data})=> {
        const index = data.findIndex(elem => elem.id===id);
        const newArr = [...data.slice(0,index), ...data.slice(index + 1)];
        return {
          data : newArr
        }
      })
    }

    AddPost(name, number){
      
      const newPost = {
        label : name,
        debt : number,
        id : this.maxId ++ 

      }

      this.setState(({data})=> {
        const newArr = [...data, newPost];
        return {
          data : newArr
        }
      })

    }
  
    render(){
      const {data} = this.state;
      
      // const sum = (a,b)=> {return a+b};
      // const debts = date.reduce(sum);
       
      // Почему не плюсует новый пост?
      const debts = data.reduce(function(prev,curr) {
        return prev + curr.debt
      },0 )
      

        return (
          <div className ='App'>
            <AppHeader
            debts={debts}/>
            <List 
            posts={data}
            onDelete = {this.deleteElem}/>
            <InputForm
            onAddPost = {this.AddPost}/>
         </div>
    
  )
 }
}



