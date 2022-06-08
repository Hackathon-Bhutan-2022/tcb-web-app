import React from 'react';
import 'date-fns';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import CreateItinerary from './CreateItinerary';
import GuestDetail from './GuestDetail';
import SummaryItinerary from './SummaryItinerary';

const messages = {
  required: 'Field is required',
};

const startItinerary = (props) => {

  return (
    <div>
      <CreateItinerary />
    </div>
  );
};

startItinerary.label = <Typography className='font-14 white-color'>Start Itinerary</Typography>;
startItinerary.initialValues = {
  artist_ids: [],
  genre_ids: [],
  title: '',
  description: '',
  duration: '',
  category: '',
  paid_content: '',
  content_type: '',
  premier_date: new Date(),
  photo_attributes: null,
};

startItinerary.validationSchema = () => Yup.object().shape({
  // title: Yup.string().nullable().required(messages.required),
  // genre_ids: Yup.array().min(1, messages.required).required(messages.required),
  // artist_ids: Yup.array().min(1, messages.required).required(messages.required),
  // category: Yup.string().nullable().required(messages.required),
  // paid_content: Yup.string().nullable().required(messages.required),
  // photo_attributes: Yup.object().shape({
  //   image: Yup.mixed().nullable().required(messages.required)
  // })
});

const GuestDetails = (props) => {

  return (
    <div>
      <GuestDetail />
    </div>
  );
};

GuestDetails.label = <Typography className='font-14 white-color'>Guest Details</Typography>;
GuestDetails.initialValues = {video_attributes: {clip: null}};

GuestDetails.validationSchema = () => Yup.object().shape({
  // video_attributes: Yup.object().shape({
  //   clip: Yup.mixed().nullable().required(messages.required)
  // }),
});

const Summary = (props) => {

  return (
    <div>
      <SummaryItinerary />
    </div>
  );
};

Summary.label = <Typography className='font-14 white-color'>Summary</Typography>;
Summary.initialValues = {video_attributes: {clip: null}};

Summary.validationSchema = () => Yup.object().shape({
  // video_attributes: Yup.object().shape({
  //   clip: Yup.mixed().nullable().required(messages.required)
  // }),
});

export const itinerarySteps = [startItinerary, GuestDetails, Summary];
