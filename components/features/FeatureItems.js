import styles from "../../styles/features/FeatureItems.module.scss";
const FeatureItems = ({ icon, title, content }) => {
	return (
		<div className={styles.container}>
			<img src={icon} alt="" />
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default FeatureItems;
