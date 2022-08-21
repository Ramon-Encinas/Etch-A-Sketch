
const container = document.getElementById("gridContainer");

// Creates the grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "item";
    };
    
};

// Resets grid back to 10 x by
function defaultGrid() {
    container.innerHTML = "";
    makeRows(10 , 10);
    defaultColor();
}

// Empties the past grid and creates a new one
function newGrid() {
    let x = prompt("How many columns by rows do you wish to have?: ") 
    container.innerHTML = "";
    makeRows(x, x);
    defaultColor();
};

// Changes color to blackish gray
function defaultColor() {
    
    let elements = document.getElementsByClassName('item');
    
    for (let i = 0; i < elements.length; i++) {
        
        document.getElementsByClassName('item')[i].onmouseover = function() {changeColor1()};
        function changeColor1() {
            document.getElementsByClassName('item')[i].style.backgroundColor = "#575454";
        };
    };
    
};

// Changes color to a random one
function rainbowColor() {
    
    let elements = document.getElementsByClassName('item');
    
    for (let i = 0; i < elements.length; i++) {
        
        document.getElementsByClassName('item')[i].onmouseover = function() {changeColor1()};
        function changeColor1() {
            document.getElementsByClassName('item')[i].style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        };
    };
    
};



makeRows(10, 10);
defaultColor();

