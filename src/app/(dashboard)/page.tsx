import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<h1 className={styles.greetings}>Hello!</h1>
				<h1 className={styles.intro}>
					I am John Rey Rabosa (
					<a
						className={styles.link}
						href="https://github.com/r4ppz"
						target="_blank"
						rel="noopener noreferrer"
					>
						r4ppz
					</a>
					)
				</h1>
				<p className={styles.text}>
					Currently learning system programming.
				</p>
			</div>
		</main>
	);
}
