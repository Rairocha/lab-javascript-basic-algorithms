console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1='Raiana';
console.log(`The driver's name is ${hacker1}`)

let hacker2='Gatinha';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);}
else if (hacker1.length<hacker2.length){console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);}
else{console.log(` Wow, you both have equally long names, ${hacker1.length} characters!`);}

// Iteration 3: Loops

let hacker1Upper= ''
for(i=0;i<hacker1.length;i++){
  hacker1Upper+=' '+hacker1[i].toUpperCase()
}
console.log(hacker1Upper.slice(1));

let hacker2Reverse= ''
for(i=hacker2.length-1;i>=0;i--){
  hacker2Reverse+=hacker2[i]
}
console.log(hacker2Reverse);

if (hacker1.toUpperCase()>hacker2.toUpperCase()){
  console.log(`The driver's name goes first.`);
}
else if (hacker1.toUpperCase()<hacker2.toUpperCase()){
  console.log(`Yo, the navigator goes first, definitely.`);
}
else {console.log(`What?! You both have the same name?`)}
// Bonus 1 

let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut mattis est. Aenean est metus, lacinia a venenatis in, sodales at lacus. Fusce pulvinar orci eu ante auctor dictum. Suspendisse eu sem a nisi rutrum tristique ac sed lacus. Sed convallis consequat maximus. Pellentesque nibh lacus, imperdiet ut feugiat eu, posuere non risus. Ut quis nunc eu felis gravida consequat. Quisque porttitor orci dolor, ac luctus odio mollis eget. Maecenas elementum placerat tellus id tincidunt. Nullam mollis fringilla consequat. Fusce non sapien non tellus luctus vehicula. Nunc sit amet enim eros. Phasellus nec quam in ipsum pellentesque placerat nec sed libero. Morbi lacinia augue eget diam pretium, et pellentesque sem facilisis. Quisque non sapien risus. Nullam sed mi tincidunt, ultricies orci sed, vehicula diam.

Nullam posuere sapien non mi egestas vestibulum. Proin convallis, lectus sit amet tincidunt malesuada, erat odio gravida sapien, quis bibendum neque justo a lorem. Maecenas tristique in enim vitae efficitur. Cras ligula nibh, pretium sed odio eu, posuere feugiat sapien. Praesent ut sapien risus. Vestibulum sed facilisis dui, sit amet rutrum erat. Curabitur eleifend scelerisque sem. Suspendisse mattis nec turpis sit amet varius. Morbi egestas nisi nunc, sed tristique enim imperdiet non. In sollicitudin arcu ut semper consequat. Aenean feugiat, orci sed tempus cursus, dolor ligula posuere purus, lacinia dictum augue massa nec nisi. Quisque auctor mauris eget molestie hendrerit.

Aenean non odio ac metus gravida mattis. Vivamus eu venenatis magna. Ut finibus venenatis commodo. Quisque in convallis turpis. Curabitur arcu nulla, consectetur nec ornare ullamcorper, varius nec massa. Donec consequat semper nunc sodales molestie. Curabitur tristique tempus ex, feugiat varius orci vestibulum vel. Aenean viverra fermentum sodales. Morbi dictum ligula ut tortor laoreet consequat.`;

let arrayLongText = longText.toLowerCase().replace(/[.,]/g,'').split(" ")
console.log(arrayLongText.length)

console.log(arrayLongText.filter(element=> element=='et').length)

// Bonus 2


function cleaner(phrase){
  return phrase.replace(/\W/g,'').toLowerCase();
}

function reverser(phrase){
  let reversedPhrase= '';
  for(i=phrase.length-1;i>=0;i--){
    reversedPhrase+=phrase[i];
  }
  return reversedPhrase ;}

function palindromeChecker(phraseToCheckClean){
  let sliceIndex=phraseToCheckClean.length/2;
  let firstPart=phraseToCheckClean.slice(0,Math.floor(sliceIndex));
  let secondPart=reverser(phraseToCheckClean.slice(Math.ceil(sliceIndex)));
  if(firstPart == secondPart){return 'Is a palindrome!'}
  else{return "It is not a palindrome"}
}


let phraseToCheck = "mpain a fdiceabeli dasp"

let phraseToCheckClean= cleaner(phraseToCheck);

console.log(palindromeChecker(phraseToCheckClean))
