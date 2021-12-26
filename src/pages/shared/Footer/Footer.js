import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import img from '../../images/footer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <Container fluid className="footer mt-5 pb-3">
            <div>
                <img src={img} className="footer-image" alt="" />
            </div>
            <div className="pb-3">
                <FontAwesomeIcon icon={faFacebook} className="fb-icon mt-3 " />
                <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
            </div>

        </Container>
    );
};

export default Footer;