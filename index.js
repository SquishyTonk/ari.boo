console.log("Script successfully attached");

var words = [
    "dum",
    "dumb",
    "stoopid",
    "stupid",
    "silly",
    "smooth brained",
    "idiotic",
    "goofy ahhh",
    "dense",
    "moronic",
    "dim-witted",
    "slow",
    "boneheaded",
    "airheaded",
    "obtuse",
    "asinine",
    "dopey",
    "birdbrained",
    "vacuous",
    "anserine",
    "nescient",
    "boobish",
    "inept",
    "half-baked",
    "daft",
    "clueless",
    "doltish",
]

document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    var dumbspan = document.querySelector('#dumb-word');
    var word = words[Math.floor(Math.random() * words.length)];
    dumbspan.textContent = word;
});