export default function Header() {
    console.log("header renderizzato");
    return (
        <header>
            <img src="/img/favicon.ico" alt="Logo" />
            <nav>
                <ul>
                    <li>CHARACTERS</li>
                    <li>COMICS</li>
                    <li>MOVIES</li>
                    <li>TV</li>
                    <li>GAMES</li>
                    <li>COLLECTIBLES</li>
                    <li>VIDEOS</li>
                    <li>FANS</li>
                    <li>NEWS</li>
                    <li>SHOP</li>
                </ul>
            </nav>
        </header>
    );
}