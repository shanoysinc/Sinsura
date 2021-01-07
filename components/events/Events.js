import styles from "../../styles/events/events.module.scss";

const Events = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.firstCol}>
					<p className={styles.subTitle}>
						Our events and conferences
					</p>
					<h3 className={styles.title}>
						Join our events and learn how our users are leveraging
						GraphQL{" "}
					</h3>
				</div>
				<div className={styles.firstCol}>
					<div className={styles.btnContainer}>
						<a href="/">
							<button className={styles.btn}>
								See all Events
							</button>
						</a>
					</div>
				</div>
				<div className={styles.firstCol}>
					<p className={styles.eventTitle}>Upcoming Events </p>
				</div>
				<div className={styles.firstCol}></div>
			</div>
		</div>
	);
};

export default Events;
