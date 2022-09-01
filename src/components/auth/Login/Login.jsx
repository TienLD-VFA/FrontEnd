import Button from "../../Atoms/Button/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Form>
      <Form.Group className="mt-3">
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          required
          // value={username}
          // onChange={onChangeLoginForm}
        />
      </Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
          // value={password}
          // onChange={onChangeLoginForm}
        />
      </Form.Group>
      <Button text={"Login"} classess={"button-login"} />
      <div className="wrapper-Register">
        <p>Don't have an account ?</p>
        <Link to="/register">
          <Button text={"Register"} classess={"button-register"} />
        </Link>
      </div>
    </Form>
  );
}

export default Login;
