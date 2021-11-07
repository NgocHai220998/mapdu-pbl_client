import { ISwitchTheme } from "../../helpers/SwitchTheme/index.config"

const LoadRain = (props: ISwitchTheme) => {
  const { isLoading } = props;

  return (
    <div style={{display: isLoading ? 'block' : 'none'}} className="loading-container">
      <svg className="loading-rain-svg">
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="13" />
          <feColorMatrix values="
                                  0 0 0 0 0
                                  0 1 0 0 0
                                  0 0 1 0 0
                                  0 0 0 20 -10"
          ></feColorMatrix>
        </filter>
      </svg>
      <div className="loading-container__rain">
        <span className="loading-dot loading-dot-1"></span>
        <span className="loading-dot loading-dot-2"></span>
        <span className="loading-dot loading-dot-3"></span>
        <span className="loading-dot loading-dot-4"></span>
        <span className="loading-dot loading-dot-5"></span>
        <span className="loading-dot loading-dot-6"></span>
        <span className="loading-dot loading-dot-7"></span>
        <span className="loading-dot loading-dot-8"></span>
        <span className="loading-dot loading-dot-0 rotate"></span>
        <span className="loading-dot loading-dot-1 rotate"></span>
        <span className="loading-dot loading-dot-2 rotate"></span>
        <span className="loading-dot loading-dot-3 rotate"></span>
        <span className="loading-dot loading-dot-4 rotate"></span>
      </div>
    </div>
  )
}

export default LoadRain
