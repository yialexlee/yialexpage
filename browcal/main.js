var mod=document.getElementById("mod");
let audioName = new Audio();audioName.src="key.mp3";
function check(x){calc.txt.value+=x}
function equal(){calc.txt.value=eval(calc.txt.value)}
function sine(){calc.txt.value+=Math.sin(this.calc.txt.value);audioName.play();}
function cos(){calc.txt.value=Math.cos(this.calc.txt.value);audioName.play();}
function tan(){calc.txt.value=Math.tan(this.calc.txt.value);audioName.play();}
function log(){calc.txt.value=Math.log(this.calc.txt.value);audioName.play();}
function asine(){calc.txt.value=Math.sin(this.calc.txt.value);audioName.play();}
function acos(){calc.txt.value=Math.acos(this.calc.txt.value);;audioName.play();}
function atan(){calc.txt.value=Math.atan(this.calc.txt.value);audioName.play();}
function abs(){calc.txt.value=-(Math.abs(this.calc.txt.value));audioName.play();}
function checkPie(){calc.pie=calc.txt.value+="π";π=Math.PI;audioName.play();}
function clr(){calc.txt.value="";audioName.play();}
function ran(){calc.txt.value+="Rand";Rand=Math.random();audioName.play();}
function del(){calc.txt.value=calc.txt.value.substring(0,calc.txt.value.length*1-1);audioName.play();audioName.play();}
function exp(){calc.txt.value=this.calc.txt.value*this.calc.txt.value;;audioName.play();audioName.play();}
function cube(){var xyz=1/3;var c=this.calc.txt.value;calc.txt.value= Math.pow(c,xyz);audioName.play();}
function square(){var xyz=1/2;var c=this.calc.txt.value;calc.txt.value= Math.pow(c,xyz);audioName.play();}
function modulo(){calc.txt.value+="%";audioName.play();}
function cent(){calc.txt.value=this.calc.txt.value/100;audioName.play();}
function e(){calc.txt.value=Math.exp(this.calc.txt.value);audioName.play();}
function e(){calc.txt.value=Math.exp(this.calc.txt.value);audioName.play();}
function fact(){ans=this.calc.txt.value;var	som=1;arr=[];for(i=1; i<=ans; i++){arr.push(i);som*=i}calc.txt.value=som;audioName.play();}
function xinverse(){var xinv=this.calc.txt.value;calc.txt.value=Math.pow(xinv,-1);audioName.play();}
function timer(){calc.txt.disabled=false;audioName.play();}
function timer1(){calc.txt.disabled=true;audioName.play();}
function copy(){calc.copi.id= calc.txt.value;alert( calc.txt.value + ' is copied'  );audioName.play();}
function paste(){calc.txt.value+=calc.copi.id;audioName.play();}
function fixd(){calc.txt.value=eval(calc.txt.value).toFixed(4);audioName.play();}
function floor( ) {calc.txt.value=Math.floor(this.calc.txt.value);audioName.play();}
function ceil( ) {calc.txt.value=Math.ceil(this.calc.txt.value);audioName.play();}
function round(){calc.txt.value=Math.round(this.calc.txt.value);audioName.play();}