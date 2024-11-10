
const Vartest = 42;


function add(a, b) {
    return a + b;
}

// Fonction avec une erreur de syntaxe
function subtract(a, b) {
    return a - b
}

// Utilisation de var au lieu de let ou const
var multiply = (a, b) => {
    return a * b;
};

// Condition toujours vraie
if (true) {
    console.log("Cette condition est toujours vraie.");
}

// Export sans utilisation
module.exports = {
    add,
    subtract,
    multiply
};
