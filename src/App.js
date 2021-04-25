
import './App.css';
import TextField from '@material-ui/core/TextField';
import {useState}  from 'react';
import {useEffect} from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase'
import TodoList from './Todo';

function App() {

  const [input , setInput] = useState("");

  useEffect(() => {
      getTodos();
  }, []) //to run only on first launch

  const[todos , setTodos] = useState([]);

  function getTodos(){
    db.collection("todo").onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id : doc.id,
          todo : doc.data().todo,
          status : doc.data().status,
        }))
      );
    });
  }

  function addTodo(event){
    event.preventDefault();
    db.collection("todo").add({
      status:true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      todo:input, 
    });
    setInput("");
  }


  
  return (
    <div className="App" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      <div style={{textAlign:"center"}}>

      <h1>Todo App</h1>
      <form>
      <TextField id="outlined-basic" label="Todo" variant="outlined"  style={{width:"80vh"}} value={input}
      onChange={(event) =>{
        setInput(event.target.value)
      }}/>

      <Button type="submit" variant="contained" onClick={addTodo} style={{margin:"10px 10px"}}>Default</Button>
      
      </form>

      {todos.map((todo) =>(
        <TodoList todo={todo.todo} status={todo.status} id={todo.id} />
        
      ))}

      </div>
      
      
      
    </div>
  );
}

export default App;
