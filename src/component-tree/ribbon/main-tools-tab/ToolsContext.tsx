import Tools from './groups/tools/Tools';
import { AvailableTools, ToolSize } from '../../../types';
import React, { useState } from 'react';

export const ToolsContext = React.createContext<{
	selectedTool: {
		value: AvailableTools,
		set: React.Dispatch<React.SetStateAction<AvailableTools>>
	};
	toolSize: {
		value: ToolSize,
		set: React.Dispatch<React.SetStateAction<ToolSize>>
	};
}>({} as any);

export const ToolsContextProvider = ({children}: {
	children: JSX.Element
}) => {
	const [selectedTool, setSelectedTool] = useState(AvailableTools.Eraser);
	const [toolSize, setToolSize] = useState(ToolSize.two);

	return <ToolsContext.Provider value={{
		selectedTool: {
			value: selectedTool,
			set: setSelectedTool
		},
		toolSize: {
			value: toolSize,
			set: setToolSize
		}
	}}>
		{children}
	</ToolsContext.Provider>;
};
