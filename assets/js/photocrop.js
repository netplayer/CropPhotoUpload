$(document).ready(function(){
                
                
                
                
                var next = 0;//current step
                var points = [];//holds the mousedown points
                function Fcanvas(c) {
             return  new fabric.Canvas(c);
         }
                
            var facecanvas=Fcanvas("facecanvas");
            
    	
      
       
       
         fabric.Image.fromURL('img/mask1.png', function(oImg) {
                                         oImg.id='facemask',
                                         //oImg.width = 130,
                                         //oImg.height =130,
                                         oImg.left =0,
                                         oImg.top = 0,
                                         oImg.hasBorders=false,
                                         
                                         facecanvas.add(oImg); 
                                        
                                         facecanvas.renderAll();
                                         
                             });
                     
                
        
        var uploader = document.getElementById('uploader');
           uploader.addEventListener('change', handleImage, false);
        
        
    function handleImage(e) {//user background from upload
         
                var reader = new FileReader();
                reader.onload = function(event) {
                
                    var thisimage = new Image();
                     //load user face image
                    thisimage.onload = function() {
                        
                        
                         fabric.Image.fromURL(thisimage.src, function(oImg) {
                             var offset=$('#facecanvas').offset();
                                         oImg.id='faceimage',
                                         //oImg.width = 130,
                                         //oImg.height =130,
                                         oImg.left =205,
                                         oImg.top = 273,
                                         oImg.hasBorders=false,
                                         //oImg.centeredRotation=true,
                                        // oImg.centeredScaling=true,
                                          oImg.originX='center',
                                          oImg.originY= 'center',
                                         oImg.lockMovementX =oImg.lockMovementY = false;
                                         facecanvas.add(oImg); 
                                       // facecanvas.setOverlayImage('img/mask.png');
                                         facecanvas.renderAll();
                        
           
          
           
    });
           
          
        
                    };
                    thisimage.src = event.target.result;
                    
                   
                };
                reader.readAsDataURL(e.target.files[0]);
               
        facecanvas.setOverlayImage('img/mask.png');
        facecanvas.controlsAboveOverlay = true;
                                         facecanvas.renderAll();
  
       
        //show tools 

 $('.hints').hide();
  $('.tools').show();
  
  
  var cv_obs = facecanvas.getObjects();
                    for(var i = 0; i < cv_obs.length; i++){
                      if(cv_obs[i].id == 'facemask'){ facecanvas.remove(cv_obs[i]); }
                    }          
  $('#step1').removeClass('step-active');
  $('#step1').addClass('step-inactive');
  $('#step2').removeClass('step-inactive');
  $('#step2').addClass('step-active');
  next=1;
  
            };
            
            
         
           
         $("#rotate").slider({
              
      value:0,
      min: -90,
      max: 90, 
      step:1,
            slide: function(event,ui){
   if(next<2){
           var val = ui.value;
         facecanvas.forEachObject(function(obj){
             if(obj.id=='faceimage'){
     obj.originX='center',
       obj.originY= 'center',          
    obj.setAngle(val).setCoords();
             }
  });
  facecanvas.renderAll();
            }
        }
            });
            
            
              $("#zoom").slider({
       value: 1,
    min: 0.5,
    max: 1.5,
    step: 0.01,
       slide: function( event, ui ) {
           if(next<2){     
   
           var val = ui.value;
                  facecanvas.forEachObject(function(obj){
             if(obj.id=='faceimage'){
     obj.originX='center',
       obj.originY= 'center',          
    obj.scale(val).setCoords();
             }
          
  });
           
         facecanvas.renderAll();     
           
          // window.console.log(val);
       // zoomIn(val,facecanvas);
    }
       }
            });
            
            
          
            
          $('#next').click(function(){
              if(next==0){
                  return false;;
              }
             if(next==1){
                 
                 $('#step1').removeClass('step-active');
                 $('#step1').addClass('step-inactive');
                 $('#step2').removeClass('step-active');
                 $('#step2').addClass('step-inactive');
                 $('#step3').removeClass('step-inactive');
                 $('#step3').addClass('step-active');
                 next=2;
               var cv_obs = facecanvas.getObjects();
                    for(var i = 0; i < cv_obs.length; i++){
                      if(cv_obs[i].id == 'faceimage'){ cv_obs[i].lockMovementX = cv_obs[i].lockMovementY = true; cv_obs[i].lockScalingX = true;
cv_obs[i].lockScalingY = true;cv_obs[i].lockRotation = true; }
                    }          
                  
facecanvas.overlayImage = null;
facecanvas.renderAll.bind(facecanvas);

                     
              
              
              facecanvas.hoverCursor ='default';
                
           var maskpoints=[];
          
           maskpoints[0]='671,566';
           maskpoints[1]='611,541';
           maskpoints[2]='578,504';
           maskpoints[3]='565,435';
           maskpoints[4]='561,364';
           maskpoints[5]='571,294';
           maskpoints[6]='614,252';
           maskpoints[7]='681,237';
           maskpoints[8]='739,249';
           maskpoints[9]='779,277';
           maskpoints[10]='803,326';
           maskpoints[11]='799,378';
           maskpoints[12]='797,430';
           maskpoints[13]='794,478';
           maskpoints[14]='778,516';
           maskpoints[15]='752,543';
           maskpoints[16]='722,556';
           
      createSpots();
            
           function createSpots(){
              // window.console.log('createSpots');
                $('.spot').each(function(){
                 $(this).remove();                    
                    
                }); 
                
                for(var i=0;i< maskpoints.length;i++){
                    var maskArr=maskpoints[i].split(',');
                      // window.console.log('maskpoints.length: '+maskpoints.length);
                    var eX=parseInt(maskArr[0]);
                    var eY=parseInt(maskArr[1]);
                    //window.console.log(eX +' '+eY);
                    /*
                     *  
    
   
     
    var myLeft=path.left-offset.left;
    var myTop=path.top-offset.top;
                     * 
                     * 
                     */
                    
                    var offset=$('#facecanvas').offset(); 
                    
                    
//                                  fabric.Image.fromURL("img/spot.png", function(oImg) {
//                             var offset=$('#facecanvas').offset();
//                                        // oImg.id='faceimage',
//                                         //oImg.width = 130,
//                                         //oImg.height =130,
//                                         oImg.left =eX,
//                                         oImg.top = eY,
//                                         oImg.hasBorders=false,
//                                         //oImg.centeredRotation=true,
//                                        // oImg.centeredScaling=true,
//                                          oImg.originX='center',
//                                          oImg.originY= 'center',
//                                        // oImg.lockMovementX =oImg.lockMovementY = false;
//                                         facecanvas.add(oImg); 
//                                       // facecanvas.setOverlayImage('img/mask.png');
//                                         facecanvas.renderAll();
//                        
//           
//          
//           
//    });
                    
                    
                    
                    
                    
                    
                    var pointer = $('<img class="spot"  id="spot'+i+'" title="spot'+i+'" src="img/spot.png"/>').css({
                            'position': 'absolute',
                            //'background-color': 'red',
                            //'width': '7px',
                            //'height': '7px',
                             'left': eX-offset.left,
                            'top': eY-offset.top,                           
                            'z-index':2000000


                        }); 
                        
                     $('#canvaswrapper').append(pointer);
                }
                
                    $('.spot').draggable({
                    drag: function( event, ui ) {
                        
                  var arrID=$(this).attr('id').replace('spot','') ;
                  var offset=$(this).offset();
                  maskpoints[arrID]=offset.left+','+offset.top;
                  
                  
                  createPath();
                  
                    },
                    stop:function(event,ui){
                        createSpots();
                    }
                    
            });
                 createPath();
                 $('.spot').css('cursor','pointer');
                return false;  
            }      
            
 
   
             createPath();
             
             
             
    function createPath(){ 
         //window.console.log('createPath');
        clearPath();
        
     
     for(var x=0;x<maskpoints.length;x++){
         
         if(x==0){
         var mystart='M '+maskpoints[x].replace(","," ");
     }
     else{
         var mypoints=mypoints+' L '+maskpoints[x].replace(","," ")
     }
         
     }  
     
     
     var path = new fabric.Path(mystart+mypoints+' z', {
        fill : '',
        stroke : 'yellow',
        selectable : false,
        id:'facepath',
        hasBorders:false,
        originX:'center',
        originY:'center'
        
    });

    
    var offset=$('#facecanvas').offset(); 
    
   
     
    var myLeft=path.left-offset.left;
    var myTop=path.top-offset.top;
            
      path.setControlsVisibility({
    mt: false, 
    mb: false, 
    ml: false, 
    mr: false, 
    bl:false,
    br:false,
    tl:false,
    tr:false,
    mtr:false
    
});   
     path.set({ left: myLeft, top: myTop }); 
     path.lockMovementX = path.lockMovementY = true; path.lockScalingX = true;
path.lockScalingY = true;path.lockRotation = true; 
facecanvas.add(path);
             }

function clearPath(){
var cv_obs = facecanvas.getObjects();
                    for(var i = 0; i < cv_obs.length; i++){
                      if(cv_obs[i].id =='facepath'){ 
                        //window.console.log(obj+' '+i);
                          cv_obs[i].remove(); 
                          
                      }
                    }
                }


  // Some dazzling stuff happens be here

function mouseMove(e){
    
    
               
            };
            
            
            
                 function doubleClick(e) {
                     //window.console.log(e.path[0].attributes[0].value);
                     if((e.path[0].attributes[0].value).indexOf("spot")>-1){
                         return;
                     }
                     var position;

            var pointer = $('<img class="spot"  id="spot'+i+'" title="spot'+i+'" src="img/spot.png"/>').css({
                            'position': 'absolute',
                            'background-color': 'red',
                            'width': '7px',
                            'height': '7px',
                            'top': e.pageY,
                            'left': e.pageX,
                            'z-index':2000000
                        });
                       
            
            
           
              var closest=  closestPoint(maskpoints,parseInt(e.pageX),parseInt(e.pageY));
               
            position=closest;
              maskpoints.splice(position, 0, e.pageX+','+e.pageY);
               createSpots();
            };
            
      function findDistance(point1x,point1y,point2x,point2y){
          
        var xs = 0;   
         var xs = point2x - point1x;
  xs = xs * xs;

  var ys = point2y - point1y;
  ys = ys * ys;

  return Math.sqrt( xs + ys ) 
          
      } 
      
      
      
   
              
              
              
      
      
      $(document.body).on('dblclick','.spot',function(){
          window.console.log('deleting');
          var indexArr=$(this).attr('id');
          var index=indexArr.replace('spot','');
          maskpoints.splice(index,1)
          $(this).remove();
          createSpots();
          
      });
      
      
      
               function mouseup(e){
//                     var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
//                     window.console.log('path');
//                         path.set({ left: 120, top: 120 });  
//                        facecanvas.add(path);
                };
                
                
              }
              
              
              
              
              
              
            
              
          });   
          
          
function closestPoint(arr,ex,ey) {
    ///////
    
    
    
    
    ///////
   
     var  distancex=100000;
      var  distancey=100000;
      var totalDistance=100000;
   for(var k=0 ; k< arr.length;k++){
     
     var mxArr=arr[k].split(',');  
     var mx=parseInt(mxArr[0]);
     if(ex>mx){
     var distx=ex-mx;
 }
 else{
     var distx=mx-ex; 
 }
    
//     if (distx<distancex){
//         distancex=distx;
//         var xID=k;
//     }
     
     var my=parseInt(mxArr[1]);
     if(ey>my){
     var disty=ey-my;
 }
 else{
     var disty=my-ey; 
 }
 
 if( Math.sqrt((distx*distx)+(disty*disty))<totalDistance){
     totalDistance=Math.sqrt((distx*distx)+(disty*disty));
     
     var ID=k;
 }
 
      
//     if (disty<distancey){
//         distancey=disty;
//         var yID=k;
//     }
     
       
   }
   return ID;
}
          
          
          
          
          
          
            $('#prev').click(function(){
              if(next==0){
                  return false;;
              }
              if(next==1){
                  next=0;
                      window.location.reload();
                    
              }
              if(next==2){
                  //next=1;
                 window.location.reload(); 
              }
              
          });
          
           function getObjIndex(obj){
      
       var cv_obs = facecanvas.getObjects();
                    for(var i = 0; i < cv_obs.length; i++){
                      if(cv_obs[i].id == obj){ 
                        //window.console.log(obj+' '+i);
                          return(i); 
                          
                      }
                    }
      
      
      
      };  
            
    }); 