import styles from "./Benefits.module.scss";
import img from "../../assets/Images/benefits/illustration.png";
import { Title } from "../Title/Title";
import { Subtitle } from "../Subtitle/Subtitle";
import { Icon } from "../Icon";

export const Benefits = () => {
	return (
		<section className={styles.benefits}>
			<div className="container">
				<Title text="Our benefits" center={true} />
				<Subtitle text="That’s how we do it" center={true} />
				<ul className={styles.group}>
					<li className={styles.groupItem}>
						<Icon size={14} name="star" color="gray" />
						<p className={styles.title}>Experienced Tutors</p>
					</li>
					<li className={styles.groupItem}>
						<Icon size={14} name="like" color="gray" />
						<p className={styles.title}>Feedback & Support</p>
					</li>
					<li className={styles.groupItem}>
						<Icon size={14} name="data" color="gray" />
						<p className={styles.title}>24/7 Online Library</p>
					</li>
					<li className={styles.groupItem}>
						<Icon size={14} name="chat" color="gray" />
						<p className={styles.title}>Community</p>
					</li>
				</ul>
				<div className={styles.wrapper}>
					<div className={styles.description}>
						<h2 className="title">Only practicing tutors</h2>
						<p className="description">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum
							suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi
							amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet
							enim, nisi tempus vehicula.</p>
					</div>
					<div>
						<img src={img} alt="" />
					</div>
					<div>
					</div>
				</div>
			</div>
		</section>
	);
};