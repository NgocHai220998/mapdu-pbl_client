import { ISwitchTheme } from "../../helpers/SwitchTheme/index.config";

const LoadNormal = (props: ISwitchTheme) => {
  const { isLoading } = props;
  return (
    <div style={{display: isLoading ? 'block' : 'none'}} className="loading-container">
      <div className="loading-container__normal">
        <span className="loading-container__normal--inner"></span>
      </div>
    </div>
  )
}

export default LoadNormal
