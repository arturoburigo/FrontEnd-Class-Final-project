import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get('http://localhost:3000/users');
      const data = response.data;
      console.log(data)
  
      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid response structure');
      }
  
      const user = data.find(user => user.email === email);
  
      if (user && user.password === password) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email); // Armazena o email do usuário
        navigate('/home');
      } else {
        setLoginError('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro ao buscar dados de usuários:', error);
      setLoginError('Erro durante o login. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h2>Car Rent</h2>
        {loginError && <p className={styles.error}>{loginError}</p>}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.loginButton}>Login</button>
        </div>
        <div className={styles.signupLink}>
          <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
