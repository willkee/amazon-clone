import styles from "./Banner.module.css";

export default function Banner() {
	//
	return (
		<div className={styles.nav_top}>
			<div className={styles.nav_left}>
				<img
					className={styles.logo}
					src="/assets/awazon_logo.png"
					alt="amazon logo"
				/>
				<div></div>
				<div className={styles.location}>
					<img
						className={styles.pin}
						src="/assets/location_pin.png"
						alt="location pin icon"
					></img>
					<div className={styles.hello_address}>
						<span>Hello</span>
						<span>Select your address</span>
					</div>
				</div>
			</div>
			<div className={styles.search}>
				<div className={styles.search_left}>All</div>
				<div className={styles.input_container}>
					<input className={styles.nav_search_input} />
				</div>

				<div className={styles.search_right}>
					<img src="/assets/search_mag_glass.png" alt="search icon" />
				</div>
			</div>
			<div className={styles.lang}>
				<img src="/assets/us_flag.png" alt="US"></img>
				<span>EN</span>
			</div>
			<div className={styles.hello_profile}>
				<div>Hello, sign in</div>
				<div>Account & Lists</div>
			</div>
			<div className={styles.returns_orders}>
				<div>Returns</div>
				<div>& Orders</div>
			</div>
			<div className={styles.cart_container}>
				<img src="/assets/cart_icon.png" alt="cart icon" />
			</div>
		</div>
	);
}
