import Head from 'next/head';

import Navbar from '../../components/navbar';
import Button from '../../components/button';

import styles from '../../styles/checklists.module.css';

export default function LearnMore(props: { [key: string]: any }) {
	return (
		<div className={styles.main}>
			<Head>
				<title>Checklists - Sustainable Chatham</title>
			</Head>
			<Navbar />
			<div className={styles.title}>Checklists</div>
			<div className={styles.title2}>Landscaper</div>
			<div className={styles.desc}>
				Communicate with your landscaper about the sustainable practices
				you want them to use
			</div>
			<div className={styles.buttonArray}>
				<Button
					text="English"
					link="/files/checklists/english/english-landscaper-landscaping-checklist.pdf"
					newTab
				/>
				<Button
					text="Spanish"
					link="/files/checklists/spanish/spanish-landscaper-landscaping-checklist.pdf"
					newTab
				/>
				<Button
					text="Portuguese"
					link="/files/checklists/portuguese/portuguese-landscaper-landscaping-checklist.pdf"
					newTab
				/>
			</div>
			<div className={styles.title2}>Homeowner</div>
			<div className={styles.desc}>
				DIY suggestions from the most basic to the best practices for
				experienced gardeners
			</div>
			<div className={styles.buttonArray}>
				<Button
					text="English"
					link="/files/checklists/english/english-homeowner-landscaping-checklist.pdf"
					newTab
				/>
				<Button
					text="Spanish"
					link="/files/checklists/spanish/spanish-homeowner-landscaping-checklist.pdf"
					newTab
				/>
			</div>
		</div>
	);
}
