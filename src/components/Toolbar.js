import FileSaver from "file-saver";

const Toolbar = ({objectsBoard, setObjectsBoard}) => {

    const handleSave = () => {
        const layout = JSON.stringify(objectsBoard);
      
        const blob = new Blob([layout], { type: 'application/json' });
        FileSaver.saveAs(blob, "layout.json");
      }
      
      const handleLoad = (e) => {
        try {
          const reader = new FileReader();
          reader.onload = () => {
            const contents = reader.result
            const loadedObjects = JSON.parse(contents)
            setObjectsBoard(loadedObjects)
          };
          reader.onerror = (error) => {
            console.error("Error reading file:", error)
          };
          reader.readAsText(e.target.files[0])
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }


    return (
      <div
          style={{
          display:'flex',
          flexDirection: 'row',
          boxShadow: '2px 5px 11px 7px rgba(0,0,0,0.15)',
          padding:6,
          gap: 2,
          borderRadius:5
          // alignItems: 'center'
        }}
      >
        <button onClick={handleSave}>Сохранить</button>
        <input 
          type="file" onChange={handleLoad}
         />
      </div>
    )
  }

export default Toolbar