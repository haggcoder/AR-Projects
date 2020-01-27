const HandTracking = require('HandTracking');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const Materials = require('Materials');
const particle = Scene.root.find('emitter0');
const focalDistance = Scene.root.find('Focal Distance');
const hand = HandTracking.hand(0);
const focalDistanceZPosition = focalDistance.transform.z;



const red_rectangle = Scene.root.find('red rectangle');
const blue_rectangle = Scene.root.find('blue rectangle');
const green_rectangle = Scene.root.find('green rectangle');




function drawing(){
// Bind the cameraTransform of the hand to the plane's transform
particle.transform = hand.cameraTransform;
particle.transform.z = hand.cameraTransform.z.sub(focalDistanceZPosition);


particle.hidden = false;
}


TouchGestures.onTap(red_rectangle).subscribe(function () {
	// body...
      
        particle.material = Materials.get('redcolor_mat');
        if(HandTracking.count.eq(0)){
	drawing();
}

})


TouchGestures.onTap(blue_rectangle).subscribe(function () {
	// body...
              particle.material = Materials.get('bluecolor_mat');
if(HandTracking.count.eq(0)){
	drawing();
}


})


TouchGestures.onTap(green_rectangle).subscribe(function () {
	// body...
      
        particle.material = Materials.get('greencolor_mat');
if(HandTracking.count.eq(0)){
	drawing();
}

})