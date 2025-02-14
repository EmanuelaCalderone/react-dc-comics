//importo contenuto fascia blu
import BlueMenu from "./BlueMenu";

//importo le Card
import CardsList from "./CardsList";

//esporto la funzione main
export default function Main() {
    return (
        //contenuto main
        <main>
            {/* aggiungo componente CardsList */}
            <CardsList />
            {/* aggiungo componente BlueMenu */}
            <BlueMenu />
        </main >
    );
} 