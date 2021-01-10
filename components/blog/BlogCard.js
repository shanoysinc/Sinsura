import React from "react";
import styles from "../../styles/blog/blogCard.module.scss";
const BlogCard = ({ image, content }) => {
	return (
		<a href="/" className={styles.container}>
			<div className={styles.imgContainer}>
				<img src={image} alt="news Icon" />
			</div>
			<div className={styles.paragraphContainer}>
				<p>
					{content} <span> →</span>
				</p>
			</div>
		</a>
	);
};

export default BlogCard;
