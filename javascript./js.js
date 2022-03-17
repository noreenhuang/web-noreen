//alert ("Hello")
$(document).click(function(){
    $("container").css("grid-template-columns","repeat(8, 1fr)")
})

var array=["element 1", "element 1", "element 1", "element 1"]
console.log(array)
var i = i;

$(document) .mousemove(function(){
    //$(".item").css("background", "blue")
    if ($(".item1:hover").length == 1) {
        $(".item1").css("background", "blue")
        $("#title1").css("font-size","40px")
        $("#title1").css("letter-spacing","20px")
        $("#title1").css("filter", "blur(8px)")
    } else {
        $(".item1").css("background", "white")
        $("#title1").css("font-size","20px")
        $("#title1").css("letter-spacing","normal")
        $("#title1").css("filter", "blur(2px)")
    }

    if($(".item2:hover").length == 1){
        $(".item2").css("background", "yellow")
    }
    else{
        $(".item2").css("background", "white")
    }

    if($(".item3:hover").length == 1){
        $(".item3").css("background", "green")
    }
    else{
        $(".item3").css("background", "white")
    }

    if($(".item4:hover").length == 1){
        $(".item4").css("background", "red")
    }
    else{
        $(".item4").css("background", "white")
    }

    if($(".item5:hover").length == 1){
        $(".item5").css("background", "pink")
    }
    else{
        $(".item5").css("background", "white")
    }

    if($(".item6:hover").length == 1){
        $(".item6").css("background", "purple")
    }
    else{
        $(".item6").css("background", "white")
    }
})

$(document).scroll(function(){
    console.log("I am scrolling")
    $(".block").addClass("move")
})