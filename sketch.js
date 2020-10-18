//상범 변수

let vertical = false
let horizontal = false
let jumpCount = 3
let jump = false
let jumpTime = 0
let life = 3
let collide = false
let dead = false
let power = false
let arraycount = 0

//승헌 변수
let spritesheet;

let playerindex = 0
let enemyindex = 0
let deathindex = 0

let front_p = []
let left_p = []
let right_p = []
let death_p = []

let move_e= []
let jump_e = []
let hang_e = []
let fall_e = []
let bottom_e = []
let death_e = []


let move_t= []
let jump_t = []
let death_t = []

let move_w= []
let blinking_w = []

let timescore = 3

let resource = []

let musicstart = 0

let randomvalue;


//동아 변수

let backToDeath = 0;
let backToDeath2 = 0;
let deadtimer = 0
let gameOverTime = 0;
let score = 0;
let credit = 0;
let creditCounter = false;

const COIN = 1;
const FLOOR = 2;
const ENEMY = 3;

let characterLife = 3;

let enemyCount = 1;

let enemy1600 = 0;

let currentScene = MAIN_MENU;
let MainMenuScene = new MainMenu();
let PlayScene = new Play();
let GameOverScene = new GameOver();

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;

let x = 100;
let y = 100;



function setup() {
  masterVolume(1)
  createCanvas(600, 700);
  frameRate(60)
  textFont(font)
  textSize(20)
 makearray()
 sangbeom2() 
}

function draw() {
  background(0)
      push()
      fill('lightgreen')
  text("CREDIT : ", 50, height - 10)
  text(credit, 250, height - 10)
      pop()


  //stage manage
  //.draw() 안의 mainmenu play game over 등의 글자 지우기
  switch (currentScene) {
  case MAIN_MENU:
    MainMenuScene.update()
    MainMenuScene.draw()  

    break;
  case PLAY:
      musicstart += 1
      if(musicstart >= 280){
    odd_stage.setVolume(0.1)}
      
    PlayScene.update()
    PlayScene.draw()
    creditCounter = true;
  
//적 잡아먹는 점수, 적 한테 잡히는 것
switch(power) {
  case false :
    enemyCount = 1;
    count1 = 0;
      count2 = 0;
      count3 = 0;
      count4 = 0;
      count5 = 0;
      count6 = 0;
    //캐릭터는 죽음 + 모션 추가하기
    if(collide == true) {
      deadtimer ++
      reset()
    }
    if(characterLife == -1) {
    currentScene = GAME_OVER;
    }
    break;
    
    case true :
      backToDeath++
    if(backToDeath > 600) {
      enemyCount = 1;
      power = false;
      backToDeath = 0;
      
    }
    if(e1.collide == true) {
      count1 ++;
      if(enemyCount == 1) {
        if(count1 < 2) {
          enemyCount += 1;
          console.log('hello')
          score = score + 200
          count1 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count1 <=1 ) {
          score = score + 400;
          enemyCount +=1;
          count1 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count1 <=1 ) {
          score = score + 800;
          enemyCount +=1;
          count1 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count1 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count1 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count1 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }  
    if(e2.collide == true) {
      count2 ++;
      if(enemyCount == 1) {
        if(count2 < 2) {
          enemyCount +=1;
          console.log('hello')
          score = score + 200
          count2 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count2 <=1 ) {
          score = score + 400;
          enemyCount +=1;
          count2 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count2 <=1 ) {
          score = score + 800;
          enemyCount +=1;
          count2 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count2 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count2 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count2 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }
    if(e3.collide == true) {
      count3 ++;
      if(enemyCount== 1) {
        if(count3 < 2) {
          enemyCount +=1;
          console.log('hello')
          score = score + 200
          count3 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count3 <= 1 ) {
          score = score + 400;
          enemyCount +=1;
          count3 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count3 <= 1 ) {
          score = score + 800;
          enemyCount +=1;
          count3 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count3 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count3 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count3 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }
    if(e4.collide == true) {
      count4 ++;
      if(enemyCount == 1) {
        if(count4 < 2) {
          enemyCount += 1;
          console.log('hello')
          score = score + 200
          count4 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count4 <=1 ) {
          score = score + 400;
          enemyCount +=1;
          count4 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count4 <=1 ) {
          score = score + 800;
          enemyCount +=1;
          count4 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count4 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count4 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count4 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }
    if(e5.collide == true) {
      count5 ++;
      if(enemyCount == 1) {
        if(count5 < 2) {
          enemyCount += 1;
          console.log('hello')
          score = score + 200
          count5 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count5 <= 1 ) {
          score = score + 400;
          enemyCount +=1;
          count5 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count5 <= 1 ) {
          score = score + 800;
          enemyCount +=1;
          count5 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count5 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count5 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count5 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }
    if(e6.collide == true) {
      count6 ++;
      if(enemyCount == 1) {
        if(count6 <2) {
          enemyCount += 1;
          console.log('hello')
          score = score + 200
          count6 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count6 <=1 ) {
          score = score + 400;
          enemyCount +=1;
          count6 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count6 <=1 ) {
          score = score + 800;
          enemyCount +=1;
          count6 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count6 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count6 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count6 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }
    if(se1.collide == true) {
      count7 ++;
      if(enemyCount == 1) {
        if(count7 <2) {
          enemyCount += 1;
          console.log('hello')
          score = score + 200
          count7 = 50;
        }
      }
      if(enemyCount == 2) {
        if(count7 <=1 ) {
          score = score + 400;
          enemyCount +=1;
          count7 = 50;
        }
      }
      if(enemyCount == 3) {
        if(count7 <=1 ) {
          score = score + 800;
          enemyCount +=1;
          count7 = 50;
        }
      }
      if(enemyCount == 4) {
        if(enemy1600 !=3) {
          if(count7 <2) {
            score = score + 1600;
            enemy1600 +=1;
            count7 = 50;
          }
        } else if(enemy1600 == 3) {
          if(count7 <2) {
            score = score + 3200;
    
          }
        }
      }
      
    }      
    
    break;  
    }   
      
    break;
    
  case GAME_OVER:
    gameOverTime ++ ;
      if(gameOverTime > 180) {
        currentScene = MAIN_MENU;
        creditCounter = false;
        gameOverTime = 0;
      }
    GameOverScene.update()
    GameOverScene.draw()
      
    break;
}

}



function keyTyped() {
  if (jumpCount > 0 && jump == false && (e1.dead1 == false || e2.dead1 == false || e3.dead1 == false || e4.dead1 == false || e5.dead1 == false || e6.dead1 == false || se1.dead1 == false || e1.dead2 == false || e2.dead2 == false || e3.dead2 == false || e4.dead2 == false || e5.dead2 == false || e6.dead2 == false || se1.dead2 == false)) {
    randomvalue = floor(random(0, 3))
    if (key === 's') {
      jumpCount -= 1
      jump = true
//       if(currentScene == PLAY){
        
//       }
    }
  }
  if (key === 'a') {
    power = false
  }
  if (key === 'd') {
    power = true;
  }
  if (key === 'x') {
    currentScene = GAME_OVER
  }
}

function keyPressed() {
  if(keyCode == 16){
    if(currentScene == MAIN_MENU){
      insert_coin.setVolume(0.1)
    insert_coin.play()
    credit +=1;}
  }
  if(keyCode == 13 && credit != 0 && creditCounter == false) {
    start.setVolume(0.1)
    start.play()
    odd_stage.setVolume(0)
    odd_stage.loop()
     currentScene = PLAY;
    credit -=1;
    
    
  }
  
  
}
function reset(){
  if (deadtimer >= 200) {
    deathindex = 0
 dead = false
 arraycount = 0
 c1.x = 300
 c1.y = 620
 c1.animation = front_p
 e1.x = 50
 e1.y = 100
 e1.animation = move_e
 e1.left = false
 e1.right = false
 e1.up = false
 e1.down = true
 e1.leftturn = false
 e1.rightturn = false
 e1.upturn = false
 e1.downturn = false
 e1.goingup = false
 e1.goingdown = true
 e1.state = 0
 e1.imagex = 0
 e1.imagey = 0
 e1.fall = 5
 e1.collide = false
 e1.dead1 = false
 e1.dead2 = false
 e1.deadcount = 0
 e1.count = false
 e1.revive = floor(random(0, 200))
 e1.revivecount = 0
 e2.x = 150
 e2.y = 100
 e2.animation = move_e
 e2.left = false
 e2.right = false
 e2.up = false
 e2.down = true
 e2.leftturn = false
 e2.rightturn = false
 e2.upturn = false
 e2.downturn = false
 e2.goingup = false
 e2.goingdown = true
 e2.state = 0
 e2.imagex = 0
 e2.imagey = 0
 e2.fall = 5
 e2.collide = false
 e2.dead1 = false
 e2.dead2 = false
 e2.deadcount = 0
 e2.count = false
 e2.revive = floor(random(0, 200))
 e2.revivecount = 0
 e3.x = 250
 e3.y = 100
 e3.animation = move_e
 e3.left = false
 e3.right = false
 e3.up = false
 e3.down = true
 e3.leftturn = false
 e3.rightturn = false
 e3.upturn = false
 e3.downturn = false
 e3.goingup = false
 e3.goingdown = true
 e3.state = 0
 e3.imagex = 0
 e3.imagey = 0
 e3.fall = 5
 e3.collide = false
 e3.dead1 = false
 e3.dead2 = false
 e3.deadcount = 0
 e3.count = false
 e3.revive = floor(random(0, 200))
 e3.revivecount = 0
 e4.x = 350
 e4.y = 100
 e4.animation = move_e
 e4.left = false
 e4.right = false
 e4.up = false
 e4.down = true
 e4.leftturn = false
 e4.rightturn = false
 e4.upturn = false
 e4.downturn = false
 e4.goingup = false
 e4.goingdown = true
 e4.state = 0
 e4.imagex = 0
 e4.imagey = 0
 e4.fall = 5
 e4.collide = false
 e4.dead1 = false
 e4.dead2 = false
 e4.deadcount = 0
 e4.count = false
 e4.revive = floor(random(0, 200))
 e4.revivecount = 0
 e5.x = 450
 e5.y = 100
 e5.animation = move_e
 e5.left = false
 e5.right = false
 e5.up = false
 e5.down = true
 e5.leftturn = false
 e5.rightturn = false
 e5.upturn = false
 e5.downturn = false
 e5.goingup = false
 e5.goingdown = true
 e5.state = 0
 e5.imagex = 0
 e5.imagey = 0
 e5.fall = 5
 e5.collide = false
 e5.dead1 = false
 e5.dead2 = false
 e5.deadcount = 0
 e5.count = false
 e5.revive = floor(random(0, 200))
 e5.revivecount = 0
 e6.x = 550
 e6.y = 100
 e6.animation = move_e
 e6.left = false
 e6.right = false
 e6.up = false
 e6.down = true
 e6.leftturn = false
 e6.rightturn = false
 e6.upturn = false
 e6.downturn = false
 e6.goingup = false
 e6.goingdown = true
 e6.state = 0
 e6.imagex = 0
 e6.imagey = 0
 e6.fall = 5
 e6.collide = false
 e6.dead1 = false
 e6.dead2 = false
 e6.deadcount = 0
 e6.count = false
 e6.revive = floor(random(0, 200))
 e6.revivecount = 0
 se1.x = 550
 se1.y = 620
 se1.animation = move_t
 se1.imagex = 0
 se1.imagey = 0
 se1.follow = false
 se1.up = false
 se1.down = false
 se1.left = false
 se1.right = false
 se1.lapcount = 0
 se1.followtimer = 0
 se1.following = 0
 se1.arrayfollow = false
 se1.followx = 0
 se1.followy = 0
 se1.history = []
 se1.dead = false
 se1.dead2 = false
 se1.fall = 5
 se1.deadcount = 0
 se1.count = false
 se1.collide = false
 collide = false
 deadtimer = 0
            }
  
}