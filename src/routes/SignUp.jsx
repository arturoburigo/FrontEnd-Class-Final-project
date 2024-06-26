import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SignUp.module.css';

export default function SignUp() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            navigate('/home')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Submit error:', error);
        }
    };

    const handleCancel = () => {
        navigate('/login'); 
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.buttons}>
                    <button type="submit" onClick={handleSubmit} className={classes.salvar}>Sign Up</button>
                    <button type="button" className={classes.cancelar} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
