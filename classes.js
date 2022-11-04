class Menu{
    constructor({title, options,message}) {
        this.title = title;
        this.options = options;
        this.message = message;
        
    }
   setMenu(){
    var menu = ''
        for(var option of this.options){
            menu += `<li>${option}</li>`
        }
        return menu
    }
    setInfo(){
        var info = 
        ` <h1>${this.title}</h1>
          <p>${this.message}</p>
        `
         return info;
    }
     
}

class Snake {
    
    constructor(){
     //tile count
     this.tc = this.gs = 20,
     //snake position
     this.position = {
         x:5,
         y:5
     },
     //snake velocity
     this.velocity ={
         x:0,
         y:0
     },
     //apple default position
     this.apple = {
         x:15,
         y:15
     },
     
     this.tail = 5,
     this.trail=[]
     this.difficulty = 12;
    }

 
    game(){
     this.position.x += this.velocity.x;
     this.position.y += this.velocity.y;
     if(this.position.x<0){
         this.position.x=this.tc-1;
     }
     if( this.position.x>this.tc-1){
         this.position.x=0;
     }
     if( this.position.y<0){
         this.position.y=this.tc-1;
     }
     if( this.position.y>this.tc-1){
         this.position.y=0;
     }
     //board
     ctx.fillStyle = 'black';
     ctx.fillRect(0,0,canvas.width,canvas.height);
     //player
     ctx.fillStyle = 'lime'
     for(var i=0; i<this.trail.length;i++){
         ctx.fillRect(this.trail[i].x*this.gs,this.trail[i].y*this.gs,this.gs-2,this.gs-2);
         if(this.trail[i].x==this.position.x && this.trail[i].y==this.position.y){
            this.tail=5
         }
     }
      this.trail.push({x:this.position.x,y:this.position.y});
      while(this.trail.length>this.tail){
         this.trail.shift();
      }
      this.createApple();
      
    }
 
    createApple(){
     if(this.apple.x==this.position.x && this.apple.y==this.position.y){
         this.tail++;
         this.apple.x=Math.floor(Math.random()*this.tc);
         this.apple.y=Math.floor(Math.random()*this.tc);
      } 
     ctx.fillStyle = 'red'
     ctx.fillRect(this.apple.x*this.gs,this.apple.y*this.gs,this.tc-2,this.tc-2)
    };
 
 }