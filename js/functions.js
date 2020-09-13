function changeImages() {
    var ot = ["one", "two"];
    var currentPos = 0;
   

    function changeImage() {
       
        $("." + ot[currentPos]).css( "opacity", "0" );
        currentPos < ot.length - 1 ? currentPos += 1 : currentPos = 0; 
        $("." + ot[currentPos]).css( "opacity", "1" );
    }

    setInterval(changeImage, 5000);
}
