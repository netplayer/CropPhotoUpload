/*jslint browser:true */
/*jslint sloppy: true */
/*global $ */
//$(document).ready(function () {
 $(function($){
       
   
     $.fn.CropPhotoUpload = function() {
          
        
         $('.cropButton').click(function(){
            if($('.photoDiv').length==0 ){
                 $(this).parent().prepend('<div class="photoDiv" style="display:nonetop:0px;left:10%;position:absolute;margin:0 auto;"></div>');   
             }
             if( $('.photoDiv').html()==''){
               
         $(this).parents().find('.photoDiv').load( "html.html" );
         
             }
         
           if($(this).parents().find('#current').length==0) {
          $(this).parents().append('<span id="current" style="display:none;" ></span>')
      }
      if($(this).parents().find('#currentarea').length==0) {
          $(this).parents().append('<span id="currentarea" style="display:none;" ></span>')
      }
         //CropPhotoUpload_opened='true';
          var whichField=$(this).next('img').attr('id');
           var whichArea=$(this).nextAll().eq(1).attr('id');
        
        $('#current').html(whichField);
        $('#currentarea').html(whichArea);
   
     });
     
   

};
}( jQuery ));