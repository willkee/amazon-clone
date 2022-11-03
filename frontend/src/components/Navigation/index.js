import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/session";
import styles from "./Navigation.module.css";

export default function Nav({ currentUser }) {
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

	const handleLogout = async (e) => {
		e.preventDefault();
		await dispatch(logout());
	};

	return (
		<div className={styles.container}>
			<div className={styles.nav_top}>
				<div className={styles.nav_left}>
					<div className={styles.logo}></div>
					<div className={styles.location}>
						<div className={styles.pin}></div>
						<div className={styles.hello_address}>
							<span>Hello</span>
							<span>Select your address</span>
						</div>
					</div>
				</div>
				<div className={styles.search}>
					<div className={styles.search_left}>All</div>
					<div></div>
					<div className={styles.search_right}>Go</div>
				</div>
				<div className={styles.lang}>
					<img src="/assets/us_flag.png" alt="US"></img>
					<span>EN</span>
				</div>
			</div>
			<div className={styles.nav_links}>Nav Links</div>
			<div className={styles.nav_other}>
				<form onSubmit={handleSubmit}>
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
				</form>
				{currentUser ? (
					<div>
						<div>Welcome Back {currentUser.firstName}!</div>
						<button onClick={handleLogout}>Logout</button>
					</div>
				) : (
					<div>Please Login</div>
				)}
			</div>
		</div>
	);
}
