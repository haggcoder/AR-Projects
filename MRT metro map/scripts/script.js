
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

const Textures = require('Textures');
const Materials = require('Materials');



const splash = Scene.root.find('splash');


var targetPlane =  Scene.root.find('planeTracker0');
   var confidenceSub = targetPlane.confidence.monitor().subscribe(function (e) {
       if (e.newValue == 'HIGH') {
           confidenceSub.unsubscribe();
           splash.hidden = true;
       }
   });


const metroline  = Scene.root.find('metro line');
const plane0 = Scene.root.find('plane0');
const plane1 = Scene.root.find('plane1');
const plane2 = Scene.root.find('plane2');
const plane3 = Scene.root.find('plane3');
const plane4 = Scene.root.find('plane4');
const plane5 = Scene.root.find('plane5');
const plane6 = Scene.root.find('plane6');
const plane7 = Scene.root.find('plane7');
const plane8 = Scene.root.find('plane8');
const plane9 = Scene.root.find('plane9');


const material0 = Materials.get('mat_line1');
const material1 = Materials.get('mat_line2');
const material2 = Materials.get('mat_line3');
const material3 = Materials.get('mat_line4');
const material4 = Materials.get('mat_line5');
const material5 = Materials.get('mat_line6');
const material6 = Materials.get('mat_line7');
const material7 = Materials.get('mat_line8');
const material8 = Materials.get('mat_line9');
const material9 = Materials.get('mat_line10');
const line_mat = Materials.get('line mat');


const reset = Scene.root.find('reset');

TouchGestures.onTap(plane0).subscribe(function(){

	metroline.material = material0;

})

TouchGestures.onTap(plane1).subscribe(function(){

	metroline.material = material1;

})
TouchGestures.onTap(plane2).subscribe(function(){

	metroline.material = material2;

})
TouchGestures.onTap(plane3).subscribe(function(){

	metroline.material = material3;

})
TouchGestures.onTap(plane4).subscribe(function(){

	metroline.material = material4;

})
TouchGestures.onTap(plane5).subscribe(function(){

	metroline.material = material5;

})
TouchGestures.onTap(plane6).subscribe(function(){
	
	metroline.material = material6;

})
TouchGestures.onTap(plane7).subscribe(function(){

	metroline.material = material7;

})
TouchGestures.onTap(plane8).subscribe(function(){

	metroline.material = material8;

})

TouchGestures.onTap(plane9).subscribe(function(){

	metroline.material = material9;

})

TouchGestures.onTap(reset).subscribe(function(){

	metroline.material = line_mat;

})


