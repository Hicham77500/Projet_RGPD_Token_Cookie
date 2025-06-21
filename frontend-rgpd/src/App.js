import { useState } from 'react';
import axios from 'axios';
import CookieBanner from './CookieBanner';

function App() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email });
      setToken(res.data.token);
      setMessage('✅ Token reçu !');
    } catch (err) {
      setMessage('❌ Erreur lors de la connexion');
    }
  };

  const fetchProtected = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/auth/protected', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage('⛔ Accès refusé');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>RGPD Token Frontend</h1>
      </header>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <input
          type="email"
          placeholder="Email utilisateur"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={handleLogin}>Login</button>

        {token && (
          <>
            <p style={{ wordBreak: 'break-all' }}>🔐 Token: {token}</p>
            <button onClick={fetchProtected}>Accéder à la route protégée</button>
          </>
        )}

        <p style={{ marginTop: '1rem' }}>{message}</p>
        <CookieBanner />
      </div>
    </div>
  );
}

export default App;
