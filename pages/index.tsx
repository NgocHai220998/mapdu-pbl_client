import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import { THEME_TYPES } from '../components/helpers/SwitchTheme/index.config';
import { hiddenLoading, showLoadding } from '../slices/loading';
import { changeTheme } from '../slices/theme';
import { delayTime } from '../utils/common';

import Button from '@mui/material/Button';

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
      <Button
        className="el-hover border border-snow"
        onClick={() => handleChangeTheme(THEME_TYPES.RAIN)}
        variant="contained"
      >
        Rain
      </Button>
      <Button
        className="el-hover"
        onClick={() => handleChangeTheme(THEME_TYPES.SUN)}
        variant="contained"
      >
        Sun
      </Button>
      <Button
        className="el-hover"
        onClick={() => handleChangeTheme(THEME_TYPES.SNOW)}
        variant="contained"
      >
        Snow
      </Button>
      <Button
        className="el-hover"
        onClick={() => handleChangeTheme(THEME_TYPES.RACE_NIGHT)}
        variant="contained"
      >
        Race night
      </Button>
      <Button
        className="el-hover"
        onClick={() => handleChangeTheme(THEME_TYPES.NORMAL)}
        variant="contained"
      >
        Normal
      </Button>
    </div>
  )
}

export default Home
