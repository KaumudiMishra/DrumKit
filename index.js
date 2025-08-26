//Deteching Button Press
var numberofdrumbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofdrumbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //this.style.color="white";
        var buttoninnerhtml = this.innerHTML;
        makeSound(buttoninnerhtml);
        buttonAnimation(buttoninnerhtml);
    });
}
//kind of event listener that implements the pressed class to the pressed button through click or keypress
function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey); 
        if (activeButton) {
            activeButton.classList.add("pressed");

            setTimeout(function () {
                activeButton.classList.remove("pressed");
            }, 100); 
        }
    }

//Deteching keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//l k j k l k j k s d
//w a s d s a w d

//lkjklkjkl wasd lkjklkjkl wasd



function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

        case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(this.buttoninnerhtml);
            break;
    }

    

}