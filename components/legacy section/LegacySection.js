import styles from "../../styles/legacySection/legacy.module.scss";
import FeatureItems from "../features/FeatureItems";
import BlogCard from "../../components/blog/BlogCard";
import Image from "next/image";

const LegacySection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.gridContainer}>
					<div className={styles.gridheader}>
						<p className={styles.subTitle}>
							Hasura for enterprises
						</p>
						<h3 className={styles.title}>
							Activate Legacy Data with GraphQL
						</h3>
						<p className={styles.paragraph}>
							Hasura is used in mission critical applications
							across Fortune 500 companies and is helping
							enterprises teams deliver on their strategic
							initiatives.
						</p>

						<div className={styles.btnContainer}>
							<a href="/">
								<button className={styles.btn}>
									talk to sales
								</button>
							</a>
						</div>
					</div>
					<div className={styles.gridImg}>
						<Image
							src="/svg/enterprise.svg"
							height="200"
							width="200"
							alt="enterprise icon"
						/>
					</div>
				</div>
				<div className={styles.featureItemGrid}>
					<FeatureItems
						icon="/svg/feature_icon_9.svg"
						title="modernize Apps and App Development"
						content="Applications built on Hasura are cloud-native from the get go. Hasura gives your applications the architecture to use cloud & serverless technologies effortlessly. Trigger events & workflows based on API calls, changes in the database or based on a particular time."
					/>
					<FeatureItems
						icon="/svg/feature_icon_10.svg"
						title="Accelerate Your Time to Market"
						content="Hasura unlocks data across different data sources instantly saving you weeks, usually spent writing integration code. Connect to your existing databases & services (GraphQL or REST) and get instant APIs to make your data immediately accessible."
					/>
					<FeatureItems
						icon="/svg/feature_icon_11.svg"
						title="Enable Developer Productivity at Scale"
						content="Hasura gives you a scalable web API layer automatically to access your data. 30-80% of your backend APIs are autogenerated by Hasura. Unleash your teams productivity by declaratively configuring your app's backend and writing only the business logic relevant for your applications."
					/>
					<div className={styles.blogCardContainer}>
						<BlogCard
							image="/svg/card_icon_3.svg"
							content="workshop"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegacySection;
