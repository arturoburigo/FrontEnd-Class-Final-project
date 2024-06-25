import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
