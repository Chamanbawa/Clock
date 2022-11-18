
function onEvent(event, selector, callback) {

    return selector.addEventListener(event, callback);

}
function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);

}


const time = select('.time');
const input = select('.input');
const set = select('.Set')
const target = select('.target')

const alarmSound = new Audio('./asstes/audio/win.mp3');
alarmSound.type = 'audio/mp3';

// function bell() {}

setInterval(function () {
    const currenTime = new Date();
    let current = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`;
    time.innerText = current;
    
}, 1000);

onEvent('click', set, setAlarm);
function setAlarm(){
    target.innerText =  `${input.value}`;
    
    const currenTime = new Date();
    let current = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`;
    
        if ( current == input.value) {
            console.log('hello');
            // bell();
            alarmSound.play();

        }
        
    
}

// function setAlarm() {
    
//     setTime = new Date(input.value);
//     alarmDate = setTime.getHours()
//     console.log(`Setting alarm for ${alarmDate}....`);

//     currenTime = new Date();

//     let remtime = alarmDate - currenTime;

//     console.log(remtime);

//     if (remtime >= 0) {
//         setTimeout(() => {
//             bell();

//         }, remtime)
//     }
// };

   

