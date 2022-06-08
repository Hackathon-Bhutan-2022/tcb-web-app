import React, {useState} from 'react';
import {Container, Step, StepLabel, Stepper} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Stack from '@mui/material/Stack';
import {itinerarySteps} from './Stepper';
import {ColorlibConnector, ColorlibStepIcon} from './StepperIcon';
import Button from '@mui/material/Button';
import {Form, Formik} from 'formik';

export default function ItineraryStepper() {
  const [value, setValue] = React.useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const initialValues = itinerarySteps.reduce(
    (values, {initialValues}) => ({
      ...values,
      ...initialValues,
    }),
    {},
  );

  const ActiveStep = itinerarySteps[activeStep];
  const validationSchema = ActiveStep.validationSchema();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (values, {setSubmitting}) => {
    setSubmitting(false);
    handleNext();
  };

  return (
    <Container style={{marginBottom: 100}}>
      <Formik validateOnBlur={true} validateOnChange={true} onSubmit={onSubmit} validationSchema={validationSchema}
              initialValues={initialValues} enableReinitialize>
        {({
            isSubmitting, touched, values, setFieldValue,
            errors, dirty, isValid, ...formik
          }) => {
          return (
            <Form>
              <Stack sx={{width: '100%'}} spacing={4}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                  {itinerarySteps.map((mtv, index) => (
                    <Step key={mtv.label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>{mtv.label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {itinerarySteps.map((MtvComponent, index) => (
                  index === activeStep &&
                  <div key={index}>
                    <MtvComponent />
                  </div>
                ))}
                <Container>
                  {activeStep !== 0 &&
                  <Button sx={{ backgroundColor: "#058178"}} onClick={handleBack} startIcon={<ArrowBackIosIcon style={{fontSize: 15}}/>} variant={'contained'}
                          className='mr-2 pull-left' disabled={activeStep === 0}>Previous</Button>}
                  <Button sx={{ backgroundColor: "#058178"}} endIcon={<ArrowForwardIosIcon style={{fontSize: 15}}/>} variant={'contained'}
                          className='pull-right' type="submit">
                    {activeStep === itinerarySteps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Container>
              </Stack>
            </Form>);
        }}
      </Formik>
    </Container>
  );
}
