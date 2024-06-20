import classes from './CarCard.module.css';
import img from '../assets/sandeiro.png'

export default function CarCard(){
    return (
        <div className={classes.content}>
            <div className={classes.carContent}>
                <img src={img} alt="" />

            </div>
            <div className={classes.carDetails}>
                <h1>Sandeiro 2012</h1>
                <p>1.0 12V SCE FlEX S Edition Manual</p>
                <h1>R$ 25.999</h1>
                <div className={classes.km_year}>
                        <p>2011/2012</p>
                        <p>130.000km</p>
                </div>
                <div className={classes.buttons}>
                    <button className={classes.editar}>EDITAR</button>
                    <button className={classes.excluir}>Excluir</button>
                </div>
            </div>
        </div>
    )

}