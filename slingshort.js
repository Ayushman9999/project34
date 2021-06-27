class Slingshort{
constructor(bodyA,pointB){

    var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffress: 0.01,
    length: 10

   }
    
  this.pointB=pointB;
  this.slingshort = Constraint.create(options);
  World.add(world,this.Slingshort);

 }

fly(){
 this.slingshort.bodyA=null;

}

Launch(bodyA){
 this.slingshort.bodyA=bodyA; 
}

display(){



  }

}