// USING LOOPS IN JAVASCRIPT

// USING WHILE LOOPS
var i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

/*
99 Bottles of beer on the wall, 99 Bottles of beer.
Take One down and pass it around, 98 Bottles of beer on the wall.
*/
function bottles() {
  let com = 99;
  var bot = "bottles";
  while (com > 0) {
    while (com > 1) {
      let info = `${com} ${bot} of beer on the wall, ${com--} ${bot} of beer.`;
      if (com === 1) {
        bot = "bottle";
      }
      let info2 = `Take One down and pass it around, ${com} ${bot} of beer on the wall. 
    `;

      console.log(`${info}\n${info2}`);
    }
    if (com === 1) {
      bot = "bottle";
      // com = "Last";
    }
    let info = `${com} ${bot} of beer on the wall, ${com--} ${bot} of beer.\nTake One down and pass it around, No more ${bot} of beer on the wall.`;
    console.log(info);
  }
}
// bottles();

//  Making code shorter
function beer() {
  let com = 99;
  var bot = "bottles";
  while (com >= 1) {
    let info = `${com} ${bot} of beer on the wall, ${com--} ${bot} of beer.`;
    let info2 = "";
    if (com === 0) {
      bot = "bottle";
      info2 = `Take One down and pass it around, No more  ${bot} of beer on the wall.`;
    }
    if (com === 1) {
      bot = "bottle";
      // com = "last";
    }
    info2 = `Take One down and pass it around, ${com} ${bot} of beer on the wall.
    `;
    console.log(`${info}\n${info2}`);
  }

  // let info = `${com} ${bot} of beer on the wall, ${com--} ${bot} of beer.\nTake One down and pass it around, No more ${bot} of beer on the wall.`;
  // console.log(info);
}
