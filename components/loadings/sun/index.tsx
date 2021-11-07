import { ISwitchTheme } from "../../helpers/SwitchTheme/index.config";

const LoadSun = (props: ISwitchTheme) => {
  const { isLoading } = props;
  return (
    <div style={{display: isLoading ? 'block' : 'none'}} className="loading-container">
      <div className="loading-container__sun">
        <div className="loading-container__sun--icon"></div>
      </div>
    </div>
  )
}

export default LoadSun
