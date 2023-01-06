import Dropdown from "../../../../../reusable-components/dropdown";
import { store } from "../../../../../redux/store";
import { Dropdowns, ToolSize } from "../../../../../types";
import "./Size.scss";
import { useLang } from "../../../../../hooks";
import { setDropdown, setToolSize } from "../../../../../redux/root-slice";

function dispatchOpenDropdown() {
	store.dispatch(setDropdown(Dropdowns.size));
}

function dispatchSetToolSize(toolSize: ToolSize) {
	store.dispatch(setToolSize(toolSize));
}

const Size = () => {
	const lang = useLang();

	return (
		<div className="Size">
			<div className="Size__content" onClick={dispatchOpenDropdown}>
				<img
					draggable="false"
					className="Size__mainIcon"
					// src={require("../../../../../assets/icons/main-tools-tab/6_size.png")}
					alt=""
				/>

				<div>{lang.homeTabs.size.title}</div>

				<img
					draggable="false"
					className="Size__arrowDown"
					// src={require("../../../../../assets/icons/arrow_down.png")}
					alt=""
				/>
			</div>

			<Dropdown provider={Dropdowns.size}>
				<ul className="Size__list">
					<li
						className="Size__li"
						onClick={() => dispatchSetToolSize(ToolSize.one)}
					>
						Size 1px
					</li>
					<li
						className="Size__li"
						onClick={() => dispatchSetToolSize(ToolSize.two)}
					>
						Size 2px
					</li>
					<li
						className="Size__li"
						onClick={() => dispatchSetToolSize(ToolSize.three)}
					>
						Size 3px
					</li>
					<li
						className="Size__li"
						onClick={() => dispatchSetToolSize(ToolSize.four)}
					>
						Size 4px
					</li>
				</ul>
			</Dropdown>
		</div>
	);
};

export default Size;
