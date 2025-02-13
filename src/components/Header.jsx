//esporto la funzione header
export default function Header() {
    console.log("header renderizzato");
    return (
        //contenuto header
        <header>
            <div className="header">
                {/* logo */}
                <div className="logo">
                    <img src="/img/favicon.ico" alt="Logo" />
                </div>

                {/* barra di navigazione*/}
                <nav>
                    <ul>
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}