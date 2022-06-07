import {makeStyles} from '@mui/styles';

export const useStyle = makeStyles(theme => ({
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: 35
  },
  lagthaLogo: {
    marginTop: '3em',
    width: 55,
    Height: 55,
    borderRadius: 100,
  },
  profileName: {
    marginTop: '3.2em !important',
    fontWeight: 'bold !important'
  },
  role: {
    color: 'gray !important'
  },
  divider: {
    backgroundColor: '#5d5d5d'
  },
}));
