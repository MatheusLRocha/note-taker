import { Link } from "react-router-dom";
import { CirclePlus } from "lucide-react";

function HomeHeader() {
  return (
    <header>
      <h1>Home</h1>
      <Link to={"/newnote"}>
        <CirclePlus className="icon" color="black" size={36} />
      </Link>
    </header>
  );
}

export default HomeHeader;
