
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const FaceGestures = require('FaceGestures');
const FaceTracking = require('FaceTracking');
const TouchGestures = require('TouchGestures');
const Time = require('Time');
const Fonts = require('Fonts');
const Materials = require('Materials');
const Reactive = require('Reactive');


const player = Scene.root.find('player rectangle');
const face = FaceTracking.face(0);
const track = Scene.root.find('track rectangle');
const counter_text = Scene.root.find('clock text');
const particle = Scene.root.find('emitter0');
const result_rectangle = Scene.root.find('result rectangle');
const blink = Scene.root.find('blink rectangle');
const success_mat = Materials.get('success_mat');
const fail_mat = Materials.get('fail_mat');
const result_bg_rectangle = Scene.root.find('result bg rectangle');
const intro_canvas = Scene.root.find('intro_canvas');
const instruction_canvas = Scene.root.find('instruction canvas');
const splash_rectangle = Scene.root.find('splash rectangle');
const instruction_rectangle = Scene.root.find('instruction rectangle')
const restart_rectangle = Scene.root.find('restart rectangle');
const initial_position = -1.6;
const steprun = 15;
const finish_position = 320

var i = 0;

var latest_position = 0;
var new_position = 0;
var time = 0;
 var s = 0, ms = 0;
  var newTime = '';

result_bg_rectangle.hidden = true;
particle.hidden = true;
restart_rectangle.hidden = true;
instruction_canvas.hidden = true;
blink.hidden = true;

TouchGestures.onTap(intro_canvas).subscribe(function () {


      instruction_canvas.hidden = false;
      intro_canvas.hidden = true;

      FaceGestures.onShake(face).subscribe(function (){
             blink.hidden = false;
             instruction_canvas.hidden = true;
             Clock();


             FaceGestures.onBlink(face).subscribe(function(){
             blink.hidden = true;


              if(i > 9.58){
               restart_rectangle.hidden = false;
               result_bg_rectangle.hidden = false;
               result_rectangle.hidden = false;
               result_rectangle.material = fail_mat;
                return;
              }

              if((latest_position <=  finish_position) ){

                 latest_position = player.transform.x.pinLastValue();
                 new_position = steprun + latest_position;
                player.transform.x = new_position;

                Diagnostics.watch('New pos', new_position);
                Diagnostics.log(new_position.toString());

              }


                 if(latest_position >  finish_position){
                 restart_rectangle.hidden = false;
                 result_rectangle.hidden = false;
                 particle.hidden = false;
                 result_bg_rectangle.hidden = false;
                 result_rectangle.material = success_mat;
                 }

             });


        });

});






        function Clock(){

                                if(i  >= 9.58){
                                 return;
                                }

                               //  Time.setTimeout( function(){
                               //  i.toFixed(2);
                               //  counter_text.text = i.toFixed(2).toString();
                               //   i = i + 0.01;

                               //   if(new_position >= finish_position){
                               //     return;
                               //   }
                               //   if(i <= 20){
                               //     Clock();
                               //   }

                               // },0.5);


            Time.setTimeout(function(){
            time++;
            Diagnostics.log("time " + time.toString());
            Diagnostics.log("milli "+ i.toString());
            var secs = Math.floor(time/10 % 60);
            var tenths = time % 10;
           
            if(secs < 10){
                secs = "0" + secs;
            }
          i = parseFloat(secs.toString() +"."+tenths.toString());
          counter_text.text = i.toString();
          
         if(new_position >= finish_position){
                  
                  return;
             }

            Clock();
        },90)


         
        }




        TouchGestures.onTap(restart_rectangle).subscribe(function (){
                    restart_rectangle.hidden = true;
                    result_bg_rectangle.hidden = true;
                    result_rectangle.hidden = true;
                     i=0;
                     particle.hidden = true;
                     player.transform.x = initial_position;
                     latest_position = 0;
                     new_position = 0;
                     time = 0;
                        Clock();

                              });
