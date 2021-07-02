class Polygon{
    constructor(){
    this.body=Bodies.polygon(100,200,5,20);
    World.add(world,this.body);
    polygon_img=loadImage("polygon.png");
    }
    display(){
        imageMode(CENTER);
        image(polygon_img,this.body.position.x,this.body.position.y,40,40);
    }
}