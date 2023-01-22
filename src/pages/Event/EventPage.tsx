import { useParams } from "react-router-dom";

export const EventPage = () => {
	const { eventId } = useParams();
	return (
		<h1>EventPage {eventId}</h1>
	);
};