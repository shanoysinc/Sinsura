import styles from "../../styles/newsLetter/newsLetter.module.scss";

const NewsLetter = () => {
	return (
		<div className={styles.newsLetterContainer}>
			<h3>Stay in the know</h3>
			<p>
				Sign up for full access to our product and community highlights,
				new features, and occasional baby animal gifs! Oh, and we have a
				strict no-spam rule. ✌️
			</p>
			<div className={styles.inputContainer}>
				<label htmlFor="email"> </label>
				<input
					type="text"
					placeholder="Your Email Address"
					id="email"
				/>
				<div className={styles.btnContainer}>
					<a href="/">
						<button className={styles.btn}>Subscribe</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
