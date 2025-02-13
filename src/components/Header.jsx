//esporto la funzione header
export default function Header({ links }) {
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
                        {/* uso map per iterare sull'array links e generare i <li> in modo dinamico*/}
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

        </header>
    );
}