import styles from "../../styles/footer/footerItems.module.scss";
import Link from "next/link";
const FooterItems = ({ content }) => {
	return (
		<div className={styles.container}>
			<h3>{content.title}</h3>
			{content.items.map((item, index) => (
				<Link href="/" key={index}>
					<a className={styles.item}>{item}</a>
				</Link>
			))}
		</div>
	);
};

export default FooterItems;
