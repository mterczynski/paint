import { useSelector } from "react-redux";
import { store } from "../../../../../redux/store";

import { AppState, AvailableTools } from "../../../../../types";
import "./Tools.scss";
import { useLang } from "../../../../../hooks";
import { selectTool } from "../../../../../redux/root-slice";

import pencilImage from "/assets/icons/main-tools-tab/3_tools/1.png";
import fillImage from "/assets/icons/main-tools-tab/3_tools/2.png";
import textImage from "/assets/icons/main-tools-tab/3_tools/3.png";
import eraserImage from "/assets/icons/main-tools-tab/3_tools/4.png";
import colorPickerImage from "/assets/icons/main-tools-tab/3_tools/5.png";
import magnifierImage from "/assets/icons/main-tools-tab/3_tools/6.png";

type IconType = 1 | 2 | 3;

function dispatchSelectTool(tool: AvailableTools) {
	store.dispatch(selectTool(tool));
}

function mapToolToImage(tool: AvailableTools) {
	return (
		{
			[AvailableTools.Pencil]: pencilImage,
			[AvailableTools.Fill]: fillImage,
			[AvailableTools.Text]: textImage,
			[AvailableTools.Eraser]: eraserImage,
			[AvailableTools.ColorPicker]: colorPickerImage,
			[AvailableTools.Magnifier]: magnifierImage,
		}[tool] || ""
	);
}

const Tool = ({
	tool,
	iconType,
}: {
	tool: AvailableTools;
	iconType: IconType;
}) => {
	const selectedTool = useSelector((state: AppState) => state.selectedTool);

	const getToolClassName = () => {
		return (
			`Tools__icon-${iconType} ` +
			(selectedTool === tool ? "Tools__icon--active" : "")
		);
	};

	return (
		<div
			onClick={() => dispatchSelectTool(tool)}
			className={getToolClassName()}
		>
			<img
				className="Tools__iconImage"
				draggable="false"
				src={mapToolToImage(tool)}
				alt=""
			/>
		</div>
	);
};

const ToolsIconRow = ({ tools }: { tools: AvailableTools[] }) => {
	return (
		<div className="Tools__iconRow">
			<Tool tool={tools[0]} iconType={1}></Tool>
			<Tool tool={tools[1]} iconType={2}></Tool>
			<Tool tool={tools[2]} iconType={3}></Tool>
		</div>
	);
};

const Tools = () => {
	const lang = useLang();

	return (
		<div className="Tools">
			<ToolsIconRow
				tools={[
					AvailableTools.Pencil,
					AvailableTools.Fill,
					AvailableTools.Text,
				]}
			></ToolsIconRow>
			<ToolsIconRow
				tools={[
					AvailableTools.Eraser,
					AvailableTools.ColorPicker,
					AvailableTools.Magnifier,
				]}
			></ToolsIconRow>

			<div className="Tools__description">{lang.homeTabs.tools.title}</div>
		</div>
	);
};

export default Tools;
