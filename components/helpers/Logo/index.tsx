const Logo = () => {
  return (
    <section className="logo">
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
        </filter>
      </svg>
      <span className="logo-text" filter-content="M">MyWork</span>
      <style jsx global>{`
        .logo {
          color: #212121;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .logo-text {
          position: relative;
          font-weight: 900;
          font-size: 32px;
          text-transform: uppercase;
          font-style: italic;
          letter-spacing: 0.05em;
          display: inline-block;
          font-family: "Comic Sans MS", "Comic Sans", cursive;
        }
        
        .logo-text::before {
          position: absolute;
          left: 0;
          top: 0;
          content: attr(filter-content);
          filter: url(#motion-blur-filter);
        }
        svg {
          display: none;
        }
      `}
      </style>
    </section>
  )
}

export default Logo
