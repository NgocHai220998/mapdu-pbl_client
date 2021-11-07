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
          &.border-normal {
            border-color: #fdb55d;
          }
        }
      `}
      </style>
    </>
  )
}

export default BGNormal
