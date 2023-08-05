import React, { useState } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Note from "./note.jsx";
import CreateArea from "./createarea";

// function notdb(x){
//     return(
//         <Note 
//         key={x.key}
//         title={x.title}
//         content={x.content}
//         />
//     );
// }



// function App(){
// return(
//     <div>
//         <Header />
//         {notes.map((x)=> (<Note key={x.key} title={x.title}content={x.content} />)
// )}
//         <Footer />
//     </div>
// );
// }

////////////////////////////////////////////////////////////////////////////////////////

// function App(){
//     const[items,setitems]=useState([]);

//     function additem(inputtext){
//         setitems(prevalue=>{
//             return[...prevalue,inputtext]
//         });
//     }
    
//     function deleteitem(id){
//         setitems(prevalue=>{
//             return prevalue.filter((item,index)=>{
//                 return index !== id;
//             });
//         });
//     }

//     return (
//         <div>
//           <Header />
//           <CreateArea onadd={additem} />
//           {items.map((item,index)=>{
//             return (
//           <Note 
//           key={index}
//           id={index} 
//           title={item.title} 
//           content={item.content} 
//           onDelete={deleteitem}
//           />
//           );
//           })}
//           <Footer />
//         </div>
//       );
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////

function App() {
    const [notes, setNotes] = useState([]);
  
    function addNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
  
  export default App;