export function factoriel(i) { //i
  for (let ii = i - 1; ii != 0; ii--) {
    i *= ii;
  }
  return i
}
//factoriel itératif

export function concatPlus(s,i) { //s
  let ns = "";
  for(let j=0;j<i;j++)
  ns+=s
  return ns
}
//retourne i fois le s

export function maxMulArr(a) { //ia
  var b = [];
  for (var i = 0; i < a.length; i++) {
    a[i].sort((a, b) => b - a);
    b.push(a[i][0]);
  }
  return b;
}
//retourne la max de chaque array dans un array

export function filterObject({k}) {
  return (k)/2;
}

export function titleCase(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

export function point(...args) { //['',''] ou s,s,s
  let s = ['learning',...args,'is', 'fun'];
  return s;
}

export function alphabeticalOrder(sa) {
  sa.sort((s1,s2)=>s1 === s2 ? 0 : s1 > s2 ? 1 : -1)
  return sa
}

export function ascendingOrder(ia) {
  ia.sort((i1, i2)=> i1 - i2)
  return ia
}

export function diffArray(a1, a2) {
  return a1
    .concat(a2)
    .filter((s) => !a1.includes(s) || !a2.includes(s));
}