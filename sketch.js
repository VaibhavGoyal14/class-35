var ball;
var database;
var position;
var hyponotic;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    hyponotic = createSprite(250,250,10,10);
    hyponotic.shapeColor = "red";
    var hyponoticPosition = database.ref("ball/position");
    hyponoticPosition.on("value",readPosition,showError);

}

function draw(){
    background("white");
   if(position !== undefined){ if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    hyponotic.x = position.x;
    hyponotic.y = position.y; 
}
function showError(){
    console.log("error in showing database");
}
function writePosition(x,y){
database.ref("ball/position").set({'x':position.x+x,'y':position.y+y});

}
