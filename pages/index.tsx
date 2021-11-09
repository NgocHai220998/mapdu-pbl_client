import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { THEME_TYPES } from '../components/helpers/SwitchTheme/index.config';
import { hiddenLoading, showLoadding } from '../slices/loading';
import { changeTheme } from '../slices/theme';
import { delayTime } from '../utils/helpers';

import Button from '@mui/material/Button';
import withAuth from '../hocs/WithAuth';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const handleChangeTheme = async (theme: string) => {
    dispatch(showLoadding())
    await delayTime(3000)

    dispatch(hiddenLoading())
    dispatch(changeTheme(theme));
  }
  return (
    <div style={{ margin: '30px'}}>
    </div>
  )
}

export default withAuth(Home);
