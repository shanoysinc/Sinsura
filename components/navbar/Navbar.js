import styles from "../../styles/navbar/NavBar.module.scss";
import Logo from "../../public/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarItems}>
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>

				<div className={styles.navbarList}>
					<Link href="/">
						<a className={styles.navLinks}>products</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinks}>resources</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinks}>pricing</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinks}>blog</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinks}>docs</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinks}>contact sales</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinks}>login</a>
					</Link>
					<Link href="/">
						<a className={styles.navLinkButton}>try hasura</a>
					</Link>
				</div>
				<div className={styles.hamburgerIcon}>
					<Image
						height={35}
						width={35}
						src="/svg/hamburgerIcon.svg"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
