import { useSelector } from 'react-redux';
import { useLang } from '../../../hooks';
import { AppState } from '../../../types';
import { Figure } from './Figure';

const imgs = {
	zoomIn: require('../../../assets/icons/view-tab/zoomIn.png'),
	zoomOut: require('../../../assets/icons/view-tab/zoomOut.png'),
	maximize: require('../../../assets/icons/view-tab/maximize.png'),
};

const Zoom = () => {
	const currentZoom = useSelector((state: AppState) => state.zoom);
	const lang = useLang();

	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<Figure imgPath={imgs.zoomIn}>{lang.viewTab.zoom.zoomIn.title}</Figure>
			<Figure imgPath={imgs.zoomOut}>{lang.viewTab.zoom.zoomOut.title}</Figure>
			<Figure imgPath={imgs.maximize}>
				{currentZoom * 100}
				<br/>
				%
			</Figure>
		</div>
		<h1 className='ViewTab__description'>{lang.viewTab.zoom.title}</h1>
	</div>;
};

export default Zoom;
