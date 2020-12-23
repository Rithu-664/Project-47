class Impostor extends BaseClass {
  constructor(x, y){
    super(x,y,70,70);
    this.image = loadImage("Red Among Us.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 4){
    super.display();
   }
   else{
     World.remove(auWorld, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 100, 100);
     pop();
   }
   
 }



};
