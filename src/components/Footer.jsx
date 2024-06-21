// Footer.jsx

import classes from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.socialMedia}>
                    <a href="https://www.facebook.com">
                        <FaFacebookF className={classes.socialIcon} />
                    </a>
                    <a href="https://www.instagram.com">
                        <FaInstagram className={classes.socialIcon} />
                    </a>
                    <a href="https://www.twitter.com">
                        <FaTwitter className={classes.socialIcon} />
                    </a>
                </div>
                <div className={classes.contact}>
                    <p>Contato:</p>
                    <p>E-mail: contato@empresa.com</p>
                    <p>Telefone: (48) 99118-8686</p>
                </div>
                <div className={classes.aboutUs}>
                    <p>Sobre nós:</p>
                    <p>Endereço: UNISATC - Criciúma - SC</p>
                    <p>CNPJ: 37.317.515/0001-20</p>
                </div>
            </div>
        </footer>
    );
}
