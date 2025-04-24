import { CirclePlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Card from "./components/Card";
import { useEffect, useState } from "react";


function App() {
  // Variável recebe a Hooke useNavigate que cria uma URL para levar o usuário até sua referência
  const navigate = useNavigate();

  // Notes é um State para quando as notas mudarem(forem adicionadas ou removidas), reagir a essa mudança
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  // Hook useEffect usado para atualizar os dados caso as notas mudem(sejam adicionadas ou removidas)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  // Ao clicar em um card, leva o usuário para a página referente a ele
  const onClickShowNote = (note) => {
    // Cria uma query string com os dados da nota para passar na URL para poder passar as informações de um jeito simples e fácil
    const query = new URLSearchParams();
    query.set('id', note.id);       // Adiciona na query a key id com o valor do id referente a nota que foi clicada
    query.set('title', note.title); // Adiciona na query a key title com o valor do título referente a nota que foi clicada
    query.set('about', note.about); // Adiciona na query a key about com o valor do sobre referente a nota que foi clicada
    query.set('text', note.text);   // Adiciona na query a key text com o valor do texto referente a nota que foi criada
    navigate(`/note?${query.toString()}`); // navigate cria a URL /note com ? que significa que depois dele existem parâmetros
  }

  return (
    <>
      <header>
        <h1>Home</h1>
        <Link to={'/newnote'}>
          <CirclePlus className="icon" color="black" size={36}/>
        </Link>
      </header>
      <main className="main-container">
        {
          notes.map(note => <Card key={note.id} onClick={() => onClickShowNote(note)} title={note.title}/>)
        }
      </main>
    </>
  )
}

export default App;

/*
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'TypeScript',
      about: 'Linguagem parentesca do JavaScript',
      text: 'TypeScript é uma sub linguagem do JavaScript, ela é considerada um superset do JS por poder conter todo o conteúdo que o JS tem e mais um pouco que não tem'
    },
    {
      id: 2,
      title: 'React',
      about: 'Framework utilizado para criação de sites e aplicativos',
      text: 'O React é um framework muito utilizado para desenvolvimento web e de aplicativos. Ele funciona por meio de componentes, onde cada parte do site ou app é uma peça de lego se encaixando '
    },
    {
      id: 3,
      title: 'Conta',
      about: 'Email e Senha da conta XXX',
      text: 'email: abc@gmail.com - senha: 12345'
    }
  ]);

*/
