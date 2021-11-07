const BGSun = () => {
  return (
    <>
      <div className="bg-sun-container">
      </div>
      <style jsx global>{`
        .el-hover, .loading-container {
          &:hover {
            cursor: url('/static/images/sun-cursor.png'), auto;
          }
        }
        .border {
          &.border-sun {
            border-color: #fdb55d;
          }
        }
      `}
      </style>
    </>
  )
}

export default BGSun
