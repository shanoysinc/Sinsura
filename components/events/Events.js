import styles from "../../styles/events/events.module.scss";

const Events = () => {
	return (
		<div className={styles.container}>
			<div className={styles.innerContainer}>
				<div className={styles.gridContainer}>
					<div className={styles.gridHeader}>
						<p className={styles.subTitle}>
							Our events and conferences
						</p>
						<h3 className={styles.title}>
							Join our events and learn how our users are
							leveraging GraphQL{" "}
						</h3>
					</div>
					<div className={styles.btnContainer}>
						<a href="/">
							<button className={styles.btn}>
								See all Events
							</button>
						</a>
					</div>
				</div>
				<p className={styles.eventTitle}>Upcoming Events </p>
				<div className={styles.eventGrid}>
					<div className={styles.eventGridItem}>
						<div>
							<div className={styles.workshop__v}>
								<img
									src="/svg/workshop-v.png"
									alt="workshop icon"
									className={styles.workshop__vSvg}
									loading="lazy"
								/>
							</div>
							<div className={styles.workshop__h}>
								<img
									src="/svg/workshop-h.png"
									alt="workshop icon"
									loading="lazy"
								/>
							</div>
							<p className={styles.gridParagraph}>
								Asia's biggest GraphQL Conference is coming back
								in Feb 2021 and is now accepting proposals for
								talks & workshops!
							</p>
						</div>
					</div>
					<div className={styles.eventGridItem}>
						<div>
							<img
								src="/svg/community-call.svg"
								alt="community call icon"
								className={styles.communityCallSvg}
								loading="lazy"
							/>
							<p className={styles.gridParagraph}>
								Join our monthly call and stay up-to-date on all
								things Hasura.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
