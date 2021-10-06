import { useState } from 'react';

import * as C from "./App.styles"

import { Item } from "./types/item";

export default function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 1, 
      description: "Example 1",
      done: false
    }
  ])

  return(
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>
      </C.Area>
    </C.Container>
  );
}