function toggleSwitch(element) {
    element.classList.toggle('on');
    checkSwitches1();
    checkSwitches2();
    checkSwitches3();
}

function checkSwitches1() {
    const switch1 = document.getElementById('switch1').classList.contains('on');
    const switch2 = document.getElementById('switch2').classList.contains('on');
    
    const messageElement = document.getElementById('message');

    let message = '';

    if (switch1 && switch2) {
        message += 'Sensibilidad loop 1: Alta. ';
    } else if (switch1 && !switch2) {
        message += 'Sensibilidad loop 1: Media Baja. ';
    } else if (!switch1 && switch2) {
        message += 'Sensibilidad loop 1: Media Alta. ';
    } else {
        message += 'Sensibilidad loop 1: Baja. ';
    }  

    messageElement.textContent = message;
}

function checkSwitches2() {
    const switch3 = document.getElementById('switch3').classList.contains('on');
    const switch4 = document.getElementById('switch4').classList.contains('on');

    const messageElement2 = document.getElementById('message2');

    let message2 = '';
    
    if (switch3 && switch4) {
        message2 += 'Sensibilidad loop 2: Alta.';
    } else if (switch3 && !switch4) {
        message2 += 'Sensibilidad loop : Media Baja.';
    } else if (!switch3 && switch4) {
        message2 += 'Sensibilidad loop 2: Media Alta.';
    } else {
        message2 += 'Sensibilidad loop 2: Baja.';
    }

    messageElement2.textContent = message2;

}


function checkSwitches3() {
    const switch5 = document.getElementById('switch5').classList.contains('on');

    const messageElement3 = document.getElementById('message3');

    let message3 = '';

    if (switch5)
        message3 += 'Frecuencia: Alta';
    else {
        message3 += 'Frecuencia: Baja';
    }

    messageElement3.textContent = message3;
}