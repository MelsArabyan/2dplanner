import DraggableItem from "./board/DraggableItem"

const ObjectList = ({objects}) => {


    return (
      <div
        style={{
          display:"flex",
          borderRadius:10,
          boxShadow: '2px 5px 11px 7px rgba(0,0,0,0.15)',
          padding:10,
          gap:5
        }}
      >
        {objects.map((object) => (
          <div 
            style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              backgroundColor:'black',
              borderRadius:10,
              padding:5
            }}
            key={object.id
          }>
            <div
              style={{
                display:"flex",
                justifyContent: 'center',
                alignItems: 'center',
                height:45,
                width:45,
              }}
            >
              <DraggableItem id={object.id.toString()} key = {object.id.toString()} {...object} />
            </div>
              <div
              style={{
                fontSize: 10,
                color: 'white'
                }}
              >{object.title}</div>
            </div>
        ))}
      </div>
    )
  }

export default ObjectList