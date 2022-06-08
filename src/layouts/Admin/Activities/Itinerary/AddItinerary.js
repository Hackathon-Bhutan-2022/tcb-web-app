import React from 'react';
import {Grid} from '@mui/material';
import {TextField} from 'formik-mui';
import Typography from '@mui/material/Typography';
import {DatePicker, LocalizationProvider} from '@mui/lab';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {Field, useFormikContext} from 'formik';

export default function AddItinerary() {
  const {setFieldValue, values} = useFormikContext();

  return (
    <div>
      <Typography fontWeight={'550'} fontSize={20} align={'center'}>New Itinerary</Typography>
      <Grid container spacing={2}>
        <Grid item lg={3.5} md={3.5} sm={3.5} xs={12}/>
        <Grid item lg={5} md={5} sm={5} xs={12}>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Title</Typography>
          <Field component={TextField} name="title" fullWidth={true} size={'small'} placeholder={'Enter title'}/>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Number of days</Typography>
          <Field component={TextField} name="number_of_days" size={'small'} placeholder={'Enter number'} type={'number'}
                 fullWidth/>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Number of nights</Typography>
          <Field component={TextField} name="number_of_nights" size={'small'} placeholder={'Enter number'}
                 type={'number'} fullWidth/>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Start Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={values?.start_date}
              onChange={(newValue) => {
                setFieldValue('start_date', newValue);
              }}
              renderInput={(params) => <Field component={TextField} name="start_date" fullWidth
                                              size={'small'} {...params} />}
            />
          </LocalizationProvider>
          <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>End Date</Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={values?.end_date}
              onChange={(newValue) => {
                setFieldValue('end_date', newValue);
              }}
              renderInput={(params) => <Field component={TextField} name="end_date" fullWidth
                                              size={'small'} {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={12}/>
      </Grid>
    </div>
  );
}
