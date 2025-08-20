import './Button.scss';
export const Button = ({ text, url, variant }) => {
	return (
		<button className={variant ? 'Button-secondary' : 'Button-primary'}>
			<a
				href={url}
				className={variant ? 'Button-secondary__a' : 'Button-primary__a'}
			>
				{text}
			</a>
		</button>
	);
};
