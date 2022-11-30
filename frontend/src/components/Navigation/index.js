import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/session";

export default function Nav() {
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [errors, setErrors] = useState([]);

	// const dispatch = useDispatch();

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setErrors([]);

	// 	try {
	// 		await dispatch(login(email, password));
	// 		setEmail("");
	// 		setPassword("");
	// 	} catch (err) {
	// 		const data = await err.json();
	// 		if (data && data.errors) setErrors(data.errors);
	// 	}
	// };

	// const handleLogout = async (e) => {
	// 	e.preventDefault();
	// 	await dispatch(logout());
	// };

	return (
		<div>
			<div>
				{/* <form onSubmit={handleSubmit}>
					<div>
						{errors &&
							errors.map((err, i) => <div key={i}>{err}</div>)}
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
				</form> */}
				{/* <button onClick={handleLogout}>Logout</button> */}
			</div>
		</div>
	);
}
