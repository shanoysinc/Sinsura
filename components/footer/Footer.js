import NewsLetter from "../newsLetter/NewsLetter";
import styles from "../../styles/footer/footer.module.scss";
const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<NewsLetter />
			</div>
		</div>
	);
};

export default Footer;
