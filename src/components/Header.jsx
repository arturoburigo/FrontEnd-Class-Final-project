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
                        <a href="">ADICIONAR</a>
                    </button>
                    <button>
                        <a href="/profile">Meu perfil</a>
                    </button>
                </div>
            </div>
        </div>
    );
}
