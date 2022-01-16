import Head from 'next/head';

import Navbar from '../components/navbar';
import ArticleTile from '../components/article_tile';

import articles from '../const/articles.json';

import styles from '../styles/learn-more.module.css';

export default function LearnMore(props: { [key: string]: any }) {
	console.log(articles);
	return (
		<div className={styles.main}>
			<Head>
				<title>Learn More - Sustainable Chatham</title>
			</Head>
			<Navbar />
			<div className={styles.title}>Learn More</div>
			<div className={styles.desc}>
				Find articles to learn more about the facts behind sustainable
				lawncare.
			</div>
			<div className={styles.tiles}>
				{articles.map(
					(article: {
						title: string;
						desc: string;
						note: string;
						link: string;
					}) => (
						<a href={article.link} className="link">
							<ArticleTile
								title={article.title}
								desc={article.desc}
								note={article.note}
							/>
						</a>
					)
				)}
			</div>
		</div>
	);
}
