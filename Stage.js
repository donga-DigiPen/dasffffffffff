const MAIN_MENU = 0;
const PLAY = 1;
const GAME_OVER = 2;
const BONUS_STAGE = 3;


class MainMenu{
  constructor() {
    
  }
  
  update(){

  }
  
  draw(){
    text("mainMenu",width/2,height/2)
    
      image(mainmenu, 13, 22, 575, 640) 
  }
}

class Play {
  constructor(){
    
  }
  
  update(){
    
  }

  draw(){
    push()
    fill('lightgreen')
  text("JUMP", 365, 690)
    pop()
  rectDraw(); 
  sangbeom();
  image(mapdata, 13, 22, 575, 640) 

  c1.draw()
  c1.update()
  
  coinDraw();  

  e1.draw()
  e2.draw()
  e3.draw()
  e4.draw()
  e5.draw()
  e6.draw()
  e1.update()
  e2.update()
  e3.update()
  e4.update()
  e5.update()
  e6.update()
  se1.draw()
  se1.update()
  
  if(life >= 3){
  image(resource[0], 50, 60, 17, 17)
  }
  if(life >= 2){
  image(resource[0], 70, 60, 17, 17)}
  image(resource[1], 530, 60, 17, 17)

  if(jumpCount == 3){
  image(resource[2], 510, 670, 17, 17)
  }
  if(jumpCount >= 2){
  image(resource[2], 490, 670, 17, 17)}
  if(jumpCount >= 1){
  image(resource[2], 470, 670, 17, 17)
  } 

    push()
    fill('white')
    textAlign(RIGHT)
    text(score,170,65);
  pop()
    
  }
}

class GameOver{
  constructor(){
    
  }
  
  update(){
    
  }
  
  draw(){
    text("GameOver",width/2,height/2)
  }
}