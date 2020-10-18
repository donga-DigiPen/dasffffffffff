function preload(){

  spritedata = loadJSON('sprite/enemy.json')
  spritedata2 = loadJSON('sprite/character.json')
  spritedata3 = loadJSON('sprite/tracer.json')
  spritedata4 = loadJSON('sprite/resource.json')
  spritedata5 = loadJSON('sprite/weak.json')
  spritesheet = loadImage('sprite/Sprites1.png');
  mapdata = loadImage('sprite/map(no insert).png')
  font = loadFont('PressStart2P-Regular.ttf')
  mainmenu = loadImage('menu(no insert).png')
  
  attack = loadSound('sound/attack.m4a')
  chance_attack = createAudio('sound/chance attack.mp3')
  stage_clear = loadSound('sound/clear.mp3')
  insert_coin = loadSound('sound/coin1.mp3')
  death = loadSound('sound/death.m4a')
  fall = loadSound('sound/fall.wav')
  game_over = loadSound('sound/game over.mp3')
  get_contents = loadSound('sound/get contents1.m4a')
  odd_stage = loadSound('sound/odd stage.mp3')
  siren = loadSound('sound/siren.m4a')
  start = loadSound('sound/start.mp3')
}