import styles from "../styles/Home.module.scss";
import NavBar from "../components/navbar/Navbar";
import MainJumbotron from "../components/jumbotron/MainJumbotron";
export default function Home() {
	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<MainJumbotron />
			</div>
		</>
	);
}
