const orb = document.getElementById("orb");
const bg = document.getElementById("bg");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    orb.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 500, fill: "forwards"});

    bg.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 80000, fill: "forwards"});    
}
