import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) {
        const response = await axios.get('http://localhost:3000/users');
        const data = response.data;
        const foundUser = data.find(user => user.email === userEmail);
        if (foundUser) {
          setUser(foundUser);
          setUsername(foundUser.username);
          setEmail(foundUser.email);
          setPassword(foundUser.password);
        }
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  const handleDelete = async () => {
    try {
      if (user) {
        await axios.delete(`http://localhost:3000/users/${user.id}`);
        localStorage.removeItem('userEmail');
        localStorage.setItem('isAuthenticated', 'false');
        navigate('/login');
      } else {
        console.error('Usuário não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        const updatedUser = {
          ...user,
          username,
          email,
          password
        };
        await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
        localStorage.setItem('userEmail', email); 
        alert('Dados do usuário atualizados com sucesso!');
      } else {
        console.error('Usuário não encontrado.');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Profile</h1>
      <form onSubmit={handleUpdate} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit">Alterar</button>
          <button onClick={handleLogout} className="logout">Sair</button>
          <button onClick={handleDelete} className="delete">Deletar Usuário</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
