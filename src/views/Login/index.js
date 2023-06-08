import React, { useState } from 'react';
import { Redirect } from 'react-router';
import {
  Box,
  Button,
  Container,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import Page from '../../components/Layout/Page';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AuthService from '../../services/authService';
import useStyles from './styles';

function LoginView() {
  const classes = useStyles();
  const [seeRegisterForm, setSeeRegisterForm] = useState(false);

  if (AuthService.isAuthenticated()) {
    return <Redirect to="/postRegister" />;
  }
  const handleShowRegisterForm = () => {
    setSeeRegisterForm(!seeRegisterForm);
  };

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Container className={classes.container}>
        <Card className={classes.card}>
          <Box mt='6.5%'
          >
            <CardContent className={classes.contentLogin}>
              <Typography
                variant="h2"
                color="textSecondary"
              >
                Ingresar
              </Typography>
              <Box mt={3}>
                <LoginForm />
              </Box>
            </CardContent>
          </Box>
          <Box>
            <CardContent className={classes.contentLogin}>
              <Typography
                variant="h2"
                color="textSecondary">
                Creá tu cuenta
              </Typography>
              <Box mt={3}>
                <RegisterForm />
              </Box>
            </CardContent>
          </Box>
          <Box
            className={classes.magicBox}
            style={{ left: seeRegisterForm ? '16.5%' : '50.9%' }}
          >
            <CardContent
              className={classes.magicBoxContent}
            >
              <Box
                display='flex'
                flexDirection='column'
                flexWrap='wrap'
                justifyContent='center'
              >
                <Box>
                  <Typography
                    variant='h2'
                    color="textSecondary"
                  >
                    {`${seeRegisterForm ? 'Bienvenidx al registro' : 'Bienvenidx al login'}`}
                  </Typography>
                </Box>
                <Box
                  mt='3%'
                  width='max-content'
                  display='flex'
                  alignSelf='center'
                >
                  <Typography
                    variant="h5"
                    color="textSecondary"
                  >
                    {`${seeRegisterForm ? '¿Tenés cuenta?' : '¿No tenés una cuenta?'}`}
                  </Typography>
                </Box>
              </Box>
              <Box mt={'5%'}>
                <Button
                  className={classes.magicBoxBtn}
                  variant="outlined"
                  fullWidth
                  onClick={handleShowRegisterForm}
                >
                  <Typography
                    variant="h5"
                    color="textSecondary"
                  >
                    {`${seeRegisterForm ? 'Iniciar sesión' : '¡Registrate!'}`}
                  </Typography>
                </Button>
              </Box>
            </CardContent>
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;
