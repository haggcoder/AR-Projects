
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');

const instruct_plane = Scene.root.find('instruct plane');


var targetPlane =  Scene.root.find('targetTracker0');
   var confidenceSub = targetPlane.confidence.monitor().subscribe(function (e) {
       if (e.newValue == 'HIGH') {
           confidenceSub.unsubscribe();
           instruct_plane.hidden = true;
       }
   });
