//arrow up - 38
//arrow left - 37
//arrow right - 39
//arrow down - 40
let new_round = 0;
var score = 0;
var strategem_name = [];
var strategem_img = [];
var strategem_input = [];
var tracking_current = 0;

var strategems = {
    hellbomb: {
        name: 'HELLBOMB',
        input: ['40', '38', '37', '40', '38', '39', '40', '38'],
        img: "/General Stratagems/Hellbomb.svg"
    },
    flare: {
        name: 'ORBITAL ILLUMINATION FLARE',
        input: ['39', '39', '37', '37'],
        img: "/General Stratagems/Orbital Illumination Flare.svg"
    },
    sos: {
        name: 'SOS BEACON',
        input: ['38', '40', '39', '38'],
        img: "/General Stratagems/SOS Beacon.svg"
    }, 
    reinforce: {
        name: 'REINFORCE',
        input: ['38', '40', '39', '37', '38'],
        img: "/General Stratagems/Reinforce.svg"
    },
    resupply: {
        name: 'RESUPPLY',
        input: ['40', '40', '38', '39'],
        img: "/General Stratagems/Resupply.svg"
  
    }
}

window.addEventListener('click', function(e){
       if(new_round == 0){
            new_game();
            new_round++;
        }
}); 

window.addEventListener('keydown', function(e){
    var keycode = e.keyCode;
    if(keycode == 37 || keycode == 38 || keycode == 39 || keycode == 40){
       const audio = document.querySelector('#sound');
       audio.currentTime = 0; //rewind to start
       console.log(new_round);
       play_game(keycode);
       audio.play();
    }
});     

function pickStrategem() {
    var list = Object.keys(strategems);
    var random_strategem = list[Math.floor(Math.random() * list.length)]
    return strategems[random_strategem];
}

function new_game(){
        //start game - setup

        //select 5 strategems
        var current_list = 0;
        for(x = 0; x < 100; x++){
           var current_strategem = pickStrategem();
           //console.log(current_strategem);
           if(!strategem_name.includes(current_strategem.name)){
                strategem_name.push(current_strategem.name);
                strategem_img.push(current_strategem.img);
                strategem_input.push(current_strategem.input);
                current_list++;
                if(current_list == 5){
                    break;
                }
           }
        }

        for(x = 0; x < strategem_img.length; x++){
            var img = document.getElementById(x + "-image")
            img.src = strategem_img[x];
        }
        
        //populate name
        var name = document.getElementById("strategem-name");
        name.innerHTML = strategem_name[0];

        //populate input
        let input_section = document.getElementById('input-section');

     
        for(x = 0; x < strategem_input[0].length; x++){
             // Create image element
            let dynamicImage = document.createElement('img');
            dynamicImage.style.height = "150px";
            dynamicImage.style.margin = "10px";
            dynamicImage.style.filter = "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(20deg) brightness(103%) contrast(101%)";
            dynamicImage.setAttribute('data-count', x);
            if(strategem_input[0][x] == 37){
                dynamicImage.src = "/left-arrow-button-icon.svg";
            } else if(strategem_input[0][x]  == 38){
                dynamicImage.src = "/up-arrow-button-icon.svg";
            } else if(strategem_input[0][x]  == 39){
                dynamicImage.src = "/right-arrow-button-icon.svg";
            } else if(strategem_input[0][x]  == 40){
                dynamicImage.src = "/down-arrow-button-icon.svg";
            } 
       
            // Add image to DOM
            input_section.appendChild(dynamicImage);
        }

        //show elements
        document.getElementById("row2-2").classList.remove("hide");
        document.getElementById("row2-3").classList.remove("hide");
        document.getElementById("score-text").classList.remove("hide");
        document.getElementById("input-section").classList.remove("hide");

        //hide main menu text
        document.getElementById("instruction-text").classList.add("hide");
        document.getElementById("play-text").classList.add("hide");
}

function play_game(keycode){ 
        //middle of game, check to see if keydown matches input needed

        current_strategem = strategem_input[0];
        console.log(current_strategem);
        //always will be checking the first keycode of the first array
        if(keycode == current_strategem[0]){

            var arrow = document.querySelector(`img[data-count="${tracking_current}"]`);
            arrow.style.filter = "brightness(0) saturate(100%) invert(94%) sepia(93%) saturate(631%) hue-rotate(325deg) brightness(115%) contrast(97%)";
            current_strategem.shift(); //remove first item
            
          //  console.log('What is left ' + current_strategem);
            tracking_current++;
        }
        if(current_strategem.length == 0){
            //cut first strategem off the list and move on to the second one
            console.log(strategem_input)
            strategem_input.shift();
            check_end(strategem_input);
        }
        
}

function check_end(strategem_input){

    
    console.log(strategem_input)

    //update score
    score = score + 20;
    var score_text = document.getElementById('score-text');
    score_text.innerHTML = 'SCORE: ' + score;
    score_text.classList.add("blinking");
    score_text.addEventListener("animationend",  function() {
        score_text.classList.remove("blinking");  	
    });	

    //select all images, remove first one, adjust next image to be focus
    var images = document.querySelectorAll('.carousel-strategem');

    var elements = document.getElementsByClassName('className');
    var requiredElement = elements[0];

    console.log(images);
}

function next_strategem(){
    
}

/*
for(x = 0; x < strategem_input[0].length; x++){
             // Create image element
            let dynamicImage = document.createElement('img');
            dynamicImage.style.height = "150px";
            dynamicImage.style.margin = "10px";
            dynamicImage.style.filter = "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(20deg) brightness(103%) contrast(101%)";
            dynamicImage.setAttribute('data-count', x);
            if(strategem_input[0][x] == 37){
                dynamicImage.src = "/left-arrow-button-icon.svg";
            } else if(strategem_input[0][x]  == 38){
                dynamicImage.src = "/up-arrow-button-icon.svg";
            } else if(strategem_input[0][x]  == 39){
                dynamicImage.src = "/right-arrow-button-icon.svg";
            } else if(strategem_input[0][x]  == 40){
                dynamicImage.src = "/down-arrow-button-icon.svg";
            } 
       
            // Add image to DOM
            input_section.appendChild(dynamicImage);
        }
*/ 