import NewsLetter from "../newsLetter/NewsLetter";
import styles from "../../styles/footer/footer.module.scss";
import FooterItems from "./FooterItems";
import CopyWriteInfo from "./CopyWriteInfo";

const hasura = {
	title: "hasura",
	items: ["about us", "Press", "careers", "contact us", "legal stuff"],
};
const support = {
	title: "support",
	items: ["documentation", "community forum", "website chat", "github"],
};
const tools = {
	title: "tools",
	items: [
		"graphlqurl",
		"firebase2GraphQl",
		"JSON2GraphlQl",
		"GraphlQL2ChartJS",
	],
};

const product = {
	title: "product",
	items: [
		"Hasura Open Source",
		"hasura cloud",
		"hasura enterprise",
		"pricing",
		"changelog",
	],
};

const resources = {
	title: "resources",
	items: [
		"blog",
		"user stories",
		"3Factor Apps",
		"React GraphQl",
		"Vue GraphQl",
		"DIY GraphQl Baas",
		"GraphQl & Husura",
	],
};

const community = {
	title: "community",
	items: [
		"community resources",
		"GraphQl tutorials",
		"Community Wiki",
		"Sample Apps",
		"Partnership Program",
		"GraphQl asia",
	],
};

const Footer = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<NewsLetter />
				<div className={styles.footerItemsContainer}>
					<FooterItems content={hasura} />
					<FooterItems content={support} />
					<FooterItems content={tools} />
					<FooterItems content={product} />
					<FooterItems content={resources} />
					<FooterItems content={community} />
				</div>
				<CopyWriteInfo />
			</div>
		</div>
	);
};

export default Footer;
