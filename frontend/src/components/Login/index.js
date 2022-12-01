import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/session";

import styles from "./Login.module.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState([]);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrors([]);

		try {
			await dispatch(login(email, password));
			setEmail("");
			setPassword("");
		} catch (err) {
			const data = await err.json();
			if (data && data.errors) setErrors(data.errors);
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<div>
					{errors && errors.map((err, i) => <div key={i}>{err}</div>)}
				</div>
				<label>
					Email
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</label>
				<label>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="off"
					></input>
				</label>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
