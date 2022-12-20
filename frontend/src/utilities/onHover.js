import { useState } from "react";

const BaseTemplate = ({ handleMouseOver, handleMouseOut }) => {
	return (
		<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			TEMPLATE
		</div>
	);
};

const OnHover = ({ ComponentToDisplay }) => {
	const [inHover, setInHover] = useState(false);

	const handleMouseOver = () => setInHover(true);
	const handleMouseOut = () => setInHover(false);

	return (
		<div>
			<BaseTemplate
				handleMouseOver={handleMouseOver}
				handleMouseOut={handleMouseOut}
			/>
			{inHover ? <ComponentToDisplay /> : ""}
		</div>
	);
};

export default OnHover;
