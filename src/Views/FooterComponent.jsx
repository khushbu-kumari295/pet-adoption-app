import { Link, useNavigate } from "react-router-dom";
import { contactEmail, placeAddress, placeTitle } from "../data/config";

export function FooterComponent() {
    const navigate = useNavigate();
    return <div className="footer">
        <div className="footer-site-name">
            <div>{placeTitle}</div>
        </div>
        <div className="footer-about">
            <div className="footer-quote">
                <p>A little love is all they need. Adopt pets.</p>
            </div>
            <div className="footer-info">
                <h4>Visit our {placeTitle}</h4>
                <button className="primary-button" onClick={() => navigate('/visit')}>Plan a Visit</button>
            </div>
        </div>
        <div className="footer-privacy">
            <p>We respect your privacy and will not sell your information. Unless they offer us 2 million tons of tuna belly…mmmm,yum.</p>
            <p>{placeAddress}  |   (222)222-0000  |  {contactEmail} </p>
            <p>@2021 Welcome to the Fur-ever Paradise. For more details visit our <Link to={'/privacy'} className="privacy-link">privacy policy</Link>. </p>
        </div>

    </div>
}
