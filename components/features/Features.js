import styles from "../../styles/features/features.module.scss";
import FeatureItems from "../features/FeatureItems";
import BlogCard from "../blog/BlogCard";
const Features = () => {
	return (
		<div className={styles.container}>
			<h2>Hasura makes GraphQL easy</h2>
			<div className={styles.itemContainer}>
				<FeatureItems
					icon={"/svg/feature_icon_1.svg"}
					title={"Instant Realtime GraphQL APIs"}
					content={
						"Point Hasura at your databases and instantly get a rich,realtime API instantly, without disrupting your existing apps."
					}
				/>
				<FeatureItems
					icon={"/svg/feature_icon_2.svg"}
					title={"Built-in Granular Authorization"}
					content={
						"Hasura comes with a highly granular rule & role based authorization engine for your GraphQL APIs."
					}
				/>
				<FeatureItems
					icon={"/svg/feature_icon_3.svg"}
					title={"Easily Integrate Business Logic"}
					content={
						"Extend your API by adding business logic in any language or framework & trigger workflows based on them."
					}
				/>
			</div>

			<div className={styles.blogContainer}>
				<BlogCard
					image={"/svg/card_icon_1.svg"}
					content={"new to GraphQl? Join our weekly demos"}
				/>
				<BlogCard
					image={"/svg/card_icon_2.svg"}
					content={
						"Hasura is the fastest GraphQL engine on the planet."
					}
				/>
			</div>
		</div>
	);
};

export default Features;
