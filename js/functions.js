var band = 1;
$("#contenedor").mousemove(function(event){
    let posx = event.pageX - $(this).offset().left;
    let posy = event.pageY - $(this).offset().top;

    let fanx = parseInt($('#fantasma').css("left")) + 25;
    let fany = parseInt($('#fantasma').css("top")) + 30;

    if(distancia(posx, fanx, posy, fany) < 120 && band == 1){
        let valx = Math.floor((Math.random() * 510) + 1);
        let valy = Math.floor((Math.random() * 235) + 1);

        if(distancia(posx, valx, posy, valy) >= 150){
            band = 0;
            $("#fantasma").fadeOut("fast", function(){
                $('#fantasma').css("left", valx +"px");
                $('#fantasma').css("top", valy +"px");
            });
            $("#fantasma").fadeIn("slow", function(){band = 1;});
        }
    }
});

function distancia(x1, x2, y1 ,y2){
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 -y2, 2));
}