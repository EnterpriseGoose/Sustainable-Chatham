import styles from './button.module.css';

export default function Navbar({
	text,
	link,
	newTab = false,
}: {
	text: string;
	link: string;
	newTab?: boolean;
}) {
	let newTabCodeTarget = '';
	let newTabCodeRel = '';

	if (newTab) {
		newTabCodeTarget = '_blank';
		newTabCodeRel = 'noreferrer noopener';
	}
	return (
		<a
			href={link}
			className="link"
			target={newTabCodeTarget}
			rel={newTabCodeRel}>
			<div className={styles.button}>
				<div className={styles.text}>{text}</div>
			</div>
		</a>
	);
}
