import type { NextPage } from 'next'
import { useFormik } from 'formik';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IFormData, initialValues, validationSchema } from './config';
import { useRouter } from 'next/dist/client/router';
import { useDispatch } from 'react-redux';
import { hiddenLoading, showLoadding } from '../../../slices/loading';
import { jsonHeader, postMethod } from '../../../utils/fetchTool';
import { API } from '../../../constants/api';
import { showToast } from '../../../slices/toast';

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
  signin: {
    textAlign: 'right'
  },
  toSignIn: {
    color: '#ce8f14',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});


const HForm: NextPage = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (values: IFormData) => {
    dispatch(showLoadding())
  
    fetch(API.SIGNUP_PATH, {
      method: postMethod.method,
      headers: jsonHeader.headers,
      body: JSON.stringify({
        user: {
          email: values.email,
          password: values.password,
          password_confirmation: values.passwordConfirmation
        }
      })
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          router.push('/login')
        } else {
          dispatch(showToast({
            message: res.errors?.message || 'Something wrong!',
            type: 'error'
          }))
        }
      })
      .catch(error => console.log(error))
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: IFormData) => {
      handleSubmit(values);
    },
  });

  return (
    <section className={classes.root}>
      <div className={classes.signin}>
        <span>
          Already a account?
          <i
            className={classes.toSignIn + ' el-hover'}
            onClick={() => router.push('/login')}
          > Log In</i>
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Grid className={classes.formContainer} container spacing={0}>
          <Grid item xs={12}>
            <div className="wrapper">
              <h1>Create account</h1>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="wrapper">
              <TextField
                fullWidth
                variant="outlined"
                id="firstName"
                name="firstName"
                label="First name (optional)"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="wrapper">
              <TextField
                fullWidth
                variant="outlined"
                id="lastName"
                name="lastName"
                label="Last name (optional)"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
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
              <TextField
                fullWidth
                variant="outlined"
                id="passwordConfirmation"
                name="passwordConfirmation"
                label="Password confirmation"
                type="password"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
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
                    Creating an account means you’re okay with our
                    <i className={classes.elHover + " el-hover"}>Terms of Service, Privacy Policy, </i>
                    and our default 
                    <i className={classes.elHover + " el-hover"}> Notification Settings.</i>
                  </span>
                }
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="wrapper">
              <Button color="primary" variant="contained" fullWidth type="submit">
                Create Account
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </section>
  )
}

export default HForm
