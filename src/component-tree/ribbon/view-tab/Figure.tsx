import * as React from "react";

export const Figure = ({
	imgPath,
	children,
}: {
	imgPath: string;
	children: React.ReactNode;
}) => {
	return (
		<figure className="ViewTab__figure">
			<img draggable="false" alt="" className="ViewTab__icon" src={imgPath} />
			<figcaption className="ViewTab__figcaption">{children}</figcaption>
		</figure>
	);
};
