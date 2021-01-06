import styles from "../styles/Home.module.scss";
import NavBar from "../components/navbar/Navbar";
import MainJumbotron from "../components/jumbotron/MainJumbotron";
import CompanyStories from "../components/companyStories/CompanyStories";
import Options from "../components/options/Options";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className={styles.container}>
				<MainJumbotron />
				<CompanyStories />
				<Options />
			</div>
		</>
	);
}
