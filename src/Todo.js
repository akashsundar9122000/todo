import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoList({todo , status , id}) {

    function changeStatus(){
        db.collection("todo").doc(id).update({
            status : !status
        })
    }

    function deleteTodo(){
        db.collection("todo").doc(id).delete();
    }
    return (
        <div style={{display :"flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={status ? "Inprogress" : "completed ✅"}/>
            </ListItem>

            <Button onClick={changeStatus}>{status ? "Done" : "undone"}</Button>
            <Button onClick={deleteTodo} style={{color:"red"}}>X</Button>
        </div>
    )
}