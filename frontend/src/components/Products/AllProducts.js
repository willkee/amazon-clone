import styles from "./Products.module.css";

export default function AllProducts({ products }) {
	return (
		<div>
			<div>
				{products.map((product) => (
					<div className={styles.product_container} key={product.id}>
						<h3>{product.name}</h3>
						<div>{product.shortDesc}</div>
						<div>${product.price}</div>
						<img
							src={product.imageUrl}
							crossorigin="anonymous"
							alt="product img"
						></img>
					</div>
				))}
			</div>
		</div>
	);
}
