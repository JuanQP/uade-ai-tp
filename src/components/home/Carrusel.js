import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  Container,
} from '@material-ui/core';

const tutorialSteps = [
  {
    imgPath:
      '/static/images/hot-sale-2.jpg',
  },
  {
    imgPath:
      '/static/images/hot-sale-3.jpg',
  },
  {
    imgPath:
    '/static/images/hot-sale-4.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1200,
      flexGrow: 1,
    },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 1,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    Width: 1920,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default function Carrusel() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  return (
    <Container maxWidth="lg">
    <div className={classes.root}>
    <Paper square elevation={0} className={classes.header}>
      <Typography>{tutorialSteps[activeStep].label}</Typography>
    </Paper>
    <img
      className={classes.img}
      src={tutorialSteps[activeStep].imgPath}
    />
    <MobileStepper
      variant="dots"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Próximo
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0 }>
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Anterior
        </Button>
        }
      />
      </div>
      </Container>
  );
}
