import Button from "../../Atoms/Button/Button";
import Form from "react-bootstrap/Form";
import "./Register.scss";

function Register() {
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
      <Form.Group className="mt-3">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          name="confirPassword"
          required
          // value={password}
          // onChange={onChangeLoginForm}
        />
      </Form.Group>
      <Button text={"Register"} classess={"register-form"} />
    </Form>
  );
}

export default Register;
