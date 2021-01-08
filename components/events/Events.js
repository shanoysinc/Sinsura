import styles from "../../styles/events/events.module.scss";
import Image from "next/image";
import Link from "next/link";

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
					<Link href="/">
						<a>
							<Image
								src="/svg/workshop.svg"
								height="600"
								layout="intrinsic"
								width="400"
								style={styles.upcomingImgSVG}
							/>
						</a>
					</Link>
					<div className={styles.upcomingEvents}>
						<p className={styles.gridParagraph}>
							Asia's biggest GraphQL Conference is coming back in
							Feb 2021 and is now accepting proposals for talks &
							workshops!
						</p>
					</div>
				</div>
				<div className={styles.firstCol}>
					<div className={styles.upcomingEvents}>
						<Link href="/">
							<a>
								<Image
									src="/svg/community-call.svg"
									height="600"
									width="400"
									layout="intrinsic"
									style={styles.upcomingImgSVG}
								/>
							</a>
						</Link>

						<p className={styles.gridParagraph}>
							Asia's biggest GraphQL Conference is coming back in
							Feb 2021 and is now accepting proposals for talks &
							workshops!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
