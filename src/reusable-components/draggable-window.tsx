export const WindowComponent = ({ content }) => {
	return <div></div>;
};

/**
 * window:
  always:
    - has a ma movable header
    - there's an "x" button in header on the right side
    - is movable after performing a mousedown on its header
  depending on window type:
    - if it's a popup: is has only the string as a title and "x" button in header
    - if it's not a popup: on the left side of the header there can by dynamic JSX, on the right side of the header there are also minimize and maximze buttons
 */

interface WindowComponentProps {
	movable: true;
	closable: true;
	movableOnHeaderPress: true;

	title: React.ReactNode;
	isPopup: boolean; // if false - add minimize and close buttons, if false -> resizable
}
