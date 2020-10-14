const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("score");//设定
const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const VACANT = "#202028"; //设置格子大小与颜色等
function drawSquare(x,y,color){	ctx.fillStyle = color;
								ctx.fillRect(x*SQ,y*SQ,SQ,SQ);
								ctx.strokeStyle = "black";
								ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);}//设置背景方格
let board =[];//将格子中的参数设置为0/空
for( r = 0; r <ROW; r++){board[r] = [];
						for(c = 0; c < COL; c++){board[r][c] = VACANT;}}//把格子设置为背景色
function drawBoard(){for( r = 0; r <ROW; r++){for(c = 0; c < COL; c++){drawSquare(c,r,board[r][c]);}}}//画背景方格
drawBoard();//执行进行画背景格子
const PIECES = [[Z,"red"],[S,"green"],[T,"yellow"],[O,"blue"],[L,"purple"],[I,"cyan"],[J,"#FF7700"]];//设置各个方块的颜色
function randomPiece(){let r = randomN = Math.floor(Math.random() * PIECES.length) 
					   return new Piece( PIECES[r][0],PIECES[r][1]);}
let p = randomPiece();//随机生成设定好的7种方块，这些方块的样式在另一页的js
function Piece(tetromino,color){this.tetromino = tetromino;
								this.color = color;//设置方块和方块填色
								this.tetrominoN = 0; // 设置从第一排色块开始
								this.activeTetromino = this.tetromino[this.tetrominoN];
								this.x = 3;
								this.y = -2;}//设置方块大小，x,y分别为横竖的位置
Piece.prototype.fill = function(color){for( r = 0; r < this.activeTetromino.length; r++){
									   for(c = 0; c < this.activeTetromino.length; c++){if( this.activeTetromino[r][c]){
										   drawSquare(this.x + c,this.y + r, color);}}}}//为占用的格子也就是方块填上对应颜色在对应位置							
Piece.prototype.draw = function(){this.fill(this.color);}
Piece.prototype.unDraw = function(){this.fill(VACANT);}//画一行填一行方块颜色以达到方块移动的效果
Piece.prototype.moveDown = function(){if(!this.collision(0,1,this.activeTetromino)){this.unDraw();this.y++;this.draw();}//让方块往下移动，和上一行让方块移动是同样方法。
else{this.lock();p = randomPiece();//当方块坠落到底时锁定方块同时生成新的方块
     let audio = new Audio();audio.src="drop.mp3";audio.play();}}//添加音效，当方块坠落到底时播放
Piece.prototype.moveRight = function(){if(!this.collision(1,0,this.activeTetromino)){this.unDraw();this.x++;this.draw();}}//让方块往右移动，以此类推一样方法达到移动效果
Piece.prototype.moveLeft = function(){if(!this.collision(-1,0,this.activeTetromino)){this.unDraw();this.x--;this.draw();}}//让方块往左移动
Piece.prototype.rotate = function(){let nextPattern = this.tetromino[(this.tetrominoN + 1)%this.tetromino.length];let kick = 0;
						if(this.collision(0,0,nextPattern)){if(this.x > COL/2){kick = -1;}else{kick = 1;}}//让方块向左或右转变幻样式
if(!this.collision(kick,0,nextPattern)){this.unDraw();this.x += kick;
										this.tetrominoN = (this.tetrominoN + 1)%this.tetromino.length;
										this.activeTetromino = this.tetromino[this.tetrominoN];
										this.draw();}}//把改变后的样式画出来
let score = 0;//设置开始分数为0
Piece.prototype.lock = function(){for( r = 0; r < this.activeTetromino.length; r++){
								  for(c = 0; c < this.activeTetromino.length; c++){
								  if( !this.activeTetromino[r][c]){continue;}//锁定方块并继续
								  if(this.y + r < 0){alert("Game Over!!!Reload the page to restart the game!");//检查是否失败并且跳出警示窗
								  gameOver = true;break;}//如果方块被锁定在顶端显示失败通知并执行失败的动作
								  board[this.y+r][this.x+c] = this.color;}}//锁定失败后的色块
for(r = 0; r < ROW; r++){let isRowFull = true;for( c = 0; c < COL; c++){isRowFull = isRowFull && (board[r][c] != VACANT);}
if(isRowFull){let audioName = new Audio();audioName.src="d.mp3";audioName.play();//添加音效，当一行方格被填满方块时播放
for( y = r; y > 1; y--){for( c = 0; c < COL; c++){board[y][c] = board[y-1][c];}}//当一行方格被填满方块时该行往下移动上面行也一起往下移动
							for( c = 0; c < COL; c++){
							board[0][c] = VACANT;}//当一行被消除拥有色块的最上一行也一起消除
							score += 10;}}//计算新分数，每消除一行+10分
							drawBoard();//更新消除后的背景格
							scoreElement.innerHTML = score;}//更新分数
Piece.prototype.collision = function(x,y,piece){for( r = 0; r < piece.length; r++){for(c = 0; c < piece.length; c++){
							if(!piece[r][c]){continue;}//如果色块没有碰触到别的色块就继续移动
							let newX = this.x + c + x;
							let newY = this.y + r + y;//更新色块移动后的位置
							if(newX < 0 || newX >= COL || newY >= ROW){return true;}//如果方块超出界限
							if(newY < 0){continue;}
							if( board[newY][newX] != VACANT){return true;}}}//检查方块接下来要移动的位置是否有其它方块
							return false;}
document.addEventListener("keydown",CONTROL);//监听键盘按键的指示，这行代码负责查探监听键盘指令然后传送到以下代码
function CONTROL(event){if(event.keyCode == 37){p.moveLeft();//如果键盘左键被触发时方块往左移动，这些数字键盘上固定的案件参数。当键盘案件触发左键就会发送三十七到js。//以下以此类推
						let audioName = new Audio();audioName.src="ah.mp3";audioName.play();}//添加音效，当键盘左键被触发时播放音效
						else if(event.keyCode == 38){p.rotate();//如果键盘上键被触发时方块旋转改变样式
						let audioName = new Audio();audioName.src="ah.mp3";audioName.play();}//添加音效，当键盘上键被触发时播放音效
						else if(event.keyCode == 39){p.moveRight();//如果键盘右键被触发时方块往右移动
						let audioName = new Audio();audioName.src="ah.mp3";audioName.play();}//添加音效，当键盘右键被触发时播放音效
						else if(event.keyCode == 40){p.moveDown();//如果键盘下键被触发时方块加速往下移动
						let audioName = new Audio();audioName.src="ah.mp3";audioName.play();}}//添加音效，当键盘下键被触发时播放音效
let dropStart = Date.now();//设定开始时间
let gameOver = false;//设定失败为错误
function drop(){let now = Date.now();//now=现在的时间
				let time = now - dropStart;//设置开始到现在已过的时间=现在-开始时间
				if(time > 440){p.moveDown();dropStart = Date.now();}//设置如果时间经过0.44秒方块自动往下一格，并且更新开始时间（一千为一秒
				if( !gameOver){requestAnimationFrame(drop);}}//如果还没有失败就继续请求随机生成新的方块
drop();//执行//完成



















