import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { DndProvider, Droppable } from "react-dnd";
import table1 from './assets/table1.png'
import table2 from './assets/table2.png'
import table3 from './assets/table3.png'

import ObjectList from './components/ObjectList'
import Board from './components/board/Board'
import Toolbar from './components/Toolbar'
import { HTML5Backend } from 'react-dnd-html5-backend';

const style = {

}

function App() {

  const [objects, setObjects] = useState([
    { id: -1, top: 0, left: 0, title: "Table 1", image:table1, width: 20 },
    { id: -2, top: 0, left: 0, title: "Table 2", image:table2, width: 30 },
    { id: -3, top: 0, left: 0, title: "Table 3", image:table3, width: 40},
  ])

  const [objectsBoard, setObjectsBoard] = useState([])

  return (
    <DndProvider backend={HTML5Backend}>
      <div 
        style={{
          display:'flex',
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
          padding: 20
        }}
      >
        <ObjectList objects = {objects} />
        <Board objectsBoard = {objectsBoard} setObjectsBoard = {setObjectsBoard} />
        <Toolbar objectsBoard = {objectsBoard} setObjectsBoard = {setObjectsBoard} />
      </div>
    </DndProvider>
  );
}

export default App;
