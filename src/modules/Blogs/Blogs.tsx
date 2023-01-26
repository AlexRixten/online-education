import { useEffect } from "react";
import { loading } from "../../store/reducers/loadedReducer";
import { fetchBlogs } from "../../store/reducers/blogsReducer";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { blogsSelector } from "../../store/selectors/blogsSelector";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import { Title } from "../../components/Title/Title";
import { Subtitle } from "../../components/Subtitle/Subtitle";
import { Button } from "../../components/Button/Button";
import { ERoutes } from "../../enums/routes.enum";
import styles from "./Blogs.module.scss";

export const Blogs = () => {
	const dispatch = useAppDispatch();

	const { blogs } = useSelector(blogsSelector);

	useEffect(() => {
		const getBlogs = async () => {
			try {
				dispatch(loading(true));
				dispatch(fetchBlogs({ limit: 6 }));
			} catch (error) {
				console.log(error);
			} finally {
				dispatch(loading(false));
			}
		};
		getBlogs();
	}, []);

	return (

		<section className={styles.courses}>
			<div className="container">

				<div className={styles.header}>
					<div>
						<Title text="Our blog" />
						<Subtitle text="Latest posts" />
					</div>
					<Button path={ERoutes.Blogs} text="Go to blog" color={true} style={{ width: 260 }} />
				</div>

				<div className={styles.wrapper}>
					{blogs?.map((item) => (
						<BlogCard key={item.id} {...item}  />
					))}
				</div>
			</div>
		</section>
	);
};