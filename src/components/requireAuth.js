import { useSelector } from "react-redux";
import { useEffect } from "react";

const requireAuth = (ChildComponent) => {
  return (props) => {
    const authenticated = useSelector((state) => state.auth.authenticated);
    const { history } = props;
    useEffect(() => {
      !authenticated && history.push("/");
    }, [authenticated, history]);
    return <ChildComponent {...props} />;
  };
};

export default requireAuth;
