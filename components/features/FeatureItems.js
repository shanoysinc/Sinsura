import styles from "../../styles/features/FeatureItems.module.scss";
import Image from "next/image";
const FeatureItems = ({ icon, title, content }) => {
	return (
		<div className={styles.container}>
			<Image src={icon} alt="feature icon" height={35} width={35} />
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	);
};

export default FeatureItems;
