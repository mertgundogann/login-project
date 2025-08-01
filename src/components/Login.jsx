
import React, { useState, useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [isValid, setIsValid] = useState(false);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  useEffect(() => {
    const validEmail = emailRegex.test(email);
    const validPassword = passwordRegex.test(password);
    setIsValid(validEmail && validPassword && accepted);
  }, [email, password, accepted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert('Login başarılı! (Burada yönlendirme yapılabilir)');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label><br/>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Şifre:</label><br/>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={e => setAccepted(e.target.checked)}
          />
          Şartları kabul ediyorum
        </label>
      </div>

      <button type="submit" disabled={!isValid}>
        Login
      </button>
    </form>
  );
};

export default Login;
