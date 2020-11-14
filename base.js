class Base{
    constructor(x,y,width,height) {
     var base_options={
         restitution:0.8,
         friction: 1.0,
         density:1.0
     }
     this.body=Bodies.rectangle(x,y,width,height,base_options)
     World.add(world,this.body) 
     this.width=width
     this.height=height
    }
    display(){
    
     push ()
     fill ("red")
        rotate (this.body.angle)
        translate(this.body.position.x,this.body.position.y)
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
     pop ()
     
    }
 
 }