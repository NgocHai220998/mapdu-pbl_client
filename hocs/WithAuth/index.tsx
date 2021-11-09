import NavBar from "../../components/NavBar";
import Login from "../../pages/login";
import { isLogin } from "../../utils/helpers";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    if (!isLogin()) {
      return (
        <Login />
      );
    }

    return (
      <>
        <NavBar />
        <Component {...props} />
      </>
    );
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
