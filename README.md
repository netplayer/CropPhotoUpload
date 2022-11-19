CropPhotoUpload

An older and obviously outdated project that's open-sourced now.

It is an experimental project containing some years value of dealing with Bezier curves and tangent lines ( https://en.wikipedia.org/wiki/B%C3%A9zier_curve) 

WHAT IT DOES
Crops a (face usually) image in the shape user defines using a number of points on top of the uploaded image.
Steps are:
1. Upload a face image
2. Use the points to mark the area to be cropped
3. Crop (result is saved inside /upload dir.


DEMO
[http://goo.gl/ZIWfHz]

PLUGIN (STILL UNDER DEVELOPMENT)
CropPhotoUpload Plugin 

Installation:

CropPhotoUpload can be easily integrated in any form  including the plugin in the page header e.g.:

<script type="text/javascript" src="assets/js/CropPhotoUpload.js"></script>

and calling it with the following code:

$([element]).CropPhotoUpload();

Element can be any valid HTML element , probably a button (see example form.html) which invokes image submission on click.
There has to be one image element right after this that will accept the cropped image.And the actual text input containing the image that will ne submitter with thge form.
All three  elements have to have an id., any distinct id will do.Latest jQuery has to be included on form page.
Please refer to form.html example.

The crop app layout can be easily changed editing html.html file.

