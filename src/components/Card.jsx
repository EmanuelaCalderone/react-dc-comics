//esporto la funzione card
export default function Card(props) {
    return (
        <div className="cards-list">
            <div className="card-image">
                {/* recupero immagine e titolo dalle props */}
                <img src={props.cardThumb} alt={props.cardTitle} />
                <h4>{props.cardSeries}</h4>
            </div>

        </div>
    );
} 