import React from "react";
import styles from "../../styles/blog/blogCard.module.scss";
const BlogCard = ({ image, content }) => {
	return (
		<a href="/" className={styles.container}>
			<img src={image} alt="news Icon" />
			<p>
				{content} <span> →</span>
			</p>
		</a>
	);
};

export default BlogCard;
