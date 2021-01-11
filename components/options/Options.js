import styles from "../../styles/options/options.module.scss";
import Image from "next/image";
const Options = () => {
	return (
		<div className={styles.container}>
			<h2>Instant GraphQL APIs for your data</h2>
			<div className={styles.innerContainer}>
				<div className={styles.pLangContainer}>
					<Image
						height={70}
						width={80}
						src="/svg/plang_1.svg"
						alt="postgresql icon"
						className={styles.pLangImg}
					/>
				</div>
				<div className={styles.pLangContainer}>
					<Image
						height={80}
						width={80}
						src="/svg/plang_2.svg"
						alt="msql icon"
						className={styles.pLangImg}
					/>
				</div>
				<div className={styles.pLangContainer}>
					<Image
						height={80}
						width={80}
						src="/svg/plang_3.svg"
						alt="sql server icon"
						className={styles.pLangImg}
					/>
				</div>
			</div>

			<div className={styles.optionInfoContainer}>
				<div className={styles.infoContainer}>
					<p>
						Point Hasura to your preferred internal and external
						data sources.
					</p>
				</div>
				<div className={styles.infoContainer}>
					<p>
						Setup relationships and security rules on your data
						models across sources.
					</p>
				</div>
				<div className={styles.infoContainer}>
					<p>
						Get a managed unified GraphQL API to build modern
						applications
					</p>
				</div>
			</div>
		</div>
	);
};

export default Options;
