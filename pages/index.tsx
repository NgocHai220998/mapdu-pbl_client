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
    <Grid className={classes.root} container spacing={4}>
      <Grid item xs={3}>
        <Workspace />
      </Grid>
      <Grid item xs={9}>
        <Todos />
      </Grid>
    </Grid>
  )
}

export default withAuth(Home);
