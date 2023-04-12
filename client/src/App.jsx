import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import Option from './components/Option';
import Notification from './components/Notification';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Fragment>
      <AppBar postiion='static' color='inherit'>
        <Typography align='center' variant='h2'>
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Option>
        <Notification />
      </Option>
    </Fragment>
  );
}

export default App;
