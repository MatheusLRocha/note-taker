import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateNoteHeader from "../components/CreateNoteHeader";

function CreateNote() {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate();
   
    function onClickAddNote(title, about, text) {

        if (title.length == 0 || about.length == 0 || text.length == 0) {
            alert("Você precisa preencher os campos...");
            return;
        }
        
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];

        const newNote = {
            id: storedNotes.length > 0 ? storedNotes[storedNotes.length - 1].id + 1 : 1 ,
            title,
            about,
            text
        }

        const updatedNotes = [...storedNotes, newNote]; // Adiona em vetor os valores ja existentes mais o novo valor

        localStorage.setItem('notes', JSON.stringify(updatedNotes));

        setTitle("");
        setAbout("");
        setText("");

        navigate('/');
    }

    return(
        <>
            <CreateNoteHeader />
            <main className="main-create">
                <div className="register-note">
                    <input type="text" placeholder="Title..."  onChange={event => setTitle(event.target.value)} value={title}/>
                    <input type="text" placeholder="Short desc..."  onChange={event => setAbout(event.target.value)} value={about}/>
                    <textarea className="textarea"  onChange={event => setText(event.target.value)} value={text}></textarea>
                    <button onClick={() => onClickAddNote(title, about, text)} className="btnCreate">Create</button>
                </div>
            </main>
        </>
    )
}

export default CreateNote;