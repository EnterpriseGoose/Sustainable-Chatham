import styles from './navbar.module.css';

export default function Navbar() {
	return (
		<div className={styles.main}>
			<nav className={styles.nav}>
				<img
					className={styles.logo}
					src="../logo/logo-light.svg"
					alt="Sustainable Chatham Logo"
				/>
				<div className={styles.links}>
					<a href="/">Home</a>
					<a href="/learn-more">Learn More</a>
					<div>
						<a href="/checklists">Landscaping Checklists</a>
						{/*
						<img
							className={styles.dropdown}
							src="../icons/dropdown.svg"
							alt="Dropdown"
						/>
						*/}
					</div>
				</div>
			</nav>
		</div>
	);
}
