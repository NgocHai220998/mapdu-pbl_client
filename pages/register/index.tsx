import type { NextPage } from 'next'
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import Banner from '../../components/signup/banner';
import HForm from '../../components/signup/form';
import { useEffect } from 'react';
import { isLogin } from '../../utils/helpers';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80vw',
    minHeight: '85vh',
    maxHeight: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: 'rgba(0, 0, 0, 0.85) 0px 5px 15px',
  }
});

const Register: NextPage = () => {
  const classes: any = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (isLogin()) router.push('/')
  }, [])

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={4}>
        <Banner />
      </Grid>
      <Grid item xs={8}>
        <HForm />
      </Grid>
    </Grid>
  )
}

export default Register
