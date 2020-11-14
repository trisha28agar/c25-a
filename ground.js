class Ground{
 constructor(){
    var ground_options={
        isStatic:true
    }
this.ground=Bodies.rectangle(600,400,1200,10,ground_options)
World.add(world,this.ground)
this.width=1200
this.height=10
this.image=loadImage("sprites/ground.png")
 }
 display(){
push ()
  rectMode(CENTER)
   rect(600,400,this.width,this.height)
pop ()
 }
} 