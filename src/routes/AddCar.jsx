import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './EditCar.module.css'; 
import Header from '../components/Header';

export default function AddCar() {
    const navigate = useNavigate();
    const [car, setCar] = useState({
        carName: '',
        carDetails: '',
        carPrice: '',
        carYear: '',
        carKilometer: '',
        carImage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCar(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(car),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            navigate('/');
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <>
            <Header/>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="carName">Nome do Carro</label>
                    <input
                        type="text"
                        id="carName"
                        name="carName"
                        value={car.carName}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="carDetails">Detalhes do Carro</label>
                    <input
                        type="text"
                        id="carDetails"
                        name="carDetails"
                        value={car.carDetails}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="carPrice">Preço</label>
                    <input
                        type="text"
                        id="carPrice"
                        name="carPrice"
                        value={car.carPrice}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="carYear">Ano</label>
                    <input
                        type="text"
                        id="carYear"
                        name="carYear"
                        value={car.carYear}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="carKilometer">Quilometragem</label>
                    <input
                        type="text"
                        id="carKilometer"
                        name="carKilometer"
                        value={car.carKilometer}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="carKilometer">URL da Imagem</label>
                    <input
                        type="text"
                        id="carImage"
                        name="carImage"
                        value={car.carImage}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.buttons}>
                    <button type="submit" className={classes.salvar}>Salvar</button>
                    <button type="button" className={classes.cancelar} onClick={handleCancel}>Cancelar</button>
                </div>
            </form>
        </>
    );
}
