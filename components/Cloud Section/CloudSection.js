import React from "react";
import styles from "../../styles/cloudSection/cloudSection.module.scss";
import FeatureItems from "../../components/features/FeatureItems";
import BlogCard from "../blog/BlogCard";
import Image from "next/image";

const CloudSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.gridContainer}>
					<div className={styles.gridheader}>
						<p className={styles.subTitle}>
							Get Started in 30 seconds
						</p>
						<h3 className={styles.title}>
							Hasura Cloud: GraphQL in production made easy
						</h3>
						<p className={styles.paragraph}>
							Hasura Cloud is a fully managed, globally available,
							production ready GraphQL API as a service that
							integrates with your existing data sources.
						</p>

						<div className={styles.btnContainer}>
							<a href="/">
								<button className={styles.btn}>
									Get started for free
								</button>
							</a>
						</div>
						<div className={styles.newItemCard}>
							<p className={styles.newLabel}>new</p>
							<a href="/" className={styles.link}>
								Hasura Cloud Achieves SOC2 and HIPAA Compliance
								<span> →</span>
							</a>
						</div>
					</div>
					<div className={styles.gridImg}>
						<Image
							src="/svg/lightening.svg"
							height="200"
							width="200"
						/>
					</div>
				</div>

				<FeatureItems
					icon="/svg/feature_icon_4.svg"
					title="Fully Managed"
					content="No-ops & auto-scalable: Hasura cloud doesn’t ask you to think about the number of instances, cores, memory, thresholds etc. Hook up your database and other services, and it just works."
				/>
				<FeatureItems
					icon="/svg/feature_icon_5.svg"
					title="Caching"
					content="Hasura Cloud supports query caching as well as data caching by adding an @cached directive to your queries."
				/>
				<FeatureItems
					icon="/svg/feature_icon_6.svg"
					title="Monitoring & Analytics"
					content="Hasura Cloud ships with monitoring and tracing features that help you understand database query performance and give you insight into what to do. Hasura Cloud has support for monitoring errors, web socket connections and subscriptions."
				/>

				<FeatureItems
					icon="/svg/feature_icon_7.svg"
					title="Query Capture"
					content="Hasura cloud captures queries and makes it available for regression testing so you know if any change you make affects the GraphQL queries you’re seeing in production. You can use the set of captured queries to create or update an allow list."
				/>
				<FeatureItems
					icon="/svg/feature_icon_8.svg"
					title="API Limiting"
					content="Setup API rate limits and depth limits to prevent abuse/ DoS attacks on your GraphQL API. You can manage QoS with user identity & session aware configuration."
				/>
				<BlogCard
					image="/svg/graphql.svg"
					content="GraphQl in Production"
				/>
			</div>
		</div>
	);
};

export default CloudSection;
