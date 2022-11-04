var page = document.querySelector('.menu');
var canvas = document.querySelector('canvas');
const ctx= canvas.getContext('2d');
// var data = {medium:15}


//pages
var startPage = new Menu({title:"Snake Game",options:["Start","Settings","About"]});
var settingsPage = new Menu({title:"Settings",options:["Easy","Medium","Hard"]})


const snake = new Snake();
document.addEventListener('DOMContentLoaded',()=>{
    setOptions(startPage)
    page.children[1].addEventListener('click',(e)=>{
      getMenu(e);
    });
    //seting local storage
    // localStorage.setItem('difficulty',JSON.stringify(data));


 });
function getMenu(e){
    switch (e.target.textContent) {
        case 'Start':
            startGame();
            break;
        case 'Settings':
             setOptions(settingsPage);
            break;
        case 'About':
            // setOptions(settingsPage);
            break;
        case 'Hard':
              snake.difficulty=20;
              setOptions(startPage);
            break;
        case 'Medium':
              snake.difficulty=12
              setOptions(startPage);
            break;  
        case 'Easy':
              snake.difficulty=8
              setOptions(startPage);
            break;                 
    } 
}
function startGame(){
    page.style.display = "none";
    document.addEventListener('keydown',(e)=>{
            switch (e.keyCode) {
                case 37:
                    snake.velocity.x=-1;snake.velocity.y=0;
                    break;
                case 38:
                    snake.velocity.x=0;snake.velocity.y=-1;
                    break;
                case 39:
                    snake.velocity.x=1;snake.velocity.y=0;
                    break;
                case 40:
                    snake.velocity.x=0;snake.velocity.y=1;
                    break;  
                case 27:
                if(confirm('Are u sure u want to exit game?')){
                   location.reload();
                }
                   
                    break;      
            }
    });  
    setInterval(()=>snake.game(),1000/snake.difficulty);
}
function setOptions(obj){
    page.children[0].textContent = obj.title;
    page.children[1].innerHTML = obj.setMenu();
}