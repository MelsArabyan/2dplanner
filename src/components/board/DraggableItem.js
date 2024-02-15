import { memo, useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend"

const DraggableItem = memo ((props) => {
    
    const { id,  left, top, title, width, image } = props
    console.log(id,  left, top, title)

    const  getStyles = (
        left,
        top,
        isDragging
      ) => {
        const transform = `translate3d(${left}px, ${top}px, 0)`;
        return {
          position: "absolute",
          transform,
          WebkitTransform: transform,
          opacity: isDragging ? 0 : 1,
          height: isDragging ? 0 : "",
        };
      }

    const  [ {isDragging}, drag , dragPreview ]  = useDrag(
        () => ({
            type: "object",
            item: {id, left, top, title, image, width},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
              }),
        }),
        [id, left, top, title],
    )
    
    return (
        <div 
            style={{...getStyles(left, top, isDragging) }}
            ref={drag}
        >
            <div>
                <img width={width}  src={image} /> 
            </div>
      </div>
    );
  })
  

  export default DraggableItem