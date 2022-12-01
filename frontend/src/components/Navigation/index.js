import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

import Login from "../Login";
import styles from "./Navigation.module.css";

import Banner from "./Banner";

export default function Nav({ currentUser }) {
	const dispatch = useDispatch();

	const handleLogout = async (e) => {
		e.preventDefault();
		dispatch(logout());
	};

	return (
		<div className={styles.container}>
			<Banner />
			<div className={styles.nav_links}>Nav Links</div>
			<div className={styles.nav_other}>
				{currentUser ? (
					<div>
						<div>Welcome Back {currentUser.firstName}!</div>
						<button onClick={handleLogout}>Logout</button>
					</div>
				) : (
					<div>Please Login</div>
				)}
			</div>
			<Login />
		</div>
	);
}
