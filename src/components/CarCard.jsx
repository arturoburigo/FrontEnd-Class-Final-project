import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CarCard.module.css';

export default function CarCard() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/cars');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setCars(cars.filter(car => car.id !== id));
        } catch (error) {
            console.error('Delete error:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    if (!Array.isArray(cars)) {
        return <div>Error: Failed to load cars data</div>;
    }

    return (
        <div className={classes.cardsContainer}>
            {cars.map((car) => (
                <div key={car.id} className={classes.content}>
                    <div className={classes.carContent}>
                        <img src={car.carImage} alt="" />
                    </div>
                    <div className={classes.carDetails}>
                        <h1>{car.carName}</h1>
                        <p>{car.carDetails}</p>
                        <h1>R$ {car.carPrice}</h1>
                        <div className={classes.km_year}>
                            <p>{car.carYear}</p>
                            <p>{car.carKilometer}km</p>
                        </div>
                        <div className={classes.buttons}>
                            <button className={classes.editar} onClick={() => handleEdit(car.id)}>
                                EDITAR
                            </button>
                            <button className={classes.excluir} onClick={() => handleDelete(car.id)}>
                                Excluir
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
