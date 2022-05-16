import { useSelector } from 'react-redux';
import * as actionCreators from '../../redux/action-creators';
import store from '../../redux/store';
import { AppState } from '../../types';
import { RibbonIcon, IconImage } from './RibbonStyles';

const toggleRibbon = () => {
	store.dispatch(actionCreators.toggleRibbon());
};

export const RibbonToggler = () => {
	const isRibbonCollapsed = useSelector((state: AppState) => state.isRibbonCollapsed);

	return <RibbonIcon
		onClick={toggleRibbon}
	>
		<IconImage
			draggable='false'
			reversed = {isRibbonCollapsed}
			src={require('../../assets/icons/top/collapse.png')}
			alt=""
		/>
	</RibbonIcon>;
};
