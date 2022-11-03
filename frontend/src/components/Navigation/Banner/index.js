import styles from "./Banner.module.css";

export default function Banner() {
	//
	return (
		<div className={styles.nav_top}>
			<div className={styles.nav_left}>
				<img
					className={styles.logo}
					src="/assets/amazon_icon.png"
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
				<div></div>

				<div className={styles.search_right}>
					<img src="/assets/search_mag_glass.png" alt="search icon" />
				</div>
			</div>
			<div className={styles.lang}>
				<img src="/assets/us_flag.png" alt="US"></img>
				<span>EN</span>
			</div>
			<div>
				<div>Hello, sign in</div>
				<div>Account & Lists</div>
			</div>
			<div>
				<div>Returns & Orders</div>
			</div>
			<div className={styles.cart_container}>
				<img src="/assets/cart_icon.png" alt="cart icon" />
			</div>
		</div>
	);
}
