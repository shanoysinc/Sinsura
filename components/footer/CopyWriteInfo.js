import styles from "../../styles/footer/copyWriteInfo.module.scss";
import Image from "next/image";
import Link from "next/link";

const CopyWriteInfo = () => {
	return (
		<div className={styles.container}>
			<p>© 2021 Hasura Inc. All rights reserved</p>
			<div className={styles.socialIconsContainer}>
				<Link href="/">
					<a>
						<Image src="/svg/github.svg" height={15} width={15} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image src="/svg/twitter.svg" height={15} width={15} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image src="/svg/discord.svg" height={15} width={15} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image src="/svg/facebook.svg" height={15} width={15} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image
							src="/svg/instagram.svg"
							height={15}
							width={15}
						/>
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image src="/svg/utube.svg" height={15} width={15} />
					</a>
				</Link>
				<Link href="/">
					<a>
						<Image src="/svg/linkedin.svg" height={15} width={15} />
					</a>
				</Link>
			</div>
		</div>
	);
};

export default CopyWriteInfo;
