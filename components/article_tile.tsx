import { ReactElement } from 'react';
import styles from './article_tile.module.css';

export default function Navbar({
	title,
	desc,
	note,
}: {
	title: string;
	desc: string;
	note: string;
}) {
	let noteDiv: ReactElement = <div />;
	if (note) {
		noteDiv = <div className={styles.note}>{note}</div>;
	}
	return (
		<div className={styles.tile}>
			<div className={styles.text}>
				<div className={styles.title}>{title}</div>
				<div className={styles.desc}>{desc}</div>
				{noteDiv}
			</div>
		</div>
	);
}
