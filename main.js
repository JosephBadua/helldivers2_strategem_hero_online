let new_round = 0;
var score = 0;
var strategem_name = [];
var strategem_img = [];
var strategem_input = [];
var tracking_current = 0;
var interval_check= 0;
var timer = 0;
var width = ''

function generate_list(){
    const strategems = {
        hellbomb: {
            name: 'HELLBOMB',
            input: ['40', '38', '37', '40', '38', '39', '40', '38'],
            img: "General Stratagems/Hellbomb.svg"
        },
        flare: {
            name: 'ORBITAL ILLUMINATION FLARE',
            input: ['39', '39', '37', '37'],
            img: "General Stratagems/Orbital Illumination Flare.svg"
        },
        sos: {
            name: 'SOS BEACON',
            input: ['38', '40', '39', '38'],
            img: "General Stratagems/SOS Beacon.svg"
        }, 
        reinforce: {
            name: 'REINFORCE',
            input: ['38', '40', '39', '37', '38'],
            img: "General Stratagems/Reinforce.svg"
        },
        resupply: {
            name: 'RESUPPLY',
            input: ['40', '40', '38', '39'],
            img: "General Stratagems/Resupply.svg"
      
        },
        autocannon_sentry: {
            name: 'AUTOCANNON SENTRY',
            input: ['40', '38', '39', '38', '37', '38'],
            img: "Robotics Workshop/Autocannon Sentry.svg"
        },
        ems_mortar_sentry: {
            name: 'EMS MORTAR SENTRY',
            input: ['40', '38', '39', '40', '39'],
            img: "Robotics Workshop/EMS Mortar Sentry.svg"
        },
        gatling_sentry: {
            name: 'GATLING SENTRY',
            input: ['40', '38', '39', '37'],
            img: "Robotics Workshop/Gatling Sentry.svg"
        },
        guard_dog: {
            name: 'GUARD DOG',
            input: ['40', '38', '37', '38', '39', '40'],
            img: "Robotics Workshop//Guard Dog.svg"
        },
        machine_gun_sentry: {
            name: 'MACHINE GUN SENTRY',
            input: ['40', '38', '39', '39', '38'],
            img: "Robotics Workshop/Machine Gun Sentry.svg"
        },
        patriot_exosuit: {
            name: 'PATRIOT EXOSUIT',
            input: ['37', '40', '39', '38', '37', '40', '40'],
            img: "Robotics Workshop/Patriot Exosuit.svg"
        },
        rocket_sentry: {
            name: 'ROCKET SENTRY',
            input: ['40', '38', '39', '39', '37'],
            img: "Robotics Workshop/Rocket Sentry.svg"
        },
        anti_personnel_minefield: {
            name: 'ANTI-PERSONNEL MINEFIELD',
            input: ['40', '37', '40', '38', '39'],
            img: "Engineering Bay/Anti-Personnel Minefield.svg"
        },
        arc_thrower: {
            name: 'ARC THROWER',
            input: ['40', '39', '40', '38', '37', '37'],
            img: "Engineering Bay/Arc Thrower.svg"
        },
        ballistic_shield: {
            name: 'BALLISTIC SHIELD BACKPACK',
            input: ['40', '37', '40', '40', '38', '37'],
            img: "Engineering Bay/Ballistic Shield Backpack.svg"
        },
        grenade_launcher: {
            name: 'GRENADE LAUNCHER',
            input: ['40', '37', '38', '37', '40'],
            img: "Engineering Bay/Grenade Launcher.svg"
        },
        gaurd_dog_rover: {
            name: 'GUARD DOG ROVER',
            input: ['40', '38', '37', '38', '39', '39'],
            img: "Engineering Bay/Guard Dog Rover.svg"
        },
        incendiary_mines: {
            name: 'INCENDIARY MINES',
            input: ['40', '37', '37', '40'],
            img: "Engineering Bay/Incendiary Mines.svg"
        },
        laser_cannon: {
            name: 'LASER CANNON',
            input: ['40', '37', '40', '38', '37'],
            img: "Engineering Bay/Laser Cannon.svg"
        },
        shield_backpack: {
            name: 'SHIELD GENERATOR PACK',
            input: ['40', '38', '37', '39', '37', '39'],
            img: "Engineering Bay/Shield Generator Pack.svg"
        },
        supply_pack: {
            name: 'SUPPLY PACK',
            input: ['40', '37', '40', '38', '38', '40'],
            img: "Engineering Bay/Supply Pack.svg"
        },
        hmg: {
            name: 'HMG EMPLACEMENT',
            input: ['40', '38', '37', '39', '39', '37'],
            img: "Bridge/HMG Emplacement.svg"
        },
        orbital_ems: {
            name: 'ORBITAL EMS STRIKE',
            input: ['39', '39', '37', '40'],
            img: "Bridge/Orbital EMS Strike.svg"
        },
        orbital_gas: {
            name: 'ORBITAL GAS STRIKE',
            input: ['39', '39', '40', '39'],
            img: "Bridge/Orbital Gas Strike.svg"
        },
        orbital_precision: {
            name: 'ORBITAL PRECISION STRIKE',
            input: ['39', '39', '38'],
            img: "Bridge/Orbital Precision Strike.svg"
        },
        orbital_smoke: {
            name: 'ORBITAL SMOKE STRIKE',
            input: ['39', '39', '40', '38'],
            img: "Bridge/Orbital Smoke Strike.svg"
        },
        shield_relay: {
            name: 'SHIELD GENERATOR RELAY',
            input: ['40', '40', '37', '39', '37', '39'],
            img: "Bridge/Shield Generator Relay.svg"
        },
        tesla_tower: {
            name: 'TESLA TOWER',
            input: ['40', '38', '39', '38', '37', '39'],
            img: "Bridge/Tesla Tower.svg"
        },
        eagle_110mm: {
            name: 'EAGLE 110MM ROCKET PODS',
            input: ['38', '39', '38', '37'],
            img: "Hanger/Eagle 110MM Rocket Pods.svg"
        },
        eagle_500kg: {
            name: 'EAGLE 500KG BOMB',
            input: ['38', '39', '40', '40', '40'],
            img: "Hanger/Eagle 500KG Bomb.svg"
        },
        eagle_airstrike: {
            name: 'EAGLE AIRSTRIKE',
            input: ['38', '39', '40', '39'],
            img: "Hanger/Eagle Airstrike.svg"
        },
        eagle_cluster: {
            name: 'EAGLE CLUSTER BOMB',
            input: ['38', '39', '40', '40', '39'],
            img: "Hanger/Eagle Cluster Bomb.svg"
        },
        eagle_napalm: {
            name: 'EAGLE NAPALM AIRSTRIKE',
            input: ['38', '39', '40', '38'],
            img: "Hanger/Eagle Napalm Airstrike.svg"
        },
        eagle_rearm: {
            name: 'EAGLE REARM',
            input: ['38', '38', '37', '38', '39'],
            img: "Hanger/Eagle Rearm.svg"
        },
        eagle_smoke: {
            name: 'EAGLE SMOKE STRIKE',
            input: ['38', '39', '38', '40'],
            img: "Hanger/Eagle Smoke Strike.svg"
        },
        eagle_strafing: {
            name: 'EAGLE STRAFING RUN',
            input: ['38', '39', '39'],
            img: "Hanger/Eagle Strafing Run.svg"
        },
        jump_pack: {
            name: 'JUMP PACK',
            input: ['40', '38', '38', '40', '38'],
            img: "Hanger/Jump Pack.svg"
        },
        anti_material: {
            name: 'ANTI-MATERIAL RIFLE',
            input: ['40', '37', '39', '38', '40'],
            img: "Patriotic Administration Center/Anti-Materiel Rifle.svg"
        },
        autocannon: {
            name: 'AUTOCANNON',
            input: ['40', '37', '40', '38', '38', '39'],
            img: "Patriotic Administration Center/Autocannon.svg"
        },
        eat: {
            name: 'EXPENDABLE ANTI-TANK',
            input: ['40', '40', '37', '39', '38'],
            img: "Patriotic Administration Center/Expendable Anti-Tank.svg"
        },
        flamethrower: {
            name: 'FLAMETHROWER',
            input: ['40', '37', '38', '40', '38'],
            img: "Patriotic Administration Center/Flamethrower.svg"
        },
        railgun: {
            name: 'RAILGUN',
            input: ['40', '39', '40', '38', '37', '39'],
            img: "Patriotic Administration Center/Railgun.svg"
        },
        recoilless: {
            name: 'RECOILLESS RIFLE',
            input: ['40', '37', '39', '39', '37'],
            img: "Patriotic Administration Center/Recoilless Rifle.svg"
        },
        spear: {
            name: 'SPEAR',
            input: ['40', '40', '38', '40', '40'],
            img: "Patriotic Administration Center/Spear.svg"
        },
        stalwart: {
            name: 'STALWART',
            input: ['40', '37', '40', '38', '38', '37'],
            img: "Patriotic Administration Center/Stalwart.svg"
        },
        orbital_120mm: {
            name: 'ORBITAL 120MM HE BARRAGE',
            input: ['39', '39', '40', '37', '39', '40'],
            img: "Orbital Cannons/Orbital 120MM HE Barrage.svg"
        },
        orbital_380mm: {
            name: 'ORBITAL 380MM HE BARRAGE',
            input: ['39', '40', '38', '38', '37', '40', '40'],
            img: "Orbital Cannons/Orbital 380MM HE Barrage.svg"
        },
        orbital_airburst: {
            name: 'ORBITAL AIRBURST STRIKE',
            input: ['39', '39', '39'],
            img: "Orbital Cannons/Orbital Airburst Strike.svg"
        },
        orbital_gatling: {
            name: 'ORBITAL GATLING BARRAGE',
            input: ['39', '40', '37', '38', '38'],
            img: "Orbital Cannons/Orbital Gatling Barrage.svg"
        },
        orbital_laser: {
            name: 'ORBITAL LASER',
            input: ['39', '40', '38', '39', '40'],
            img: "Orbital Cannons/Orbital Laser.svg"
        },
        orbital_railgun: {
            name: 'ORBITAL RAILCANNON STRIKE',
            input: ['39', '38', '40', '40', '39'],
            img: "Orbital Cannons/Orbital Railcannon Strike.svg"
        },
        orbital_walking: {
            name: 'ORBITAL WALKING BARRAGE',
            input: ['39', '40', '39', '40', '39', '40'],
            img: "Orbital Cannons/Orbital Walking Barrage.svg"
        }

        
    }
    return strategems;
}

window.addEventListener('click', function(e){
       if(new_round == 0){
            timer = 20000;
            var score_text = document.getElementById('score-text');
            score_text.innerHTML = 'SCORE: 0';
            new_game();
            move(timer);
            new_round++;
        }
}); 

window.addEventListener('keydown', function(e){
    var keycode = e.keyCode;
    if(keycode == 37 || keycode == 38 || keycode == 39 || keycode == 40){
       //const audio = document.querySelector('#sound');
       //audio.play();
       play_game(keycode);
    }
});     

function generate_inputs(strategem_input){
    for(x = 0; x < strategem_input.length; x++){
             // Create image element
            let dynamicImage = document.createElement('img');
            dynamicImage.style.height = "100px";
            dynamicImage.style.margin = "10px";
            dynamicImage.style.filter = "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(20deg) brightness(103%) contrast(101%)";
            dynamicImage.setAttribute('data-count', x);
            if(strategem_input[x] == 37){
                dynamicImage.src = "left-arrow-button-icon.svg";
            } else if(strategem_input[x]  == 38){
                dynamicImage.src = "up-arrow-button-icon.svg";
            } else if(strategem_input[x]  == 39){
                dynamicImage.src = "right-arrow-button-icon.svg";
            } else if(strategem_input[x]  == 40){
                dynamicImage.src = "down-arrow-button-icon.svg";
            } 
            //populate input
            let input_section = document.getElementById('input-section');
       
            // Add image to DOM
            input_section.appendChild(dynamicImage);
        }
}


setInterval(check_timer, 500);

function check_timer() {
    console.log(timer);
    console.log(width);
    if(timer == 0 & width == '0%'){
        end_game();
    }
}


function pickStrategem(strategem_list) {

    var keys = Object.keys(strategem_list);
    return strategem_list[keys[ keys.length * Math.random() << 0]];

}

function new_game(){
        //start game - setup
        
        //select 5 strategems
        var current_list = 0;
        var strategem_list = generate_list();
        for(x = 0; x < 1000; x++){
           var current_strategem = pickStrategem(strategem_list);
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

        document.getElementById("title-text").classList.remove("hide");
        document.getElementById("game-over-text").classList.add("hide");


        //create imgs
        let imgDiv = document.getElementById('row-2-2-1');
        imgDiv.textContent = '';
        // Create image element
        for(x = 0; x < 5; x++){
            let dynamicImage = document.createElement('img');
            dynamicImage.classList.add('carousel-strategem')
            dynamicImage.setAttribute("id", x + "-image");
            dynamicImage.style.height = '170px';
            if(x == 0){
                dynamicImage.classList.add('focus-image');
            } else {
                dynamicImage.classList.add('sub-image');
            }
            imgDiv.appendChild(dynamicImage);
        }

        

        //add src to img
        for(x = 0; x < strategem_img.length; x++){
            var img = document.getElementById(x + "-image")
            img.src = strategem_img[x];
        }
        
        //populate name
        var name = document.getElementById("strategem-name");
        name.innerHTML = strategem_name[0];

        let input_section = document.getElementById('input-section');
        input_section.innerHTML = '';
        generate_inputs(strategem_input[0]);

        //show elements
        document.getElementById("row2-2").classList.remove("hide");
        document.getElementById("row2-3").classList.remove("hide");
        document.getElementById("row2-4").classList.remove("hide");
        document.getElementById("score-text").classList.remove("hide");
        document.getElementById("input-section").classList.remove("hide");

        //hide main menu text
        document.getElementById("instruction-text").classList.add("hide");
        document.getElementById("play-text").classList.add("hide");
}

//countdown bar
function move(delay) {
  var elem = document.getElementById("myBar");
  var end = Date.now() + delay;
  var frame = () => {
    var timeleft = Math.max(0, end - Date.now());
    timer = timeleft;
    elem.style.width = (100*timeleft)/delay + '%'; 
    elem.innerHTML = (timeleft/1000).toFixed(1)  + 's';
    width = elem.style.width
    if (timeleft === 0) return;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

function play_game(keycode){ 
        //middle of game, check to see if keydown matches input needed

        current_strategem = strategem_input[0];
        //always will be checking the first keycode of the first array
        if(keycode == current_strategem[0]){
            var arrow = document.querySelector(`img[data-count="${tracking_current}"]`);
            arrow.style.filter = "brightness(0) saturate(100%) invert(94%) sepia(93%) saturate(631%) hue-rotate(325deg) brightness(115%) contrast(97%)";
            current_strategem.shift(); //remove first item
            
            tracking_current++;
        }
        if(current_strategem.length == 0){
            //cut first strategem off the list and move on to the second one
            
            check_end(strategem_input);
        }
        
}

function end_game(){
    //timer reached 0, show score and reset text
    document.getElementById("title-text").classList.add("hide");
    document.getElementById("game-over-text").classList.remove("hide");
    document.getElementById("instruction-text").classList.remove("hide");
    document.getElementById("row2-2").classList.add("hide");
    document.getElementById("row2-3").classList.add("hide");
    document.getElementById("row2-4").classList.add("hide");
    document.getElementById("input-section").classList.add("hide");
        strategem_img = [];
        strategem_name = [];
        strategem_input.length = 0;
    new_round = 0;
    score = 0;
        
    
}

function check_end(strategem_input){
    

    //update score
    score = score + 20;
    var score_text = document.getElementById('score-text');
    score_text.innerHTML = 'SCORE: ' + score;
    score_text.classList.add("blinking");
    score_text.addEventListener("animationend",  function() {
        score_text.classList.remove("blinking");  	
    });	

    //select all images, remove first one, adjust next image to be focus
    var images = document.getElementsByClassName('carousel-strategem');
    var focused = images[0];
    if(images.length == 1){//last one
        //RESET GAME
        focused.remove();
        strategem_img = [];
        strategem_name = [];
        strategem_input.length = 0;
        tracking_current = 0;

        //add 1 second for every completed strategem
        timer = timer + 1000
        new_game();
    } else {//remaining items
        //add 1 second for every completed strategem
        timer = timer + 1000

        move(timer);

        //adjust images and reset inputs
        var nextImage = images[1];
        focused.remove();
        nextImage.classList.remove("sub-image");
        nextImage.classList.add("focus-image");

        //reset input box
        document.getElementById('input-section').innerHTML = '';

        //reset tracking count
        tracking_current = 0;

        //generate box 
        strategem_input.shift();
        generate_inputs(strategem_input[0]);

        //reset name
        strategem_name.shift();
        
        //populate name
        var name = document.getElementById("strategem-name");
        name.innerHTML = strategem_name[0];
    }
}



