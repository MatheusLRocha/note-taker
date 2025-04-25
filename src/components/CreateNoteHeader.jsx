import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function CreateNoteHeader() {
  return (
    <header>
      <h1>Create New Note</h1>
      <Link to={"/"}>
        <ArrowLeft size={36} className="icon" color="black" />
      </Link>
    </header>
  );
}

export default CreateNoteHeader;
