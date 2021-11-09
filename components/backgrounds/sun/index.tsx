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
          border-color: #fdb55d;
        }
        .border-hover {
          border: 2px solid #fff0;
          &:hover {
            border: 2px solid #fdb55d;
          }
        }
        .background {
          background-color: rgba(165, 89, 89, .75);
        }
      `}
      </style>
    </>
  )
}

export default BGSun
