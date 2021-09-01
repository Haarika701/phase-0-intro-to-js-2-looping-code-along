// Code your solutions in this file

function writeCards(names){
    let occasion = [];
    for(let i = 0; i< 3;i++){
        occasion.push(`Thank you, ${names[i]}, for the wonderful surprise gift!` );
    }
    return occasion;
}
function countDown(){
    let countup = 0;
while (countup < 11) {
  console.log(countup++);
}
}
countDown(11);