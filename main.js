
const mazeGame = (function (context) {
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
    let currentPosX= 0;
    let currentPosY= 0;

    const canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext("2d");
    buildMaze();

    function checkWin(){
        if(currentPosX === 9 && currentPosY === 9){
            alert("You won!!");
        }
    }
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

                if (i== currentPosX && j== currentPosY ) 
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
                if (currentPosY === 0){
                return;
                }
                if(checkWalls(currentPosY-1,currentPosX)){
                currentPosY-=1;
            }
                break;
            }
            case"a":{
                if (currentPosX === 0){
                return;
                }
                if(checkWalls(currentPosY,currentPosX-1)){
                currentPosX-=1;
                }
                break;
                
            }
            case"s":{
                if (currentPosY === 9){
                return;
                }
                if(checkWalls(currentPosY+1,currentPosX)){
                currentPosY+=1;
                }
                break;
            }
            case"d":{
                if (currentPosX === 9){
                return;
                }if(checkWalls(currentPosY,currentPosX+1)){
                currentPosX+=1;
                }
                break;
            }
        } 
        buildMaze();
        console.log("x:", currentPosX, "y:", currentPosY);
        checkWin();
    }
    function checkWalls(X,Y){
        return maze[X][Y]==1;

    }
})(this);

