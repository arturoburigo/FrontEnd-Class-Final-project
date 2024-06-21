import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
    return (        
        <div className={classes.content}>
            <div className={classes.header_content}>
                <p className={classes.for_rent}>For rent</p>
                <div className={classes.about_us}>
                    <p>Home | Sobre nós</p>
                </div>
                <div className={classes.profile_add}>
                    <button className={classes.add_car}>
                        <Link to="/add">ADICIONAR</Link>
                    </button>
                    <button>
                        <Link to="/profile">Meu perfil</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
