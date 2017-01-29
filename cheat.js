var code = `
constructor();
function constructor() {
    if(window["cheat_destructor"]) {
        window["cheat_destructor"]();
    }
    window["cheat_destructor"] = destructor;

    document.addEventListener("keydown", onKeyDown);
    function onKeyDown(event) {
        console.log(event.key);
        switch(event.key) {
            case "z": {
                spreadUnits();
                break;
            }
        }
    }

    var spreadUnits = (function() {
        var time = +new Date();

        var grid = readGrid();
        var squares = asSquares(grid);
        var ownColor = getOwnColor();

        var ownSquares = squares.filter(square => square.element.className.includes(ownColor));
        ownSquares = ownSquares.filter(hasMoreThan1Unit);
        ownSquares = ownSquares.filter(hasNoMove);
        for(var i = 0; i < ownSquares.length; i++) {
            var square = ownSquares[i];
            var emptyNeighbors = neighbors(square, grid).filter(neighbour => isEmpty(neighbour.element));
            if (emptyNeighbors.length > 0) {
                //console.log("Moving from", square, "to", emptyNeighbors[0]);
                clickOnElement(square.element);
                clickOnElement(emptyNeighbors[0].element);
                clickOnElement(emptyNeighbors[0].element);
                clickOnElement(emptyNeighbors[0].element);
            }
        }

        time = +new Date() - time;
        console.log("Spread in " + time + "ms");
    });

    function destructor() {
        document.removeEventListener("keydown", onKeyDown);
    }
}

function isEmpty(element) {
    var className = element.className;
    className = className.replace("tiny", "").replace("small", "").replace("large", "").trim();
    return className === "";
}
function hasMoreThan1Unit(square) {
    var count = +square.element.textContent;
    return count > 1;
}
function hasNoMove(square) {
    return square.element.children.length === 0;
}

function getReactInternalInstance(element) {
    for(var key in element) {
        if(key.includes("reactInternalInstance")) {
            return element[key];
        }
    }
}

function clickOnElement(element) {
    getReactInternalInstance(element)._currentElement.props.onMouseDown({nativeEvent: {}, preventDefault: () => {}, stopPropagation: () => {}});
    getReactInternalInstance(element)._currentElement.props.onMouseUp({nativeEvent: {}, preventDefault: () => {}, stopPropagation: () => {}});
}

// { [x: number]: {[y: number]: Square} }
function readGrid() {
    var map = document.getElementById("map");
    var rows = map.children[0].children;

    var grid = {};

    for(var y = 0; y < rows.length; y++) {
        var columns = rows[y].children;
        for(var x = 0; x < columns.length; x++) {
            grid[x] = grid[x] || {};
            grid[x][y] = {
                x: x,
                y: y,
                element: columns[x]
            };
        }
    }

    return grid;
}

function asSquares(grid) {
    var squares = [];
    for(var x in grid) {
        for(var y in grid[x]) {
            squares.push(grid[x][y]);
        }
    }
    return squares;
}

function safeGet(grid, x, y) {
    return grid[x] && grid[x][y];
}

function neighbors(square, grid) {
    var arr = [];
    for (var ox = - 1; ox <= 1; ox++) {
        for (var oy = - 1; oy <= 1; oy++) {
            //Ignore if it is diagonal, or doesn't move
            if(Math.abs(ox) == Math.abs(oy)) continue;
            var x = ox + square.x;
            var y = oy + square.y;
            var nSquare = grid[x] && grid[x][y];
            if(nSquare) {
                arr.push(nSquare);
            }
        }
    }
    return arr;
}

function getOwnColor() {
    return document.getElementsByClassName("general selectable")[0].className.split(" ")[0];
}
`;

var script = document.createElement("script");
script.innerHTML = code;
document.body.appendChild(script);