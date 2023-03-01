import './style.css'

export const Footer = () => {
    return(
        <footer>
            <div class="contacts-container">
                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <h1 class="social-text">(11) 4774-4700</h1>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <h1 class="social-text">yvypora@gmail.com</h1>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <h1 class="social-text">Rua tcc, 211, Centro, SP</h1>
                </div>
            </div>
            <div class="copyright">
                <h1 class="copyright-text">Copyright © 2023 | yvyporã</h1>
            </div>
            <div class="social-container">
                <a href="#">
                    <div class="social-item">
                        <i id="social-icon" class="fa-brands fa-youtube"></i>
                    </div>
                </a>
                <a href="#">
                    <div class="social-item">
                        <i id="social-icon" class="fa-brands fa-twitter"></i>
                    </div>
                </a>
                <a href="#">
                    <div class="social-item">
                        <i id="social-icon" class="fa-brands fa-instagram"></i>
                    </div>
                </a>
                <a href="#">
                    <div class="social-item">
                        <i id="social-icon" class="fa-brands fa-facebook-f"></i>
                    </div>
                </a>
            </div>
        </footer>
    )
}