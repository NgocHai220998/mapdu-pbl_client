import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { ISwitchTheme } from '../../helpers/SwitchTheme/index.config';

const LoadRace = (props: ISwitchTheme) => {
  const { isLoading } = props;

  return (
    <div style={{display: isLoading ? 'block' : 'none'}} className="loading-container">
      <div className="loading-container__race">
        <span className="loading-dot loading-dot-1"></span>
        <span className="loading-dot loading-dot-2"></span>
        <span className="loading-dot loading-dot-3"></span>
        <span className="loading-dot loading-dot-4"></span>
        <span className="loading-dot loading-dot-5"></span>
        <span className="loading-dot loading-dot-6"></span>
        <span className="loading-dot loading-dot-7"></span>
        <span className="loading-dot loading-dot-8"></span>
        <span className="loading-dot loading-dot-9"></span>
        <span className="loading-dot loading-dot-10"></span>
        <span className="loading-dot loading-dot-11"></span>
        <span className="loading-dot loading-dot-12"></span>
        <span className="loading-dot loading-dot-13"></span>
        <span className="loading-dot loading-dot-14"></span>
        <span className="loading-dot loading-dot-15"></span>
        <span className="loading-dot loading-dot-16"></span>
        <span className="loading-dot loading-dot-17"></span>
        <span className="loading-dot loading-dot-18"></span>
        <span className="loading-dot loading-dot-19"></span>
        <span className="loading-dot loading-dot-20"></span>
        <DirectionsCarIcon className="loading-container__race-icon" sx={{ color: '#eb9595', fontSize: 40 }} />
      </div>
    </div>
  )
}

export default LoadRace
