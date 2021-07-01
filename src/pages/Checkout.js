import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Alert from '@material-ui/core/Alert';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from 'src/components/checkout/AddressForm';
import PaymentForm from 'src/components/checkout/PaymentForm';
import Review from 'src/components/checkout/Review';
import CheckIcon from "@material-ui/icons/Check";
import Sparkle from 'src/components/Sparkle';
import {useEffect} from 'react';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  addressStepButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  finalStepsButtons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  payButton: {
    background: 'linear-gradient(45deg, #00b09e 30%, #79fa6e 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

const steps = ['Dirección de envío', 'Método de pago', 'Resumen'];

export default function Checkout({onFinishedBuy, user, products, ...props}) {
  const classes = useStyles();
  const [values, setValues] = useState({
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    address: {
      ...user.address,
      useAddress: true,
    },
    payment: {
      ...user.payment,
      saveCard: true,
    },
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [huboError, setHuboError] = React.useState(false);
  const [mensajeError, setMensajeError] = React.useState([]);

  useEffect(() => {
    if(!user._id) {
      return;
    }
    axios.get('http://localhost:4000/users/detail/')
    .then((res) => {
      setValues({
        user: {
          firstName: res.data.data.firstName,
          lastName: res.data.data.lastName,
          email: res.data.data.email,
        },
        address: {
          useAddress: true,
          ...res.data.data.address,
        },
        payment: {
          saveCard: true,
          ...res.data.data.payment,
        },
      });
    });
  }, [user._id]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function handleFinalizarCompraClick() {
    setHuboError(false);
    setMensajeError([]);
    // Si seleccionó "Usar dirección para facturación"
    const finishedBuyOrder = {
      ...values,
      products,
    }
    if(values.address.saveAddress) {
      finishedBuyOrder.payment.address1 = finishedBuyOrder.address.address1;
      finishedBuyOrder.payment.state = finishedBuyOrder.address.state;
      finishedBuyOrder.payment.city = finishedBuyOrder.address.city;
      finishedBuyOrder.payment.zip = finishedBuyOrder.address.zip;
    }
    axios.post('http://localhost:4000/orders', finishedBuyOrder)
    .then(() => {
      onFinishedBuy(finishedBuyOrder);
    })
    .catch((err) => {
      setHuboError(true);
      setMensajeError(err.response.data.message);
    });
  }

  function handleChange(event) {
    setValues({
      ...values,
      [event.form]: {
        ...values[event.form],
        [event.input]: event.value,
      },
    })
  };

  function getStepContent() {
    switch (activeStep) {
      case 0:
        return <AddressForm onAddressChange={handleChange} values={values} />;
      case 1:
        return <PaymentForm onPaymentChange={handleChange} values={values} />;
      case 2:
        return <Review values={values} products={products} />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <Container maxWidth="md" style={{paddingLeft: '0px', paddingRight: '0px'}}>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
            {getStepContent(activeStep, values, products)}
            <div className={activeStep === 0 ? classes.addressStepButtons : classes.finalStepsButtons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button}>
                  Volver
                </Button>
              )}
              {activeStep === steps.length - 1 ?
              // Último paso
              <Sparkle color='random'>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFinalizarCompraClick}
                  className={classes.payButton}
                  startIcon={<CheckIcon />}
                >
                  Comprar
                </Button>
              </Sparkle>
              // Pasos intermedios
              : <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  Siguiente
                </Button>
              }
            </div>
            {huboError ?
              <Alert severity="error">
                {mensajeError.map((error, i) => <p key={i}>{error}</p>)}
              </Alert> : null
            }
        </Paper>
      </main>
    </Container>
  );
}
