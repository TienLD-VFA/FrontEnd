import Login from "../../auth/Login/Login";
import Register from "../../auth/Register/Register";
import "./HomeWrapper.scss";

const HomeWrapper = ({ authRoute }) => {
  let body;

  body = (
    <>
      {authRoute === "login" && <Login />}
      {authRoute === "register" && <Register />}
    </>
  );

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="title">
            <div>Learn IT</div>
            <div>Keep track of what you are learning</div>
            {authRoute === "login" ? <div>Login</div> : <div>Register</div>}
          </div>
          {body}
        </div>
      </div>
    </div>
  );
};

export default HomeWrapper;
