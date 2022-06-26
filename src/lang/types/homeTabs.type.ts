export interface HomeTabs {
	clipboard: {
		title: string;
		paste: {
			title: string;
		};
		cut: {
			title: string;
		};
		copy: {
			title: string;
		};
	};
	image: {
		select: {
			title: string;
		};
		crop: {
			title: string;
		};
		resize: {
			title: string;
		};
		rotate: {
			title: string;
		};
		title: string;
	};
	tools: {
		title: string;
	};
	brushes: {
		title: string;
	};
	shapes: {
		title: string;
		outline: {
			title: string;
		};
		fill: {
			title: string;
		};
	};
	size: {
		title: string;
	};
	colors: {
		title: string;
		color: string;
		editColors: {
			title: string;
		};
	};
	paint3d: {
		title: string;
	};
	title: string;
}
