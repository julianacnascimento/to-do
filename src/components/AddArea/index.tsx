import { useState, KeyboardEvent } from "react";
import * as C from "./styles"

type Props = {
  onEnter: (taskDescription: string) => void;
}

export function AddArea({ onEnter }: Props){

  const [inputText, setInputText] = useState("");

  function handleKeyUp(e : KeyboardEvent){
    if(e.code === "Enter" && inputText !== ""){
      onEnter(inputText);
      setInputText("")
    }
  }

  return(
    <C.Container>
      <div className="image">➕</div>
      <input 
        type="text"
        placeholder="add a new task" 
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}