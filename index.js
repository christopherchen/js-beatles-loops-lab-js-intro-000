// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = facts.length;
  var arr = [];
  while(i > 0) {
    arr.push(`${facts[i]}!!!`);
  }
  return arr;
}