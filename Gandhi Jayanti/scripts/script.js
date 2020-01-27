//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');


const instruct_plane = Scene.root.find('instructions');


var targetPlane =  Scene.root.find('targetTracker0');
   var confidenceSub = targetPlane.confidence.monitor().subscribe(function (e) {
       if (e.newValue == 'HIGH') {
           confidenceSub.unsubscribe();
           instruct_plane.hidden = true;
       }
   });
