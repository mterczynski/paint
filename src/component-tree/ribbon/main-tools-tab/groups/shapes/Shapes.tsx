import "./Shapes.scss";
import { useLang } from "../../../../../hooks";

const lastShapeIndex = 23;

const shapeImageUrls = Array(lastShapeIndex)
	.fill(null)
	.map((e, i) => `./assets/icons/main-tools-tab/5_shapes/${i + 1}.png`);

// todo - use translations
// todo - to be used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const shapeDescriptions = Object.freeze([
	// first row:
	"Linia",
	"Krzywa",
	"Owal",
	"Prostokąt",
	"Zaokrąglony prostokąt",
	"Wielokąt",
	"Trójkąt",
	// second row:
	"Trójkąt prostokątny",
	"Romb",
	"Pięciokąt",
	"Sześciokąt",
	"Strzałka w prawo",
	"Strzałka w lewo",
	"Strzałka w górę",
	// thrid row:
	"Strzałka w dół",
	"Gwiazda czwororamienna",
	"Gwiazda pięcioramienna",
	"Gwiazda sześcioramienna",
	"Zaokrąglone prostokątne objaśnienie",
	"Owalne objaśnienie",
	"Objaśnienie w kształcie chmury",
	// fourth row:
	"Serce",
	"Błyskawica",
]);

const Shapes = () => {
	const lang = useLang();

	return (
		<div className="Shapes">
			<div className="Shapes__content">
				<div className="Shapes__shapeList">
					<div className="Shapes__shapeListContent">
						{shapeImageUrls.map((shape, i) => (
							<img
								draggable="false"
								className="Shapes__shape"
								src={shape}
								alt=""
								key={i}
							/>
						))}
					</div>
					<div className="Shapes__shapeListControls" />
				</div>

				<div className="Shapes__options">
					<div className="Shapes__option Shapes__option--first">
						<img
							draggable="false"
							src="./assets/icons/main-tools-tab/5_shapes/contour_active.png"
							alt=""
						/>
						<span> {lang.homeTabs.shapes.outline.title} </span>
						<img draggable="false" src="./assets/icons/arrow_down.png" alt="" />
					</div>

					<div className="Shapes__option Shapes__option--second">
						<img
							draggable="false"
							src="./assets/icons/main-tools-tab/5_shapes/fill_active.png"
							alt=""
						/>
						<span> {lang.homeTabs.shapes.fill.title} </span>
						<img draggable="false" alt="" src="./assets/icons/arrow_down.png" />
					</div>
				</div>
			</div>
			<div className="Shapes__description">{lang.homeTabs.shapes.title}</div>
		</div>
	);
};

export default Shapes;
