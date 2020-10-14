var count = 1
var arr=["red","green","orange","violet","gold","purple","black","white","yellow","#242424","dodgerlue","navy","blue","indigo","cyan","magenta","olive"]
var ar = document.getElementsByClassName("k");
function changeTheme(){
if(count>0){
document.body.style.backgroundColor=arr[count];
var raa=Math.floor(Math.random()*20);
var ra=Math.floor(Math.random()*70);
for(i=0; i<ar.length;i++){ar[i].style.backgroundColor='rgba('+raa+ ','+ '0'+','+ra+','+ '0.5'+')';}count=count+1
if(count==17){count=1}}}
