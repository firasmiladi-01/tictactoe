function select(id) {
    return document.querySelector(id);
}
const table = document.querySelector('table');
const td = document.querySelectorAll('td');
const a1 = { 'case': select("#a1"), 'horizontale': 'ligne1', 'verticale': 'col1' };
const a2 = { 'case': select("#a2"), 'horizontale': 'ligne1', 'verticale': 'col2' };
const a3 = { 'case': select("#a3"), 'horizontale': 'ligne1', 'verticale': 'col3' };
const b1 = { 'case': select("#b1"), 'horizontale': 'ligne2', 'verticale': 'col1' };
const b2 = { 'case': select("#b2"), 'horizontale': 'ligne2', 'verticale': 'col2' };
const b3 = { 'case': select("#b3"), 'horizontale': 'ligne2', 'verticale': 'col3' };
const c1 = { 'case': select("#c1"), 'horizontale': 'ligne3', 'verticale': 'col1' };
const c2 = { 'case': select("#c2"), 'horizontale': 'ligne3', 'verticale': 'col2' };
const c3 = { 'case': select("#c3"), 'horizontale': 'ligne3', 'verticale': 'col3' };
const horizontale = { 'ligne1': [a1, a2, a3], 'ligne2': [b1, b2, b3], 'ligne3': [c1, c2, c3] };
const verticale = { 'col1': [a1, b1, c1], 'col2': [a2, b2, c2], 'col3': [a3, b3, c3] };
var number = 0;
const cases = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
function type(number) {
    if (number % 2 != 0) { return 'X'; }
    else return 'O';
}
function affichage(type, place) {
    place.textContent = type;
}
function verify(choice) {
    if ((choice.textContent == 'X') || choice.textContent == 'O') { return false; }
    else return true;
}
function verifyEnd(type, choice) {
    let ligne = choice['horizontale'];
    let colonne = choice['verticale'];
    if ((horizontale[ligne][0]['case'].textContent == type) && (horizontale[ligne][1]['case'].textContent == type) && (horizontale[ligne][2]['case'].textContent == type)) {
        return true;
    }
    else {
        if ((verticale[colonne][0]['case'].textContent == type) && (verticale[colonne][1]['case'].textContent == type) && (verticale[colonne][2]['case'].textContent == type)) { return true }
        else {
            if (((ligne == 'ligne1') && (colonne == 'col1')) || ((ligne == 'ligne2') && (colonne == 'col2')) || ((ligne == 'ligne3') && (colonne == 'col3'))) {
                if ((a1['case'].textContent == type) && (b2['case'].textContent == type) && (c3['case'].textContent == type)) { return true; }
            }
            else {
                if (((ligne == 'ligne3') && (colonne == 'col1')) || ((ligne == 'ligne2') && (colonne == 'col2')) || ((ligne == 'ligne1') && (colonne == 'col3'))) {
                    if ((a3['case'].textContent == type) && (b2['case'].textContent == type) && (c1['case'].textContent == type)) { return true; }
                    return false;
                }
                return false;
            }
            return false;
        }
    }
}

function play(type, choice) {
    var id;
    if (verify(choice['case'])) {
        affichage(type, choice['case']);
        if (verifyEnd(type, choice)) {
            number = 9;
            id = setInterval(() => {
                table.classList.toggle('invisible');
            }, 500);
            setTimeout(() => {
                number = 0;
                clearInterval(id);
                cases.forEach(element => {
                    element['case'].textContent = '';
                });
            }, 3000);
        }
        else if (number == 9) {
            id = setInterval(() => {
                table.classList.toggle('invisible');
            }, 500);
            setTimeout(() => {
                number = 0;
                clearInterval(id);
                cases.forEach(element => {
                    element['case'].textContent = ''
                });
            }, 3000);
        }
    }
}


cases.forEach(element => {
    element['case'].addEventListener("click",
        () => {
            if (verify(element['case']))
                number++;
            play(type(number), element);
        })
});

