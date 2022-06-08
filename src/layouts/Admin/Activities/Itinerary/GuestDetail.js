import React from 'react';
import {Autocomplete, Grid} from '@mui/material';
import {TextField} from 'formik-mui';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import {Field, useFormikContext} from 'formik';
import {countries} from '../../../../common/Models/Countries';

export default function GuestDetail() {
  const {values, setFieldValue} = useFormikContext();

  const handleAdd = () => {
    values?.itinerary_guests_attributes.push({
      name: '',
      age: null,
      nationality: ''
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={3} sm={3} xs={12}/>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        {values?.itinerary_guests_attributes?.map((guest, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{guest?.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Guest Name</Typography>
              <Field component={TextField} name={`itinerary_guests_attributes[${index}].name`} fullWidth={true}
                     size={'small'} placeholder={'Enter'}/>
              <Typography fontSize={14} fontWeight={700} sx={{mt: 2}} align={'left'}>Age</Typography>
              <Field component={TextField} name={`itinerary_guests_attributes[${index}].age`} size={'small'}
                     placeholder={'Enter age'} fullWidth/>
              <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Nationality</Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={countries}
                getOptionLabel={(option) => option?.label}
                value={countries.find(val => val.label === guest?.nationality)}
                onChange={(option) => {
                  setFieldValue(`itinerary_guests_attributes[${index}].nationality`, option?.label);
                }}
                margin={'none'}
                size={'small'}
                fullWidth
                renderInput={(params) => <Field component={TextField}
                                                name={`itinerary_guests_attributes[${index}].nationality`} {...params}
                                                label="Select nationality"/>}
              />
            </AccordionDetails>
          </Accordion>
        ))}
        <Button startIcon={<AddIcon/>} variant={'outlined'} onClick={handleAdd}
                sx={{color: '#848282', border: '1px solid #848282', textTransform: 'none', mt: 2}}>
          Add more guest
        </Button>
      </Grid>
    </Grid>
  );
}
