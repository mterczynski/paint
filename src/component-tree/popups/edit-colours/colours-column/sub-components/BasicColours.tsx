import { useState } from "react";
import { Subheading } from "../styles/Subheading";
import styled from "styled-components";
import { ColorTile } from "../styles/ColorTile";
import { isColorActive } from "../utils/isColorActive";

const basicColors = [
	[
		"rgb(255,128,128)",
		"rgb(255,255,128)",
		"rgb(128,255,128)",
		"rgb(0,255,128)",
		"rgb(128,255,255)",
		"rgb(0,128,255)",
		"rgb(255,128,192)",
		"rgb(255,128,255)",
	],

	// second row:
	[
		"rgb(255,0,0)",
		"rgb(255,255,0)",
		"rgb(128,255,0)",
		"rgb(0,255,64)",
		"rgb(0,255,255)",
		"rgb(0,128,192)",
		"rgb(128,128,192)",
		"rgb(255,0,255)",
	],

	// third row:
	[
		"rgb(128,64,64)",
		"rgb(255,128,64)",
		"rgb(0,255,0)",
		"rgb(0,128,128)",
		"rgb(0,64,128)",
		"rgb(128,128,255)",
		"rgb(128,0,64)",
		"rgb(255,0,128)",
	],

	// fourth row:
	[
		"rgb(128,0,0)",
		"rgb(255,128,0)",
		"rgb(0,128,0)",
		"rgb(0,128,64)",
		"rgb(0,0,255)",
		"rgb(0,0,160)",
		"rgb(128,0,128)",
		"rgb(128,0,255)",
	],

	// fifth row:
	[
		"rgb(64,0,0)",
		"rgb(128,64,0)",
		"rgb(0,64,0)",
		"rgb(0,64,64)",
		"rgb(0,0,128)",
		"rgb(0,0,64)",
		"rgb(64,0,64)",
		"rgb(64,0,128)",
	],

	// sixth row:
	[
		"rgb(0,0,0)",
		"rgb(128,128,0)",
		"rgb(128,128,64)",
		"rgb(128,128,128)",
		"rgb(64,128,128)",
		"rgb(192,192,192)",
		"rgb(64,0,64)",
		"rgb(255,255,255)",
	],
];

const Row = styled.div`
	display: flex;
	margin-bottom: 1px;
`;

export const BasicColours = () => {
	const [selectedColor, setSelectedColor] = useState({
		rowIndex: 5,
		columnIndex: 0,
	});

	return (
		<div style={{ width: "100%" }}>
			<Subheading>Basic colours:</Subheading>

			{basicColors.map((row, rowIndex) => (
				<Row key={rowIndex}>
					{row.map((color, columnIndex) => (
						<ColorTile
							color={color}
							key={columnIndex}
							active={isColorActive(selectedColor, { rowIndex, columnIndex })}
							onClick={() => setSelectedColor({ rowIndex, columnIndex })}
						/>
					))}
				</Row>
			))}
		</div>
	);
};
