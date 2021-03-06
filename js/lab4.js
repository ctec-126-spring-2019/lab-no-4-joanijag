// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = '';
    output = "<p>On a dark desert highway, cool wind in my hair Warm smell of colitas, rising up through the air. Up ahead in the distance, I saw a shimmering light. My head grew heavy and my sight grew dim, I had to stop for the night.</p>";
    return output;
}

function verse2() {
    let output = '';
    output = "<p>There she stood in the doorway; I heard the mission bell. And I was thinking to myself 'This could be Heaven or this could be Hell.' Then she lit up a candle and she showed me the way. There were voices down the corridor, I thought I heard them say.</p>";

    return output;
}
//chorous 1

function verse3() {
    let output = '';
    output = "<p>Her mind is Tiffany-twisted, she got the Mercedes-Benz. She got a lot of pretty, pretty boys, that she calls friends. How they dance in the courtyard, sweet summer sweat. Some dance to remember, some dance to forget.</p>";

    return output;
}

function verse4() {
    let output = '';
    output = "<p>So I called up the Captain,'Please bring me my wine.' He said, 'We haven't had that spirit here since nineteen sixty-nine.' And still those voices are calling from far away, wake you up in the middle of the night, just to hear them say.</p>";

    return output;
}

function verse5() {
    let output = '';
    output = "<p>Mirrors on the ceiling, the pink champagne on ice and she said, 'We are all just prisoners here, of our own device.' And in the master's chambers, they gathered for the feast. They stab it with their steely knives, but they just can't kill the beast.</p>";

    return output;
}

function verse6() {
    let output = '';
    output = "<p>Last thing I remember, I was running for the door. I had to find the passage back to the place I was before.    'Relax' said the night man, 'We are programmed to receive. You can check out any time you like, but you can never leave!'</p>";

    return output;
}

function chorus1() {
    let output = '';
    output = "<p>Welcome to the Hotel California. Such a lovely place, <i>(such a lovely place)</i> such a lovely face. Plenty of room at the Hotel California, any time of year (any time of year) you can find it here.</p>";

    return output;
}

function chorus2() {
    let output = '';
    output = "<p>Welcome to the Hotel California. Such a lovely place, <i>(such a lovely place)</i> such a lovely face.They livin' it up at the Hotel California. What a nice surprise,<i>(what a nice surprise)</i>, bring your alibis.</p >";

    return output;
}



function main() {
    let finalOutput = ''; // used to build lyrics string
    finalOutput = verse1();
    finalOutput += verse2();
    finalOutput += chorus1();
    finalOutput += verse3();
    finalOutput += verse4();
    finalOutput += chorus2();
    finalOutput += verse5();
    finalOutput += verse6();

    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
    return finalOutput;
}

window.onload = function () {
    main();
}