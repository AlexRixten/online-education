import {useRef} from "react";

interface IProps {
	fn: (value: string) => void;
	wait: number;
}

export const useDebounce = ({ fn, wait }: IProps) => {
	const timerRef = useRef();
	return function (...arg: any) {
		if (timerRef.current) {
			window.clearTimeout(timerRef.current);
		}
		// @ts-ignore
		timerRef.current = window.setTimeout(() => {
			// @ts-ignore
			fn(...arg);
		}, wait);
	};
}