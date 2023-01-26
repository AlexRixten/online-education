import { useEffect } from "react";
import { loading } from "../../store/reducers/loadedReducer";
import { fetchBlogs } from "../../store/reducers/blogsReducer";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import { blogsSelector } from "../../store/selectors/blogsSelector";

export const Blogs = () => {
	const dispatch = useAppDispatch();

	const blogs = useSelector(blogsSelector);

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
		<>
			{JSON.stringify(blogs)}
		</>
	);
};