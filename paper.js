class Paper {
    constructor(x,y,width,height){
    var opitions={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    var paper = createSprite(x,y,width,height);
    paper = Matter.Body; 
    Matter.Bodies.circle(x,y,radius, [opitions], {paper});
    IsPressed();
    }
} 
function IsPressed () {
    if (keyDown === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
    }
}

