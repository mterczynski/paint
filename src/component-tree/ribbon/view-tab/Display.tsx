import { useLang } from '../../../hooks';
import { Figure } from './Figure';

const Display = () => {
	const lang = useLang().viewTab.display;

	return <div className='ViewTab__group'>
		<div className='ViewTab__content'>
			<Figure imgPath={require('../../../assets/icons/view-tab/fullScreen.png')}>
				{lang.fullScreen.title}
			</Figure>

			<Figure imgPath={require('../../../assets/icons/view-tab/miniature.png')}>
				{lang.thumbnail.title}
			</Figure>
		</div>
		<h1 className='ViewTab__description'>{lang.title}</h1>
	</div>;
};

export default Display;
