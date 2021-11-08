import Login from "../../pages/login";

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    

    if (true) {
      return (
        <Login />
      );
    }

    return (
      <Component {...props} />
    );
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
