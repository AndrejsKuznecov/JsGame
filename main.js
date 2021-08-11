const maze = [
    [1,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,1,1,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,1,1,1,1,1,0,0,0],
    [0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,1,1,1],
    [0,0,0,0,0,1,1,1,0,1]
];
let charX= 0;
let charY= 0;

const canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
buildMaze();


function buildMaze(){
    const squeareSize = 50;
    const boardTopx = 50;
    const boardTopy = 50;
    for( let i = 0; i < maze.length ; i++)
    {
        for(let j = 0; j < maze.length; j++){
            const mazeElement = maze[j][i]
            if(mazeElement == 1)
                ctx.fillStyle ="white";
            else if(mazeElement == 0)
                ctx.fillStyle ="black";

            if (i== charX && j== charY ) 
                ctx.fillStyle = "green";
            drawRectangle(i,j,squeareSize,boardTopx,boardTopy)
        }
    }
}
function drawRectangle(i,j,squeareSize,boardTopx,boardTopy){
    let xOffset = boardTopx + i*squeareSize;
    let yOffset = boardTopy + j*squeareSize;
    ctx.fillRect(xOffset,yOffset,squeareSize,squeareSize);
}
window.onkeypress = function (e) {
    var key = e.key;
    switch(key){
        case"w":{
            if (charY === 0){
            return;
            }
            if(checkWalls(charY-1,charX)){
            charY-=1;
        }
            break;
        }
        case"a":{
            if (charX === 0){
            return;
            }
            if(checkWalls(charY,charX-1)){
            charX-=1;
            }
            break;
            
        }
        case"s":{
            if (charY === 10){
            return;
            }
            if(checkWalls(charY+1,charX)){
            charY+=1;
            }
            break;
        }
        case"d":{
            if (charX === 10){
            return;
            }if(checkWalls(charY,charX+1)){
            charX+=1;
            }
            break;
        }
    } 
    buildMaze();
}
function checkWalls(X,Y){
    return maze[X][Y]==1;

}

// canvas.width = 1000;
// canvas.height = 1000;
// const cellSide = 10;
// var ctx = canvas.getContext('2d');
// for (let i = 0; i < maze.length; i++) {
//     for (let j = 0; j < maze[i].length; j++) {
//         let x = j * cellSide;
//         let y = i * cellSide;
//         cellColor = '#E74C3C';
//         if (maze[i][j] === 1) cellColor = '#F1C40F';
//         ctx.beginPath();
//         ctx.fillStyle = cellColor;
//         ctx.fillRect(x, y, cellSide, cellSide);  
//     }
// }