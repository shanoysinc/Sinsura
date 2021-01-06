import styles from "../../styles/mainJumbotron/mainJumbotron.module.scss";
import RightArrow from "../../public/svg/Right-Arrow.svg";
const MainJumbotron = () => {
	return (
		<div className={styles.container}>
			<p className={styles.subTitle}>
				Build modern apps and APIs with Hasura
			</p>
			<h1 className={styles.title}>
				Instant GraphQL with built-in authorization for your data
			</h1>
			<p className={styles.paragraph}>
				Get started for free in 30 seconds on Hasura Cloud
			</p>

			<div className={styles.btnContainer}>
				<a href="/">
					<button className={styles.btn}>Start for free </button>
				</a>
			</div>

			<a href="/" className={styles.link}>
				<span>Run it yourself with Docker</span>
				<RightArrow height={13} width={14} fill="currentColor" />
			</a>
		</div>
	);
};

export default MainJumbotron;
