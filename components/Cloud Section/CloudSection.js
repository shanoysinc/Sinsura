import React from "react";
import styles from "../../styles/cloudSection/cloudSection.module.scss";

const CloudSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<p className={styles.subTitle}>Get Started in 30 seconds</p>
				<h3 className={styles.title}>
					Hasura Cloud: GraphQL in production made easy
				</h3>
				<p className={styles.paragraph}>
					Hasura Cloud is a fully managed, globally available,
					production ready GraphQL API as a service that integrates
					with your existing data sources.
				</p>

				<div className={styles.btnContainer}>
					<a href="/">
						<button className={styles.btn}>
							Get started for free
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default CloudSection;
