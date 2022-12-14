import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
function Register() {
	return (
		<Form>
			<h1>Register</h1>
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
			<Button variant="success" type="submit" className="mt-4">
				Register
			</Button>
			<div className="mt-4">
				<p>
					Already have an account?
					<Link to="/Login">
						<Button variant="info" size="sm">
							Login
						</Button>
					</Link>
				</p>
			</div>
		</Form>
	);
}

export default Register;
