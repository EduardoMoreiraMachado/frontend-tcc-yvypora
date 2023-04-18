import './style.css'

export const Footer = () => {
    return(
        <footer id='footer'>
            <div className="contacts-container">
                <div className="contact-item">
                    <i className="fa-solid fa-phone"></i>
                    <h1 className="social-text">(11) 4774-4700</h1>
                </div>
                <div className="contact-item">
                    <i className="fa-solid fa-envelope"></i>
                    <h1 className="social-text">yvypora@gmail.com</h1>
                </div>
                <div className="contact-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <h1 className="social-text">Rua tcc, 211, Centro, SP</h1>
                </div>
            </div>
            <div className="copyright">
                <h1 className="copyright-text">Copyright © 2023 | yvyporã</h1>
            </div>
            <div className="social-container">
                <a href="#">
                    <div className="social-item">
                        <i id="social-icon" className="fa-brands fa-youtube"></i>
                    </div>
                </a>
                <a href="#">
                    <div className="social-item">
                        <i id="social-icon" className="fa-brands fa-twitter"></i>
                    </div>
                </a>
                <a href="#">
                    <div className="social-item">
                        <i id="social-icon" className="fa-brands fa-instagram"></i>
                    </div>
                </a>
                <a href="#">
                    <div className="social-item">
                        <i id="social-icon" className="fa-brands fa-facebook-f"></i>
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer