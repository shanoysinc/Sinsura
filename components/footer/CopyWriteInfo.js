import styles from "../../styles/footer/copyWriteInfo.module.scss";
import Image from "next/image";
import Link from "next/link";

const CopyWriteInfo = () => {
	return (
		<div className={styles.container}>
			<p>© 2021 Hasura Clone Inc. All rights reserved</p>
			<div className={styles.socialIconsContainer}>
				<Link href="/">
					<a>
						<Image
							src="/svg/github.svg"
							height={15}
							width={15}
							alt="github icon"
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/twitter.svg"
							height={15}
							width={15}
							alt="twitter icon"
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/discord.svg"
							height={15}
							width={15}
							alt="discord icon"
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/facebook.svg"
							height={15}
							width={15}
							alt="facebook icon"
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/instagram.svg"
							height={15}
							width={15}
							alt="instagram icon"
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/utube.svg"
							height={15}
							width={15}
							alt="utube icon"
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/linkedin.svg"
							height={15}
							width={15}
							alt="linkedin icon"
						/>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default CopyWriteInfo;
