import { GitHubIcon } from '@/assets/icons/github-icon';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<h1 className={styles.title}>John Rey Rabosa</h1>
				<p className={styles.tagline}>
					BSIT Student / Linux Enthusiast
				</p>
				<div className={styles.links}>
					<a
						href="https://github.com/r4ppz"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						<GitHubIcon />
						github.com/r4ppz
					</a>
				</div>
			</div>
		</main>
	);
}
