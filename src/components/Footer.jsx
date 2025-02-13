//esporto la funzione footer
export default function Footer() {
    return (
        //contenuto footer
        <footer>
            {/* footer principale */}
            <div id="footer-1">
                <div className="menu">
                    <div className="menu_left">
                        <ul>
                            <li>DC COMICS</li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>Tv</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>

                        <ul>
                            <li>SHOP</li>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                    <div className="menu_right">
                        <ul>
                            <li>DC</li>
                            <li>Terms of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>

                        <ul>
                            <li>SITES</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>

                    </div>

                </div>


                {/* Logo sopra lo sfondo */}
                <div className="dc-logo">
                    <img src="/img/dc-logo-bg.png" alt="DC Logo" />
                </div>
            </div>

            {/* footer secondario */}
            <div id="footer-2">

                <div className="button">
                    <button id="sign-up_button">SIGN-UP NOW!</button>
                </div>

                <div className="social">
                    <button id="follow-us_button">FOLLOW US</button>
                    <img src="/img/footer-facebook.png" alt="Facebook Logo" />
                    <img src="/img/footer-twitter.png" alt="Twitter Logo" />
                    <img src="/img/footer-youtube.png" alt="YouTube Logo" />
                    <img src="/img/footer-pinterest.png" alt="Pinterest Logo" />
                    <img src="/img/footer-periscope.png" alt="Map Logo" />
                </div>

            </div>
        </footer>
    );
}