import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import img from "../../assets/Images/about/image.jpg";

import styles from "./About.module.scss";
import { Icon } from "../Icon";
import { Button } from "../Button/Button";

export const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.wrapper}>
				<div>
					<img src={img} alt="" />
				</div>
				<div>
					<Title text="Who we are" />
					<Subtitle text="Why Createx?" />
					<ul className={styles.list}>
						<li className={styles.listItem}>
							<Icon size={16} color="#FF3F3A" name="check" />
							<p>A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
						</li>
						<li className={styles.listItem}>
							<Icon size={16} color="#FF3F3A" name="check" />
							<p>Vulputate placerat amet pulvinar lorem nisl.</p>
						</li>
						<li className={styles.listItem}>
							<Icon size={16} color="#FF3F3A" name="check" />
							<p>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
						</li>
						<li className={styles.listItem}>
							<Icon size={16} color="#FF3F3A" name="check" />
							<p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
						</li>
						<li className={styles.listItem}>
							<Icon size={16} color="#FF3F3A" name="check" />
							<p>Tincidunt sagittis neque sem ac eget.</p>
						</li>
						<li className={styles.listItem}>
							<Icon size={16} color="#FF3F3A" name="check" />
							<p>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
						</li>
					</ul>
					<Button path="\" text="More about us" color={true} style={{marginTop: 22, width: 260}} />
				</div>
			</div>
		</section>
	);
};