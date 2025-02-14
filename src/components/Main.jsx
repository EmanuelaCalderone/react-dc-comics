//importo contenuto fascia blu
import BlueMenu from "./BlueMenu";

//importo le Card
import CardsList from "./CardsList";

//esporto la funzione main
export default function Main() {
    return (
        //contenuto main
        <main>
            {/* creo jumbotron con immagine */}
            <div className="jumbotron"></div>
            {/* aggiungo componente BlueMenu */}
            <CardsList />
            {/* aggiungo componente BlueMenu */}
            <BlueMenu />
        </main >
    );
} 