import type { NextPage } from 'next'
import Logo from '../../helpers/Logo'

const Banner: NextPage = () => {
  return (
    <>
      <section className="banner-login">
        <Logo />
        <h1 className="text-sologen">Own your morning & own your work</h1>
        <img className="banner-login-image" src="/static/images/banner-work-two.png" alt="banner work" />
        <article className="contact-me">
          <span>
            <strong>Me: </strong>
            <i className="el-hover">nguyen.ngoc.hai@moneyforward.co.jp</i>
          </span>
        </article>
      </section>
      <style jsx>{`
        .banner-login {
          width: 100%;
          height: 100%;
          background-color: #f2d184;
          padding: 32px 16px;
          border-radius: 8px 0 0 8px;

          &-image {
            width: 100%;
            display: block;
            margin: 0 auto;
          }
          .text-logo {
            font-size: 32px;
          }
        }
        .text-sologen {
          padding: 0px 32px;
          color: #866118;
          font-size: 24px;
          font-family: "Comic Sans MS", "Comic Sans", cursive;
        }
        .contact-me {
          padding: 16px 16px 0px 16px;
          span {
            font-size: 13px;
            color: #866118;

            i:hover {
              text-decoration: underline;
            }
          }
        }
      `}
      </style>
    </>
  )
}

export default Banner
