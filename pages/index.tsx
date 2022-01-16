import Navbar from '../components/navbar';

import styles from '../styles/index.module.css';

export default function Index(props: { [key: string]: any }) {
	return (
		<div className={styles.main}>
			<Navbar />
			<div className={styles.titleBar}>
				<p>
					Welcome to a
					<span className={styles.greenText}> Greener&nbsp;</span>
					Chatham
				</p>
			</div>
			<div className={styles.body}>
				<span className={styles.title + ' ' + styles.size3}>
					Green Landscaping
				</span>
				<span className={styles.description}>
					Better landscaping techniques can make Chatham a cleaner,
					quieter, more peaceful place. Whether you’re hiring a
					service or doing it yourself, there are steps you can take
					to make your landscaping healthier and more sustainable.
				</span>
				<span
					className={
						styles.title +
						' ' +
						styles.size1 +
						' ' +
						styles.secondTitle
					}>
					1 Hour of lawnmowing =&nbsp;100&nbsp;mile&nbsp;car&nbsp;trip
				</span>
				<span className={styles.description}>
					That’s right.{' '}
					<a
						href="https://www.sciencedaily.com/releases/2001/05/010529234907.htm"
						className={styles.link}>
						A Swedish study
					</a>{' '}
					found that just 1 hour of using a gas lawnmower spews out
					the same amount of pollution as a 100 mile car trip.
				</span>
				<span className={styles.description}>
					Gas leaf blowers are even worse: running a gas leaf blower
					for an hour is as polluting as driving a car from Chatham to
					Disneyworld.
				</span>
				<span className={styles.title + ' ' + styles.size3}>
					Electric equipment is a quieter, cleaner, healthier solution
				</span>
				<span className={styles.description}>
					No more gas spills on your lawn and gas smell in your garage
					and on your clothes. No more waking the whole neighborhood
					with Saturday morning mowing and blowing. Switching to
					electric mowers, trimmers, and blowers dramatically reduces
					the air and noise pollution that harms our health and our
					environment.
				</span>
				<span className={styles.title + ' ' + styles.size2}>
					Use our handy checklists to help make more sustainable
					choices
				</span>
				<span className={styles.description}>
					Developed by lawncare experts, these checklists provide a
					great foundation for sustainable landscaping, from electric
					equipment use to leaf-mulching.{' '}
					<a href="/checklist/landscaper" className={styles.link}>
						This one
					</a>{' '}
					is a checklist for communicating with your landscaping
					professional in English, Spanish, or Portuguese.{' '}
					<a href="/checklist/homeowner" className={styles.link}>
						This one
					</a>{' '}
					has DIY suggestions from the most basic to the best
					practices for experienced gardeners.
				</span>
			</div>
		</div>
	);
}
