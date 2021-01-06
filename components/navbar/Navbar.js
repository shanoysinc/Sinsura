import styles from "../../styles/navbar/NavBar.module.scss";
import Logo from "../../public/svg/logo.svg";
import HamburgerIcon from "../../public/svg/hamburgerIcon.svg";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<HamburgerIcon height={35} width={35} />
		</nav>
	);
};

export default Navbar;
