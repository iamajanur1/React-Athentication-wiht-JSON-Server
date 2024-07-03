import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import api from '../api';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', {
        firstName,
        lastName,
        email,
        password
      });

      if (response.status === 201) {
        alert("Successfully registered");
        navigate('/login');
      }
    } catch (error) {
      console.error('Register error', error);
    }
  };

  return (
    <form onSubmit={handleRegister} style={styles.form}>
      <h2 style={styles.heading}>Register</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}  
          style={styles.input}
          required
        />
      </div>
      <button type="submit" style={styles.button}>Register</button>
      <p style={styles.registerLink}>
        If already registered? <Link to="/login" style={styles.link}>login here</Link>
      </p>
    </form>
  );
};

// Inline CSS styles
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    marginTop: '20px',
    padding: '12px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    textTransform: 'uppercase'
  }
};

export default Register;
