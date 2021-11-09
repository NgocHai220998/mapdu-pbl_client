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
import { KEY_TYPES, setItem } from '../../../utils/localStoreTools';
import { setUser } from '../../../slices/user';

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
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values)
    },
  });

  const handleSubmit = (values: IFormData) => {
    dispatch(showLoadding())
  
    fetch(API.LOGIN_PATH, {
      method: postMethod.method,
      headers: jsonHeader.headers,
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      })
    }).then(response => response.json())
      .then(res => {
        dispatch(hiddenLoading())
        if (res.code === 200) {
          setItem(KEY_TYPES.AUTHEN, res?.data)
          dispatch(setUser(res?.data));
          router.push('/');

          dispatch(showToast({
            message: 'Welcome back!!! 😍',
            type: 'success'
          }))
        } else {
          dispatch(showToast({
            message: `${res.errors?.message || 'Something wrong!'} 😱`,
            type: 'error'
          }))
        }
      })
      .catch(() => {
        dispatch(hiddenLoading())
        dispatch(showToast({
          message: 'Something wrong! 😱',
          type: 'error'
        }))
      })
  }

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
              <Button className="el-hover" color="primary" variant="contained" fullWidth type="submit">
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
