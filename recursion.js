export function sumFirst(ia, i) { //i
  if (i > 0) {
    return sumFirst(ia, i - 1) + ia[i - 1];
  }
  return 0;
}
//somme des i premiers

export function arrayInt(i) { //ia
  if (i > 0) {
    let ia = arrayInt(i - 1);
    ia.unshift(i);
    return ia;
  }
  return [];
}
//array de i jusqu'à zéro

export function arrayMinMax(i1, i2) { //ia
  if (i2 >= i1) {
    let ia = arrayMinMax(i1, i2 - 1);
    ia.push(i2);
    return ia;
  }
  return []; 
}
//array de i à i

export function factorial(i) { //i
  if (i > 0) {
    return i * factorial(i - 1);
  }
  return 1;
}
//i*i-1*i-1*i-1...


export function biggestWord(sa) { //i
  let i = 0;
  for (let ii = 0; ii < sa.length; ii++) {
    if (sa[ii].length > i) {
      i = sa[ii].length; //tampon loop
    }
  }
  return i;
}
//retourne la taille du plus grand mot

export function add(x) {
  return function(y){
    return function(z){
      return x+y+z
    }
  }
}