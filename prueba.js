var svg = ear.svg()
svg.size(1, 1)
	.padding(0.1)
	.strokeWidth(1 / 100);

// start with an unfolded square
let origami = ear.origami();

// make an initial crease
const startAngle = 2 + Math.random(); // radians
const startCrease = ear.line.fromAngle(startAngle).translate(0.25, 0.25);
origami.flatFold(startCrease);

// every frame of onMove we fold the cache, not
// the folded origami from the previous frame.
let cache = origami.copy();

svg.origami(origami.folded());

svg.onPress = () => { cache = origami.copy(); };
svg.onRelease = () => { cache = origami.copy(); };
svg.onMove = (mouse) => {
	if (mouse.buttons === 0) { return; }
	const crease = ear.axiom(2, {points: [mouse.press, mouse.position]}).shift();
	origami = cache.copy();
	origami.flatFold(crease);
	svg.removeChildren();
	svg.origami(origami.folded());
};
