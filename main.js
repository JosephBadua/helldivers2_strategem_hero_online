//arrow up - 38
//arrow left - 37
//arrow right - 39
//arrow down - 40
let new_round = 0;
var score = 0;
var strategem_name = [];
var strategem_img = [];
var strategem_input = [];


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


window.addEventListener('keydown', function(e){
    var keycode = e.keyCode;
    if(keycode == 37 || keycode == 38 || keycode == 39 || keycode == 40){
       const audio = document.querySelector('#sound');
       audio.currentTime = 0; //rewind to start
       console.log(new_round);
       if(new_round == 0){
            new_game();
            new_round++;
        } else {
            play_game();
        }
       
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

        //populate images
        // console.log(strategem_name);
        // console.log(strategem_input);
        // console.log(strategem_img);

        for(x = 0; x < strategem_img.length; x++){
            var img = document.getElementById(x + "-image")
            img.src = strategem_img[x];
        }
        
        //populate name
        var name = document.getElementById("strategem-name");
        name.innerHTML = strategem_name[0];
      
        //populate input
        var input = document.getElementById('inputs');



        //show elements
        document.getElementById("row2-2").classList.remove("hide");
        document.getElementById("row2-3").classList.remove("hide");
        document.getElementById("score-text").classList.remove("hide");
        document.getElementById("inputs").classList.remove("hide");

        document.getElementById("title-text").classList.add("hide");
        document.getElementById("instruction-text").classList.add("hide");
        document.getElementById("play-text").classList.add("hide");
}

function play_game(){ 
        //middle of game, check to see if keydown matches input needed
        console.log('hello');
        console.log(strategem_name);
        console.log(strategem_input);
        console.log(strategem_img);
}

function check_end(){

}

