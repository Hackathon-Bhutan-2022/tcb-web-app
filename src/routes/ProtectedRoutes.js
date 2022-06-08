import Dashboard from '../layouts/Admin/Dashboard/Dashboard';
import {ListTravelAgent} from '../layouts/Admin/UserManagement/TravelAgent/ListTravelAgent';
import {ListTourGuides} from '../layouts/Admin/UserManagement/TourGuides/ListTourGuides';
import {ListAnnouncement} from '../layouts/Admin/Activities/Announcement/ListAnnouncement';
import TravelAgentDetail from '../layouts/Admin/UserManagement/TravelAgent/TravelAgentDetail';
import Calender from '../layouts/Admin/Activities/Calender/Calender';
import TrackVehicle from '../layouts/Admin/Activities/TrackVehicle/TrackVehicle';
import Itinerary from '../layouts/Admin/Activities/Itinerary/Itinerary';
import ItineraryDetail from '../layouts/Admin/Activities/Itinerary/ItineraryDetail';
import SearchComponent from '../layouts/Admin/SearchComponent/SearchComponent';
import ItineraryStepper from '../layouts/Admin/Activities/Itinerary/ItineraryStepper';
import AddItinerary from '../layouts/Admin/Activities/Itinerary/AddItinerary';
import {MyItinerary} from '../layouts/Admin/Activities/Itinerary/MyItinerary/MyItinerary';
import {DetailRequest} from '../layouts/Admin/SearchComponent/DetailRequest';

export const protectedRoutes = [
  {
    primaryText: 'Dashboard',
    path: '/admin',
    authorized: [''],
    component: <Dashboard />,
  },
  {
    primaryText: 'Admin search',
    path: '/admin/search',
    authorized: [''],
    component: <SearchComponent />,
  },
  {
    primaryText: 'Travel agent list',
    path: '/admin/users/agents',
    authorized: [''],
    component: <ListTravelAgent />,
  },
  {
    primaryText: 'Tour Guide list',
    path: '/admin/users/tour-guides',
    authorized: [''],
    component: <ListTourGuides />,
  },
  {
    primaryText: 'Itinerary',
    path: '/admin/activities/itinerary',
    authorized: [''],
    component: <Itinerary />,
  },
  {
    primaryText: 'Add Itinerary',
    path: '/admin/itinerary/add',
    authorized: [''],
    component: <AddItinerary />,
  },
  {
    primaryText: 'Add Itinerary Stepper',
    path: '/admin/itinerary/add/:id',
    authorized: [''],
    component: <ItineraryStepper />,
  },
  {
    primaryText: 'Itinerary Detail',
    path: '/admin/activities/itinerary-detail',
    authorized: [''],
    component: <ItineraryDetail />,
  },
  {
    primaryText: 'Announcement list',
    path: '/admin/activities/announcements',
    authorized: [''],
    component: <ListAnnouncement />,
  },
  {
    primaryText: 'Travel Agent Detail',
    path: '/admin/users/agents/:id',
    authorized: [''],
    component: <TravelAgentDetail />,
  },
  {
    primaryText: 'Calender',
    path: '/admin/users/calender',
    authorized: [''],
    component: <Calender />,
  },
  {
    primaryText: 'Calender',
    path: '/admin/users/vehicle',
    authorized: [''],
    component: <TrackVehicle />,
  },
  {
    primaryText: 'My Itinerary',
    path: '/admin/activities/my/itinerary',
    authorized: [''],
    component: <MyItinerary />,
  },
  {
    primaryText: 'Detail Service',
    path: '/admin/detail/service',
    authorized: [''],
    component: <DetailRequest />,
  },
];
