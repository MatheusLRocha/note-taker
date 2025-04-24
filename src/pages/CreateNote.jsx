import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateNote() {
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [text, setText] = useState("");
    const navigate = useNavigate();
   
    function onClickAddNote(title, about, text) {
        
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
            <header>
                <h1>Create New Note</h1>
                <Link to={'/'}>
                    <ArrowLeft size={36} color="black"/>
                </Link>
            </header>
            <main className="main-create">
                <div className="register-note">
                    <input type="text" placeholder="Title..." value={title} onChange={event => setTitle(event.target.value)}/>
                    <input type="text" placeholder="Short desc..." value={about} onChange={event => setAbout(event.target.value)}/>
                    <textarea className="textarea" value={text} onChange={event => setText(event.target.value)}></textarea>
                    <button onClick={() => onClickAddNote(title, about, text)} className="btnCreate">Create</button>
                </div>
            </main>
        </>
    )
}

export default CreateNote;