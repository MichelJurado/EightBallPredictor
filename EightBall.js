var userName="Michel"
var userQuestion="WIll I be rich?"
randomNumber= Math.floor(Math.random() * 8);
eightBall=""

userName ? console.log(`Hello, ${userName}`): console.log("Hello!");
console.log(userQuestion);


switch(randomNumber){
  case 1:
  eightBall = 'It is certain';
  console.log(eightBall);
  break;
  case 2:
  eightBall = 'It is decidedly so';
  console.log(eightBall);
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  console.log(eightBall);
  break;
  case 4:
  eightBall = 'Cannot predict now';
  console.log(eightBall);
  break;
  case 5:
  eightBall = 'Do not count on it';
  console.log(eightBall);
  break;
  case 6:
  eightBall = 'My sources say no';
  console.log(eightBall);
  break;
  case 7:
  eightBall = 'Outlook not so good';
  console.log(eightBall);
  break;
  case 8:
  eightBall = 'Signs point to yes';
  console.log(eightBall);
  break;
} 