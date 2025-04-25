import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function EditNote() {
    const navigate = useNavigate();
    const [newTitle, setNewTitle] = useState("");
    const [newAbout, setNewAbout] = useState("");
    const [newText, setNewText] = useState("");

    const [searchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const title = searchParams.get('title');

    const onClickEditNote = (newTitle, newAbout, newText) => {
        if (newTitle.length == 0 || newAbout.length == 0 || newText.length == 0) {
            alert("Preencha todos os campos!");
            return;
        }


        // Pega todas as notas criadas e armazenadas
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];

        if (storedNotes.length == 0) {
            alert("Nenhuma nota encontrada, retornando...");
            setTimeout(() => {
                navigate("/");
            }, 500);
            return;
        }

        // Procura a nota em que o id dela é igual ao id do array notas e edita aquela nota dentro do array original(notas)
        const noteToUpdate = storedNotes.find(note => note.id === id);

        if (!noteToUpdate) {
            alert("Nota não encontrada!");
            return;
        }
        
        noteToUpdate.title = newTitle;
        noteToUpdate.about = newAbout;
        noteToUpdate.text = newText;

        localStorage.setItem('notes', JSON.stringify(storedNotes));

        setNewTitle("");
        setNewAbout("");
        setNewText("");

        navigate('/');
    }

    return (
        <>
            <header>
                <h1>{title}</h1>
                <Link to={'/'}>
                    <ArrowLeft size={36} color="black"/>
                </Link>    
            </header>  
            <main className="main-create">
                <div className="register-note">
                    <input type="text" placeholder="New title..."  onChange={event => setNewTitle(event.target.value)} value={newTitle}/>
                    <input type="text" placeholder="New desc..." onChange={event => setNewAbout(event.target.value)} value={newAbout} />
                    <textarea className="textarea" onChange={event => setNewText(event.target.value)} value={newText}></textarea>
                    <button className="btnCreate" onClick={() => onClickEditNote(newTitle, newAbout, newText)}>Edit</button>
                </div>
            </main>
        </>
    );
}

export default EditNote;