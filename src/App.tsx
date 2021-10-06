import { useState } from 'react';
import { Item } from "./types/item";

import { ListItem } from "./components/ListItem"
import { AddArea } from "./components/AddArea"

import * as C from "./App.styles"


export default function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, description: "Example 1", done: false }
  ])

  function handleAddTask(taskDescription: string){
    let newList = [...list];
    newList.push({ 
      id: list.length + 1, 
      description: taskDescription, 
      done: false
    });
    setList(newList);
  }

  function handleUpdateTask(id: number, done: boolean){
    let newList = [...list];
    for(let i in newList){
      if(newList[i].id == id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>

        <AddArea onEnter={handleAddTask} />

        { list.map((item, key) => ( 
          <ListItem key={key} item={item} />
        )) }
      </C.Area>
    </C.Container>
  );
}