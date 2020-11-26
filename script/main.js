

const btnaorder = document.getElementById("aorder");
const btnorder = document.getElementById("order");

const curro = document.getElementById("curro");
const curoc = document.getElementById("curoc");

const tmanu = document.getElementById("teamanufact");
const packtype = document.getElementById("packtype");


const size = document.getElementById("size");
const extras = document.getElementById("extras");



let manufactt=null;
let mtotal=0;


let ntotal=0;
let total=0;

teamanufact.addEventListener("change",teabrand);
function teabrand(){
if (document.getElementById("DDIL").checked){
  manufactt=`Dilma Tea`
  mtotal = 1000;
}
if (document.getElementById("JJON").checked){
  manufactt=`Jones Tea`
  mtotal= 1500;
}
if (document.getElementById("GST").checked){
  manufactt=`George Steuart Tea`
  mtotal = 1000;
}
if (document.getElementById("MVT").checked){
  manufactt=`Malwatte Valley Plantations`
  mtotal = 2000;
}
if (document.getElementById("PST").checked){
  manufactt=`Prestige Ceylon Tea`
  mtotal = 1000;
}

curoc.innerText=`Current  Cost is  ${mtotal}`;
curro.innerText=`Your brand selected is ${manufactt} `
}


let pack;
let ptotal = 0;
packtype.addEventListener("change",packcost);
function packcost(){
if (document.getElementById("paperp").checked)
{

    pack=`Paper Pouches`
    ptotal=1000;
}
if (document.getElementById("tin").checked)
{
    pack=`Tins`
    ptotal=5000;
}
if (document.getElementById("bbg").checked)
{
    pack=`Bags`
    ptotal=2500;

}
curoc.innerText=`current cost is  ${ptotal+mtotal}`;
curro.innerText=`Your brand selected is ${manufactt}. Your package type is ${pack}`
}


let sizetotal;
let sizee;
let ttmanu=" ";
size.addEventListener("change",sizes);
function sizes(){
if (document.getElementById("sml").checked){
 sizetotal=1000;
sizee =`Small`
}
if (document.getElementById("medi").checked){
sizetotal=2500;
sizee =`Medium`
}
if (document.getElementById("lar").checked){
sizetotal=5000;
sizee =`Large`
}
total = total+ sizetotal;
curoc.innerText=`Current  Cost is  ${total}`;
ntotal=ntotal+total;
curro.innerText=`The brand you selected is ${manufactt}. Your package type is ${pack}.Your package size is ${sizee}.`;
ttmanu = ttmanu + " " + manufactt; 
}


const overc= document.getElementById("overc");
const overo = document.getElementById("overo");
btnaorder.addEventListener("click",overallorder);
function overallorder(){
overo.innerText=`The overall cost is ${total}.`
overc.innerText=`The tea manufacturers ordered are ${ttmanu}`
}


btnorder.addEventListener("click",reserv)
function reserv(){
 alert("Thanks for ordering"); 
curro.innerText = null;
curoc.innerText = `0`;
overc.innerText = `0`;
overo.innerText = null;



}












