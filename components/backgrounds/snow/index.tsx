import { useEffect } from "react";

const BGSnow = () => {
  const starts = () => {
    const count = 400;
    const element = document.querySelector('.bg-snow-container__snow');
    let i = 0;

    while (i < count) {
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth)
      const y = Math.floor(Math.random() * window.innerHeight)
      const size = Math.random() * 1;

      star.style.left = x + 'px'
      star.style.top = y + 'px'
      star.style.width = 2 + size + 'px'
      star.style.height = 2 + size + 'px'
      star.style.animationDuration = 2 + size + 's'
      element?.appendChild(star);
      ++i;
    }
  }
  
  useEffect(() => {
    starts()
  }, [])

  return (
    <>
      <div className="bg-snow-container">
        <div className="bg-snow-container__snow">
        <i></i>
        </div>
      </div>
      <style jsx global>{`
        .el-hover, .loading-container {
          &:hover {
            cursor: url('/static/images/snowflake.png'), auto;
          }
        }
        .border {
          border-color: #45f1e1;
        }
        .border-selected {
          border-color: blue!important;
        }
        .border-hover {
          border: 2px solid #fff0;
          &:hover {
            border: 2px solid #45f1e1;
            opacity: .65;
          }
        }
        .background {
          background-color: rgba(64, 60, 129, .75);
          &-highlight {
            background-color: #45f1e1;
          }
        }
        
      `}
      </style>
    </>
  )
}

export default BGSnow
