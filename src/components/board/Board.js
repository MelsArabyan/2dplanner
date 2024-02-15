// import { useDrop } from "react-dnd";
import { useDrop } from "react-dnd";
import DraggableItem from "./DraggableItem"
import { useCallback } from "react";


const styles = {
    width: 300,
    height: 300,
    border: "1px solid black",
    position: "relative",
    backgroundColor: 'black',
    borderRadius:10,
    
  };


const Board = ({objectsBoard, setObjectsBoard}) => {

    // const { droppableId } = useDrop(() => ({ accept: "object" }))
    const moveBox = useCallback(
        ( item, left, top) => {
            if ( item.id<0){
                let lastId = Math.max(...(objectsBoard.length !== 0 ? objectsBoard.map(elem => elem.id):[-1]))+1
                setObjectsBoard( 
                    [...objectsBoard, {...item, top:20, left:20, id:lastId }]
                    )
            } else {
                setObjectsBoard( 
                    objectsBoard.map((object) => {
                        if(object.id ===  item.id)
                            return { ...object, top:top, left:left,}
                        return { ...object}
                    })
                )
            }
            
            
        },
        [objectsBoard]
      )

    const [, drop] = useDrop(
        () => ({
          accept: 'object',
          drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset()
            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            // if (snapToGrid) {
            //   ;[left, top] = doSnapToGrid(left, top)
            // }
    
            moveBox(item, left, top);
            return undefined;
          },
        }),
        [moveBox]
      );


    return (
        <div
            ref={drop}
            style = {styles}
        >
            {objectsBoard.map((object) => (
                <DraggableItem id={object.id.toString()} key = {object.id.toString()} {...object} />
            ))}
        </div>
    )
}

export default Board

{/* <Cell key={Object.id} x={object.x} y={object.y}>
    <DraggableItem id={object.id} image={object.image} />
</Cell> */}