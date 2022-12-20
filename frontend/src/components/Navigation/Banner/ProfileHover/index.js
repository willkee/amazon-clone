import styles from "./ProfileHover.module.css";

const ProfileHover = ({ inHover }) => {
	return (
		<div className={inHover ? styles.container : styles.container_hidden}>
			PROFILE HOVER
		</div>
	);
};

export default ProfileHover;
