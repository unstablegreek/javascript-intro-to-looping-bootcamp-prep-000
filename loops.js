function forLoop(array){
    for(let i=0;i<25;i++){
		if(i==1) {
 			array[i]="I am 1 string loop.";
        }
		else {
			array[i] = `I am ${i} strange loops.`;
        }
    }
    return array;
}
function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
