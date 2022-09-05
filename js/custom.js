
    // console.log($);
    // console.log(jQuery);

    // jQuery("button").click(function(){
    //     console.log("Button Clicked");
    // });

    // $("button").click(function(){
    //     console.log("Button Clicked");
    // });

    // jQuery.noConflict();
    // jQuery(document).ready(function($){
    //     $("button").click(function(){
    //         console.log("Button Clicked");
    //     });
    // });


    // jQuery.noConflict();
    // jQuery(document).ready(function($){

    //     //Mouse Events
    //     $("p").click(function(){
    //         console.log("Clicked");
    //     });

    //     $("p").dblclick(function(){
    //         console.log("Double Clicked");
    //     });

    //     $("p").mouseenter(function(){
    //         console.log("Enter");
    //     });

    //     $("p").mouseleave(function(){
    //         console.log("Leave");
    //     });

    //     //Keyboard Events

    //     $("#name").keypress(function(){
    //         console.log("Keypress");
    //     });

    //     $("#name").keydown(function(){
    //         console.log("Keydown");
    //     });

    //     $("#name").keyup(function(){
    //         console.log("Keyup");
    //     });

    //     //Form Events

    //     $("#fname").focus(function(){
    //         console.log("Focus Field");
    //     });

    //     $("#fname").blur(function(){
    //         console.log("Blur Field");
    //     });

    //     $("#form-id").submit(function(e){
    //         console.log("Form Submitted");
    //         e.preventDefault();
    //     });

    //     //window event

    //     $(window).resize(function(e){
    //         console.log("Window Resize");
    //     });

    // });


    jQuery.noConflict();
    //Image Hide and Show
    jQuery(document).ready(function($){
        $("#btn-hide").click(function(){
            $("#img-id").hide(500,function(){
                console.log("image hide");
            });
        });
        
        $("#btn-show").click(function(){
            $("#img-id").show(500,function(){
                console.log("image show");
            });
        });

        $("#btn-toggle").click(function(){
            $("#img-id").toggle(500,function(){
                console.log("image hide/show");
            });
        });

        //Fade out and in

        $("#btn-fadeout").click(function(){
            $("#img-id").fadeOut(500,function(){
                console.log("Fade Out");
            });
        });

        $("#btn-fadein").click(function(){
            $("#img-id").fadeIn(500,function(){
                console.log("Fade In");
            });
        });

        $("#btn-fadetoggle").click(function(){
            $("#img-id").fadeToggle(500,function(){
                console.log("Fade Toggle");
            });
        });

        $("#btn-fadeto").click(function(){
            $("#img-id").fadeTo(500, 0.5, function(){
                console.log("Fade To");
            });
        });

        //Slide Up Down


        $("#btn-slidedown").click(function(){
            $("#img-id").slideDown(500, function(){
                console.log("Slide Down");
            });
        });

        $("#btn-slideup").click(function(){
            $("#img-id").slideUp(500, function(){
                console.log("Slide Up");
            });
        });

        $("#btn-slidetoggle").click(function(){
            $("#img-id").slideToggle(500, function(){
                console.log("Slide Toggle");
            });
        });


        //Animate

        $("#btn-animate").click(function(){
            $("#zom-id").animate({left:"+=80"},1000,function(){
                console.log("Animated");
            });
        });


        //Get Text

        var text=$("p").text();
        console.log(text);

        //Set Text

        $("#set-text").click(function(){
            $("p").text("My name is Koushik");
        });

        //Get HTML data

        var html=$("p").html();
        console.log(html);

        //Set HTML

        $("#set-html").click(function(){
            $("p").html("My name is Koushik");
        });

        //Get Value

        var value=$("#name").val();
        console.log(value);

        //Set Value

        $("#set-value").click(function(){
            $("#name").val("Joyeta Biswas");
        });


        //Get Attribute

        var attrValue1=$("link").attr("href");
        console.log(attrValue1);

        var attrValue2=$("#name").attr("data-sid");
        console.log(attrValue2);

        //Set Attribute

        $("#set-attribute").click(function(){
            console.log("Old Data:",$("#name").attr("data-sid"));
            $("#name").attr("data-sid", "20");
            console.log("New data Set")
            var newData=$("#name").attr("data-sid");
            console.log("New Data:",newData);
        });


        //Set Image Attribute

        $("#set-image").click(function(){
            $("#img-id").attr("src", "image/photo.jpg");
        });

    });