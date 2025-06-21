import { useState, useEffect } from 'react';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f5f5f5',
      padding: '1rem',
      textAlign: 'center',
      boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <p style={{ marginBottom: '0.5rem' }}>
        Ce site utilise des cookies pour améliorer votre expérience utilisateur.
      </p>
      <button onClick={handleAccept} style={{ marginRight: '10px' }}>
        ✅ Accepter
      </button>
      <button onClick={handleReject}>
        ❌ Refuser
      </button>
    </div>
  );
}

export default CookieBanner;
