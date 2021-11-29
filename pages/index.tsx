import type { NextPage } from 'next'

import withAuth from '../hocs/WithAuth';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Workspace from '../components/workspace';
import Todos from '../components/Todos';

const useStyles = makeStyles({
  root: {
    padding: '16px',
  }
})

const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={3}>
        <Workspace />
      </Grid>
      <Grid item xs={6.5}>
        <Todos />
      </Grid>
      <Grid item xs={2.5}>
        <div>
          <iframe
            src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
            width="100%" height="330"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </Grid>
    </Grid>
  )
}

export default withAuth(Home);
