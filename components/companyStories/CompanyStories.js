import styles from "../../styles/companyStories/companyStories.module.scss";
import Image from "next/image";
const CompanyStories = () => {
	return (
		<div className={styles.container}>
			<div className={styles.storiesContainer}>
				<Image
					width={140}
					height={120}
					src="/svg/user_stories_1.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
				<Image
					width={140}
					height={100}
					src="/svg/user_stories_2.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
				<Image
					width={80}
					height={40}
					src="/svg/user_stories_3.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
				<Image
					width={140}
					height={100}
					src="/svg/user_stories_4.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
				<Image
					width={140}
					height={100}
					src="/svg/user_stories_5.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
				<Image
					width={140}
					height={100}
					src="/svg/user_stories_6.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
				<Image
					width={140}
					height={100}
					src="/svg/user_stories_7.svg"
					alt="user stories"
					className={styles.companyIcon}
					loading="lazy"
				/>
			</div>

			<div className={styles.linkWrapper}>
				<a href="/" className={styles.link}>
					Read our user stories
					<span> →</span>
				</a>
			</div>
		</div>
	);
};

export default CompanyStories;
