import * as F from './fonction.js'; //{}
import * as R from './recursion.js'; //{}

const ia = [1,2,3,4,5];
const mia = [[1, 2, 6, 5], [49, 8, 7], [99]];
const sa = ["Banana", "Orange", "Apple", "Mango"];
const ma = [true, false, 24, '0', 0];
const [,...nsa] = sa; //retire les premiers index
const am = i => i % 2 == 0; //array méthode
const i = 5;
const g = 10;
const p = 2;
const d = "1011";
const base = 2;
const s = "int arr, str arr, int, gros, petit, str!";
//peut être un int ou un regex ou ""
const t = '          trim            ';
const f = 'arr';
const r = 'replace'
const c = 'c';
const e = ' ';
const o = {
  "f": "Apple",
  "c": ["Red", "Yellow"],
  "k": 500
};
delete o["f"]; //[10]
o["f"] = "Apple";

const ao = [
  {
    "f": "Apple",
    "c": ["Red", "Green"],
    "k": 500
  },
  {
    "f": "Banana",
    "c": ["Brown", "Yellow"],
    "k": 300
  },
];
console.log(ao[0].f)
const fmf = ao
  .filter(ao=>ao.k>400) //return ao
  .map(ao=>({ 
    forme: ao["f"]  
  }));
const rf = ao
  .reduce((no, ao) => {    
    no[ao.name] = ao.k;    
    return no;  
  }, {});
const tf = ma.filter(Boolean) //ma
const ef = ia.every((v)=> v<i); //b
const sf = ia.some((v)=> v<i); //b
const fif = ia.findIndex((v)=> v<i); //i

const a = "f";
const {k:kilo} = o; 
//console.log(kilo); console.log(`${o.k}`);

function Oc(oc) { //initialise les variables
  this.oc = oc; //définie en private
  this.getFoc = function() {      
    return this.oc;    
  }
}
Oc.prototype["oc2"]="oc2"; //créer des variables
Oc.prototype = {   
  //initialise le constructeur et les fonction
  constructor: Oc,       
  foc: function() {      
    console.log(getFoc());    
  }
};
let ooc = new Oc("oc");
//héritage function Dog() {}
//Dog.prototype = Object.create(Animal.prototype);  

class C {
  constructor(f) { 
    this.ff = f;
  }
  get f() {
    return this.ff;
  }
  set f(f) {
    this.ff = f;
  }
}
const cl = new C('Apple');
cl.f = "Banana";

(function(){
  console.log("First");  
})(); //anonyme exécuter immédiatement
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
console.log(parseInt(d, base));
console.log(s.length);

console.log(ia.find(am));
console.log(s.indexOf(f));
console.log(s.lastIndexOf(f, g));
console.log(s.charCodeAt(i));
console.log(F.factoriel(i));
console.log(F.filterObject(o));
console.log(Math.floor(Math.random() * 10)); 
//floor arrondir
console.log(Math.floor(Math.random() * (49 - 5 + 1)) + 5); //min max
console.log(R.sumFirst(ia,i));
console.log(R.factorial(i));
console.log(R.biggestWord(sa)); 
console.log(R.add(i)(i)(i));
//SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
//prompt(s) alert(s)
console.log(typeof i);
console.log(i.toString()); 
console.log(t.trim());
console.log(s.toLowerCase());
console.log(s.slice(0,3)); //s.length, v.length

console.log(s.replace(f, r));
console.log(s.concat(f));
console.log(s.substring(p, g));
console.log(sa.join(e));
console.log(F.concatPlus(c,i));
console.log(F.titleCase(s));
//CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
console.log(String.fromCharCode(i))
console.log(s.charAt(i));
console.log(s[s.length - 1]);
console.log(c.padEnd(i, c)); //ajoute i c
console.log(c.padStart(i, c)); //ajoute i c
//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
console.log(s.endsWith(f));
console.log(s.includes(f));
console.log(s.startsWith(f));
console.log(/ar./.test(s));
console.log(o.hasOwnProperty(a));
console.log(cl instanceof C)
console.log(Oc.prototype.isPrototypeOf(ooc))
//Object.prototype.isPrototypeOf(Oc.prototype); lui-même
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
console.log(i.toFixed(p)); 
console.log(i.toPrecision(p)); 
//EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
console.log(escape(s)); //unescape
console.log(encodeURI(s)); //decodeURI
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
console.log(R.arrayInt(i));
console.log(R.arrayMinMax(p,g)); 
console.log(F.ascendingOrder(ia));
//SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
console.log(s.split(e));
console.log(s.match(f));//(/[^a-n0-9]/gi)(/<.*?>/)(/a+/)
//* once or not or multiple, + once or multiple, ? once
console.log(sa.reverse());
console.log(F.point(s,s));
console.log(F.alphabeticalOrder(sa));
console.log(F.diffArray(sa,sa));

//VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
//sa.unshift(r):i ajout premier  replace
//sa.push(r):i ajout dernier
//F.maxMulArr(mia):ia sort les array
//sa.shift():s efface premier
//sa.pop():s efface dernier
//sa.splice(i,i,r):sa de i à i+i|i+0, r~push
//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
//ternary return 5==0 ? true : false;
//tampon, remet à zéro, if j==i, dec, inc, count
//définition
//while(!((sc.equals("a") && is < ir) ||  (sc.equals("b") && is > ir) )) {}
//access protected extends
//return variable du nom de la fonction
for(let i in o){
  console.log(i+" "+o[i]);
}

const one = () => 'one';
const two = () => 'two';
const relativeNumber = (fs) => {
  return fs();
};
console.log(relativeNumber(one));

const resp = async(e) => {
  await console.log(e)
}
resp(5).then(console.log(5))