// const API_URL = process.env.NODE_ENV === "production" ? "https://api.kinofan.com" : "http://fake.backend";
const API_URL = process.env.REACT_APP_URL;

export const API = {
	timeout: 60_000,
	url: API_URL
};