<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="HTML5 crop">
        <meta name="author" content="netplayer@netplayer.gr">
        <title>Crop out any shape</title>
        <!-- Bootstrap core CSS -->
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <!-- custom CSS here -->
        <link href="assets/css/style.css" rel="stylesheet" />
        <link href="assets/css/styles.css" rel="stylesheet" />
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="assets/css/jquery.ui.rotatable.css">
<!--        <link rel="stylesheet" href="assets/js/jquery-mobile/jquery.mobile-1.4.5.min.css">-->
       
    </head>
    <body>

        
        <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="https://www.netplayer.gr"><img src="https://www.netplayer.gr/images/logo.png"/></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">


                   
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <div class="container">

            <div class="row">

                <div class="col-md-8">
                    <div class="steps-headers">
                        <ul class="nav nav-tabs nav-steps">
                            <li class="step" id="step1">
                                <a href="#step1" data-toggle="tab" >Upload</a>
                            </li>
                            <li class="step" id="step2">
                                <a href="#step2" data-toggle="tab">Edit</a>
                            </li>
                            <li class="step" id="step3">
                                <a href="#step3" data-toggle="tab">Crop</a>
                            </li>

                        </ul>
                    </div>

                    <div class="tab-content">
                        <div class="tab-pane fade in active" id="step1">
                            <div id="border-div" style="border-style:  solid;border-color: #c67605;border-width: 2px;border-radius: 15px;overflow:hidden;width:900px; height:550px;display:block;" >
                                <table style="width:900px;">
                                    <tr>
                                        <td style="width:400px;height:480px;overflow:hidden;text-align:top;">

                                            <div class="face"> 
                                                <div id="canvaswrapper" style="overflow:hidden;">
                                                    <canvas id="facecanvas"   style="z-index:1000000;position:absolute;"  width="400" height="480"></canvas>
                                                    <canvas id="canvas"   style="z-index:1900000;position:absolute;"  width="400" height="480"></canvas>
                                                    <canvas id="spotscanvas"   style="z-index:1900000;position:absolute;"  width="400" height="480"></canvas>
 

                                                </div> 

                                                <img id="faceimg" src="" style="display:none;"/>
                                            </div>
                                            <span class="mask">
                                                <canvas id="maskcanvas"  width="400" height="480"></canvas>
                                            </span>


                                        </td>
                                        <td  style="text-align: center;vertical-align:  middle;width:450px;">

                                            <div class="hints" style="background-image:url(img/hints1.png)" ><input type="file" id="imageLoader" style="position:absolute;top:290px;left:630px;z-index:100;"/></div>
                                            <div class="tools" > <div style="margin-top:120px;margin-left:70px;z-index:200;width:300px;"><center><span>Zoom</span></center> <div id="zoom" style="z-index:9999;"></div></div>
                                                <div style="margin-top:160px;margin-left:70px;z-index:200;width:300px"><center>Rotate</center><div id="rotate" ></div></div></div>
                                        </td></tr>





                                  






                                </table>
                                
                                
                                
                            </div>
                            <table>
                                     <tr><td style="text-align: center;vertical-align:  middle;width:450px;"><span style="position:absolute;"><a href="javascript:void(0);" id="prev" >PREVIOUS</a></span></td><td style="text-align: center;vertical-align:  middle;width:450px;"><span style="position:absolute;"><a href="javascript:void(0);" id="next">NEXT</a></span></td></tr>
                                    
                                </table>
                        </div>
           

                    </div>  
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
        <textarea id="imgtext" cols="80" rows="5" style="margin-left:20%;margin-top:5%;display:none;"></textarea>
       <img src="" id="txtimg" width="60" style="display:none;"/>

        <!--Footer -->

        <div class="col-md-12 end-box ">
            Need this or a similar application? <a href="mailto:netplayer@gmx.com"> Contact me</a> | Check another related (polygon-cropping) application <a href="https://goo.gl/UJg5kh">  here</a>  also <a href="https://goo.gl/tEYstj"> open-sourced on GitHub</a>
        </div>
        <!-- /.col -->
        <!--Footer end -->
        <!--SCRIPTS AT THE BOOTOM TO DECREASE LOAD TIME-->
        <!--jQUERY FILES-->
        <script src="assets/js/jquery-1.10.2.js"></script>
        <!--BOOTSTRAP  FILES-->

        <script src="assets/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="https://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
        <script type="text/javascript" src="assets/js/all.js"></script>
<!--        <script type="text/javascript" src="https://www.netplayer.gr/fabric/all.js"></script>-->
        <script type="text/javascript" src="assets/js/jquery.ui.touch-punch.min.js"></script>
        <script type="text/javascript" src="assets/js/upload.js" ></script>
        <script type="text/javascript" src="assets/js/jquery.ui.rotatable.js"></script>
        <script type="text/javascript" src="assets/js/script-min.js"></script>
        <script type="text/javascript" src="assets/js/jquery-blockui.js"></script>
<!--            <script type="text/javascript" src="assets/js/jquery-mobile/jquery.mobile-1.4.5.min.js"></script>-->
        
       
    </body>
</html>
