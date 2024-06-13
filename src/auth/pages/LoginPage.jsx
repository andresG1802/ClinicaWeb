import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography, Alert } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { api } from '../../services/api';

export const LoginPage = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      console.log(dni,password);
      const response = await fetch(`${api}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dni, password })
      });

      if (!response.ok) {
        throw new Error('Usuario no reconocido');
      }

      const data = await response.json();
      // Suponiendo que la respuesta contiene un token o información del usuario
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setError('Usuario no reconocido');
    }
  };

  return (
    <AuthLayout title="Iniciar Sesion">
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <form onSubmit={handleLogin}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField 
                  label="DNI" 
                  type="text" 
                  placeholder='75591247' 
                  fullWidth
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField 
                  label="Contraseña" 
                  type="password" 
                  placeholder='Contraseña' 
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              {error && (
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Alert severity="error">{error}</Alert>
                </Grid>
              )}
              
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <Button type="submit" variant='contained' fullWidth>
                    Ingresar
                  </Button>
                </Grid>
              </Grid>

              {/* Uncomment if needed */}
              {/* <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to="/auth/register">
                  Crear una cuenta
                </Link>
              </Grid> */}

            </Grid>
          </form>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
