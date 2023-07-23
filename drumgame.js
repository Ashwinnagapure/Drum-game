var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleclick);
    

}



function handleclick() {

    var buttoninnerhtml = this.innerHTML;

    makesound(buttoninnerhtml);
    addAnimation(buttoninnerhtml);


}

document.addEventListener("keydown",key1);

function key1(event){
   
makesound(event.key);
addAnimation(event.key);

}

function makesound(key)
{

 
    switch (key) {
        case "w":
            var audio = new Audio("image/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("image/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("image/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("image/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("image/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("image/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("image/crash.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function addAnimation(action)
{
 
    document.querySelector("."+ action).classList.add("effect");

    setTimeout(() => {
        document.querySelector("."+action).classList.remove("effect")
    }, 100);

}

