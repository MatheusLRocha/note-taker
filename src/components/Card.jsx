function Card({ title, onClick }) {
    return (
        <>
            <button onClick={onClick} className="card">
                <h1>{title}</h1>
            </button>
        </>
    );
}

export default Card;