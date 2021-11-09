const BGNormal = () => {
  return (
    <>
      <div className="bg-normal-container">
      </div>
      <style jsx global>{`
        .el-hover, .loading-container {
          &:hover {
            cursor: url('/static/images/normal-cursor.png'), auto;
          }
        }
        .border {
          border-color: #fdb55d;
        }
        .border-selected {
          border-color: red!important;
        }
        .border-hover {
          border: 2px solid #fff0;
          &:hover {
            border: 2px solid #fdb55d;
            opacity: .65;
          }
        }
        .background {
          background-color: rgba(127, 85, 85, .75);
        }
      `}
      </style>
    </>
  )
}

export default BGNormal
