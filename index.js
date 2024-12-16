console.log("Script successfully attached");

var words = [
    "dum",
    "dumb",
    "stoopid",
    "stupid",
    "silly",
    "smooth brained",
    "lamebrained",
    "idiotic",
    "goofy ahhh",
    "dense",
    "moronic",
    "dim-witted",
    "half-witted",
    "slow-witted",
    "brainless",
    "mindless",
    "boneheaded",
    "airheaded",
    "empty-headed",
    "obtuse",
    "hard of thinking",
    "asinine",
    "uhhh... unsmart?",
    "addlepated",
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
    "ineffectual"
]

document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    var dumbspan = document.querySelector('#dumb-word');
    var word = words[Math.floor(Math.random() * words.length)];
    dumbspan.textContent = word;
});