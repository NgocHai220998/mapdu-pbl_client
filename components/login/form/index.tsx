import type { NextPage } from 'next'
import { useFormik } from 'formik';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { initialValues, validationSchema } from './config';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles({
  root: {
    padding: '32px 24px'
  },
  formContainer: {
    padding: '8px 128px',
  },
  terms: {
    fontSize: '12px',
    color: 'rgba(21, 21, 21, 0.65)',
  },
  elHover: {
    color: '#ce8f14',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  signup: {
    textAlign: 'right'
  },
  toSignUp: {
    color: '#ce8f14',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});


const HForm: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className={classes.root}>
      <div className={classes.signup}>
        <span>
          Not a member?
          <i
            className={classes.toSignUp + ' el-hover'}
            onClick={() => router.push('/register')}
          > Sign Up</i>
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Grid className={classes.formContainer} container spacing={0}>
          <Grid item xs={12}>
            <div className="wrapper">
              <h1>Log In</h1>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="wrapper">
              <TextField
                fullWidth
                variant="outlined"
                id="email"
                name="email"
                label="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="wrapper">
              <TextField
                fullWidth
                variant="outlined"
                id="password"
                name="password"
                label="Password (8+ characters)"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="wrapper">
              <FormControlLabel
                control={
                  <Checkbox defaultChecked />
                }
                label={
                  <span className={classes.terms}>
                    Remember me?
                  </span>
                }
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="wrapper">
              <Button color="primary" variant="contained" fullWidth type="submit">
                Log In
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </section>
  )
}

export default HForm
