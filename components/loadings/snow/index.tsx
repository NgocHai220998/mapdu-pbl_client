import { ISwitchTheme } from "../../helpers/SwitchTheme/index.config"

const LoadSnow = (props: ISwitchTheme) => {
  const { isLoading } = props;

  return (
    <div style={{display: isLoading ? 'block' : 'none'}} className="loading-container">
      <div className="loading-container__snow">
        <div className="loading-container__snow-icon-cloud">
          <div className="loading-container__snow-icon snow-icon-1"></div>
          <div className="loading-container__snow-icon snow-icon-2"></div>
          <div className="loading-container__snow-icon snow-icon-3"></div>
          <div className="loading-container__snow-icon snow-icon-4"></div>
          <div className="loading-container__snow-icon snow-icon-5"></div>
          <div className="loading-container__snow-icon snow-icon-6"></div>
          <div className="loading-container__snow-icon snow-icon-7"></div>
          <div className="loading-container__snow-icon snow-icon-8"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadSnow
