// import React, { useState } from "react";

// function CreateArea(props) {
//     const[inputs,setvalue]=useState({
//         title:"",
//         content:""
//     });

//     function handleChange(event){
//         const {name,newvalue}=event.target;
//         setvalue(preitem=>{
//             return{
//                 ...preitem,
//                 [name]:newvalue
//             };
//         });
//     }

//     function submitnote(event){
//         props.onadd(inputs);
//         setvalue({
//             title: "",
//             content: ""
//         });
//         event.preventDefault();
//     }

//   return (
//     <div>
//       <form>
//         <input name="title" onChange={handleChange} value={inputs.title} placeholder="Title" />
//         <textarea name="content" onChange={handleChange} value={inputs.content} placeholder="Take a note..." rows="3" />
//         <button onClick={submitnote}>Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;

//////////////////////////////////////////////////////////////////
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded]=useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
            <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

