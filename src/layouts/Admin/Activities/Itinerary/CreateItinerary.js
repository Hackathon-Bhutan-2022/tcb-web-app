import React, {useState} from 'react';
import {Autocomplete, Grid} from '@mui/material';
import {TextField} from 'formik-mui';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageIcon from '@mui/icons-material/Image';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Field, useFormikContext} from 'formik';
import {dzongkhags} from '../../../../common/Models/Dzongkhags';
import {serialize as o2f} from 'object-to-formdata';
import {imageServices} from '../../../../services/ImageServices';

const Input = styled('input')({
  display: 'none',
});
export default function CreateItinerary() {
  const {setFieldValue, values} = useFormikContext();
  const [indexId, setIndex] = useState(0);

  const handleUpload = (file, index, images) => {
    if (file) {
      const formData = o2f({image: file?.[0]}, null, null, 'picture');
      imageServices(formData).then(res => {
        setFieldValue(`itinerary_items_attributes[${indexId}].pictures`, [...images, res?.url]);
      });
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={3} md={3} sm={3} xs={12}/>
        <Grid item lg={6} md={6} sm={6} xs={12}>
          {values?.itinerary_items_attributes?.map((item, index) => (
            <Accordion key={index} onChange={() => setIndex(index)} expanded={index === indexId}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Day {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Where to?</Typography>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={dzongkhags}
                  value={dzongkhags?.find(val => val?.name === item?.destination)}
                  getOptionLabel={(option) => option?.name}
                  onChange={(option) => {
                    setFieldValue(`itinerary_items_attributes[${index}].destination`, option?.name);
                  }}
                  margin={'none'}
                  size={'small'}
                  fullWidth
                  renderInput={(params) => <Field component={TextField}
                                                  name={`itinerary_items_attributes[${index}].destination`}
                                                  fullWidth {...params} label="Select dzongkhag"/>}
                />
                <Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Start time</Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Start time"
                    value={item?.start_time}
                    onChange={(newValue) => {
                      setFieldValue(`itinerary_items_attributes[${index}].start_time`, newValue);
                    }}
                    renderInput={(params) => <Field component={TextField}
                                                    name={`itinerary_items_attributes[${index}].destination`}
                                                    size={'small'} fullWidth {...params} />}
                  />
                </LocalizationProvider>
                <Typography fontSize={14} fontWeight={700} sx={{mt: 2}} align={'left'}>Activity</Typography>
                <Typography fontSize={12} fontWeight={700} align={'left'}>Activity / destination title</Typography>
                <Field component={TextField}
                       name={`itinerary_items_attributes[${index}].title`} size={'small'} placeholder={'Enter title'}
                       fullWidth/>
                <Typography fontSize={12} fontWeight={700} sx={{mt: 1}} align={'left'}>Description</Typography>
                <Field component={TextField}
                       name={`itinerary_items_attributes[${index}].description`} multiline={true} rows={5} sx={{mb: 1}}
                       placeholder={'Enter description'} fullWidth/>
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file"
                         onChange={(e) => handleUpload(e?.target?.files, index, values?.itinerary_items_attributes?.[indexId]?.pictures)}
                         multiple type="file"/>
                  <Box className="hand-cursor" sx={{border: '2px dotted #A4A2A2', borderRadius: 2, mb: 2}}
                       align={'center'}>
                    <div align={'center'} style={{padding: 10}}>
                      <ImageIcon sx={{fontSize: 45, color: '#058178'}}/>
                      <Typography fontSize={14}>
                        Upload itinerary images
                      </Typography>
                    </div>
                  </Box>
                </label>
                <Stack sx={{display: 'flex', flexDirection: 'row'}}>
                  {item?.pictures.map((value, ind) => (
                    <Stack sx={{backgroundColor: '#D9D9D9', borderRadius: 5, width: '35%', p: 0.5, ml: 1}}>
                      <Stack
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                        <Typography sx={{ml: 1}}>{`Image ${ind + 1}`}</Typography>
                        <div>
                          <CloseIcon style={{fontSize: 20, mt: 0.5}} className={'hand-cursor'}/>
                        </div>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
                {/*<Button startIcon={<AddIcon/>} variant={'outlined'}*/}
                {/*        sx={{color: '#848282', border: '1px solid #848282', textTransform: 'none', mt: 2}}>Add more*/}
                {/*  activity</Button>*/}
                {/*<Typography fontSize={12} fontWeight={700} sx={{mt: 1, mb: 1}} align={'left'}>Accommodation</Typography>*/}
                {/*<Autocomplete*/}
                {/*  disablePortal*/}
                {/*  id="combo-box-demo"*/}
                {/*  options={accommodation}*/}
                {/*  margin={'none'}*/}
                {/*  size={'small'}*/}
                {/*  fullWidth*/}
                {/*  renderInput={(params) => <Field component={TextField}*/}
                {/*                                  name={`itinerary_items_attributes[${index}].destination`} {...params} label="Select hotel name"/>}*/}
                {/*/>*/}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
