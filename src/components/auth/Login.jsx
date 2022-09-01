import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
	return (
		<Form>
			<h1>Login</h1>
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
			<Button variant="success" type="submit" className="mt-4">
				Login
			</Button>
			<div className="mt-4">
				<p>
					Don't have an account?
					<Link to="/register">
						<Button variant="info" size="sm">
							Register
						</Button>
					</Link>
				</p>
			</div>
		</Form>
	);
}

export default Login;
