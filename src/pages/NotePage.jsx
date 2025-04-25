import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Trash2, PencilLine, ArrowLeft } from "lucide-react";

function NotePage() {
    /* useSearchParams é uma Hook que faz a mesma coisa do URLSearchParams, pega os valores de parâmetro da URL e também podem adicionar ou mudar eles */
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const title = searchParams.get('title');
    const about = searchParams.get('about');
    const text = searchParams.get('text');

    const onClickDeleteNote = () => {
        const notes = JSON.parse(localStorage.getItem('notes'));
        
        const newNotes = notes.filter(note => note.id !== id);

        localStorage.setItem('notes', JSON.stringify(newNotes));

        navigate("/");
    }

    const query = new URLSearchParams();
    query.set('id', id);
    query.set('title', title);
    query.set('about', about);
    query.set('text', text);

    return(
        <>
           
           <header>
                <h1>Note Page</h1>
                <div className="icons">
                    <Trash2 className="icon" onClick={onClickDeleteNote} size={36} />
                    <Link to={`/editnote?${query.toString()}`}>
                        <PencilLine size={36} color="black"/>
                    </Link>
                    <Link to={"/"}>
                        <ArrowLeft className="icon" size={36} color="black" />
                    </Link>
                </div>
            </header>
            <main className="main-note">
                <h2>{title}</h2>
                <h3>{about}</h3>
                <p>{text}</p>
            </main>
            
        </>
    )
}

export default NotePage;