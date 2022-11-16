//alert("Bienvenido a JS");
//document.write("hola JS");
//console.log("estoy en la consola");
/* 1
let x=parseInt(prompt("ingrese un primer numero")); 
let y=parseInt(prompt("ingrese un segundo numero"));
alert("la suma es: "+ (x+y));convierte  */

2
/* let x=parseFloat(prompt("ingrese un primer numero")); 
let y=parseFloat(prompt("ingrese un segundo numero"));
alert("la suma es: "+ (x+y)); //convierte el valor del promp a decimal// */
3
/* String =nombre= prompt("tu nombre");
String=apelido=prompt("apellido");
alert("biembenido" + nombre); */

/* let nombre=prompt("ingrese su nombre");
alert("biembenid@ a mi pagina "+ nombre +"pipipi"); */
 4
//INICIO 
/* let nombre=prompt("ingrese su nombre");
let nota1=parseInt(prompt("ingrese la nota 1"));
let nota2=parseInt(prompt("ingrese la nota 2"));
let nota3=parseInt(prompt("ingrese la nota 3"));
//PROCESO 
let ptje=nota1+nota2+nota3;
let prom=ptje/3;

//SALIDA
document.write("el puntale obtenido es : "+ptje+"<br>");
document.write("el promedio obtenido es : "+prom);
 */5
/*//INICIO
let altura=prompt("ingresa el dato de altura");
 let base=prompt("ingresa el dato de base ");
  //PROCESO
 let aria=base*altura;
 let raiz=aria/2 ; 
//SALIDA
6
 document.write("el reultado obtenido es  : "+aria+"<br>");
 document.write("resltado: "+ raiz);
//INICIO 
 let cateto1=parseInt(prompt("ingresa el cateto 1"));
 let cateto2=parseInt(prompt("ingresa el cateto 2"));
 //PROCRSO
 let variable=(cateto1*cateto1)+(cateto2*cateto2);
 let hipotenusa=Math,sqrt(variable);
 //SALIDA
 document.write("la hipotenusa del tringulo es :"+hipotenusa)*/

//INICIO
/*let radio=parseFloat(prompt("ingresa radio del circulo"));
const pi=3.1416
 let  areaCir = pi*(radio**2);
 let respuesta =`el aria del circulo es <spam style="color:red ;"> ${areaCir}</span>,
 <strong>gracias por su vista a la pagian </strong>`;
  document.write(respuesta);*/
/*let edad=parseInt(prompt("ingresa se edad "));
if(edad>=18){
    document.write("es mayor de edad ");
}else{
    document.write("es menor de edad ");
}*/
//INICIO 
/*let producto=parseInt(prompt("precio  de un producto"));
let descuento=parseInt(prompt("ingresa el descuento "));
let dscnt=( producto*descuento );
let precio=dscnt/100;
document.write("el precio del producto  : "+precio);*/

/*let horas=parseInt(prompt("horas de trabajo "));
let horasextras=parseInt(prompt("pago de horas extras"));
let traifa=( horas*hrsextras );
let pag=traifa/100;
document.write("el pago de horas extras es : "+pago);+*/
//===========================
/*let hora=parseInt(prompt("ingresa las horas trabajadas "));
let pago=parseInt(prompt("ingrese el pago por hora"));
let horasextras=parseInt(prompt("porcentaje de hora extra"));
alert=salario =(hora*pago);
alert=tarifa=( hora*pago/40);
document.write("el salario por horas de trabajo :"+salario+"<br>");
document.write("el pago de horas extras es : "+tarifa+"<br>");
if(hora>=60){
    document.write("es mayor horas trabajadas");
}else{
    document.write("es menor horas trabajadas");
}*/
//js ejecicio 2 =======================================
/*let costo=parseFloat(prompt("ingreso el costo del producto"));
let dscto=costo*0.25;
let total =costo-dscto;
//document.write("el total a pagar del producto es:"+total );
document.write(`el total a pagar del producto es:${total} el monto de descuento fue ${dscto}`);*/
//ejecicio 2==============================================================

/*let horast =parseInt(prompt("ingresa horas trabajadas"));
let costoxh=parseInt(prompt("ingrese el costo por hora"));
let pago;
if(horast>60){
    let aumento=costoxh*1.4;
    pago=(costoxh+aumento)*horast;
}else{
    pago=horast*costoxh;
}

document.write(`el salario del trabajador es: ${pago}`);*/
//=============================================
/*let nombre="christian"
document.write("nombre1+nombre+nombre1+nombre1+nombre1+nombre1+nombre1");*/

/*let numeros=(1);
document.write("1,2,3,4,5,6,7,8,9,10");*/
//============================================================
/*for(let i=1 ;i<=6;i++){
    document.write("<h"+i+" > hola</h"+i+"> ");
}*/
//=================================================
/*let k=1;
while(k<=10){
    document.write(k);
    k=k+2;//k++=2
}*/
/*let  edad =parseInt(prompt("ingrese su edad :"));
for(let i=1;i<=edad;i++){
    document.write(i+"<br>");
}*/
/*let  numero=parseInt(prompt("ingresa un numero positivo :"));
for(let i=numero;i>=0;i--){
    document.write(i+"<br>");
}*/
//======================================================================
 function suma(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let sum=n1+n2
    document.getElementById("respuesta").innerHTML=sum;
 }



function saludar(textsaludo){
    let nombre=document.getElementById("nom").value;
    alert("bienvenido a las funcuiones : " +nombre);
}

function logueo(){
    let usuario=document.getElementById("usuario").value;
    let pass=document.getElementById("pass").value;
    if(usuario=="admin" && pass=="1234"){
        alert("ingreso autorizado");
        window.open("index.html" , "_self");
    }else{
        alert("contraseña incorrecta");
    }
}
