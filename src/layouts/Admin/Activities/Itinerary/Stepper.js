import React from 'react';
import 'date-fns';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import CreateItinerary from './CreateItinerary';
import GuestDetail from './GuestDetail';
import SummaryItinerary from './SummaryItinerary';
import AddItinerary from './AddItinerary';

const messages = {
  required: 'Field is required',
};

const ItineraryDescription = (props) => {

  return (
    <div>
      <AddItinerary/>
    </div>
  );
};

ItineraryDescription.label = <Typography className="font-14 white-color">Start Itinerary</Typography>;
ItineraryDescription.initialValues = {
  title: '',
  number_of_days: '',
  number_of_nights: '',
  start_date: null,
  end_date: null,
};

ItineraryDescription.validationSchema = () => Yup.object().shape({
  // title: Yup.string().nullable().required(messages.required),
  // genre_ids: Yup.array().min(1, messages.required).required(messages.required),
  // artist_ids: Yup.array().min(1, messages.required).required(messages.required),
  // category: Yup.string().nullable().required(messages.required),
  // paid_content: Yup.string().nullable().required(messages.required),
  // photo_attributes: Yup.object().shape({
  //   image: Yup.mixed().nullable().required(messages.required)
  // })
});

const StartItinerary = (props) => {

  return (
    <div>
      <CreateItinerary/>
    </div>
  );
};

StartItinerary.label = <Typography className="font-14 white-color">Start Itinerary</Typography>;
StartItinerary.initialValues = {
  itinerary_items_attributes: [
    {
      destination: '',
      title: '',
      description: '',
      pictures: [],
      day: null,
      start_time: null,
      end_time: null
    }
  ]
};

StartItinerary.validationSchema = () => Yup.object().shape({
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
      <GuestDetail/>
    </div>
  );
};

GuestDetails.label = <Typography className="font-14 white-color">Guest Details</Typography>;
GuestDetails.initialValues = {
  itinerary_guests_attributes: [
    {
      name: '',
      age: null,
      nationality: ''
    }
  ]
};

GuestDetails.validationSchema = () => Yup.object().shape({
  // video_attributes: Yup.object().shape({
  //   clip: Yup.mixed().nullable().required(messages.required)
  // }),
});

const Summary = (props) => {

  return (
    <div>
      <SummaryItinerary/>
    </div>
  );
};

Summary.label = <Typography className="font-14 white-color">Summary</Typography>;
Summary.initialValues = {video_attributes: {clip: null}};

Summary.validationSchema = () => Yup.object().shape({
  // video_attributes: Yup.object().shape({
  //   clip: Yup.mixed().nullable().required(messages.required)
  // }),
});

export const itinerarySteps = [ItineraryDescription, StartItinerary, GuestDetails, Summary];
