class Ground{
 constructor(x,y,w,h){
   var prop={
     isStatic: true
   }
   this.body=Bodies.rectangle(x,y,w,h,prop);
   this.w=w;
   this.h=h;
   World.add(auWorld, this.body);
 }

 display(){
  var pos=this.body.position;
  rectMode(CENTER)
  rect(pos.x,pos.y,this.w,this.h);
 }
}
