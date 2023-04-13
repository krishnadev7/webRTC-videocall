import { Typography, AppBar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Option from './components/Option';
import Notification from './components/Notification';
import VideoPlayer from './components/VideoPlayer';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 360px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar postiion='static' color='inherit' className={classes.appBar}>
        <Typography align='center' variant='h2'>
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Option>
        <Notification />
      </Option>
    </div>
  );
}

export default App;
