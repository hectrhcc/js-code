//este es un comentario en javascript
console.log("hola javascript")

var numero = 5;
var texto = "esto si que es cuatico"
var booleano = true;
var edad = 35;

const miConstante = 4;

//imprimiendo por consola un variable tipo numero
console.log("numero:",numero)
//imprimiendo por consola un variable tipo string
console.log("texto:",texto)
//imprimiendo por consola un variable tipo booleano
console.log("booleano:",booleano)
//probando variable edad
console.log("mi edad es "+ edad )
edad = 25;
console.log("mi edad ahora es "+ edad )
//probando constante
console.log("constante:" + miConstante)
console.log("constante otra vez:", miConstante)
//miConstante= 1234
console.log("constante otra otra vez:", miConstante)

var resultado = 2+3
console.log("el resultado es: " + resultado)

//condicionales

let miVariable = 10

let resultadoCondicional = miVariable == 10
console.log(resultadoCondicional)
if (miVariable == 10){
	console.log('Si, mi variable vale 10')
}else{
	console.log('No, mi variable no vale 10')
}

// el simbolo === esta comparando el tipo de la variable y el valor

let num=9
let elnombre ="Hector"
//probando el simbolo ==
if(num == "9"){
	console.log('Si, si es el mismo numero (9 =="9") ')
}else{
	console.log('No, no es el mismo numero')
}
//probando el simbolo ===
if(num === "9"){
	console.log('Si, si es el mismo tipo y numero')
}else{
	console.log('No, no es el mismo tipo (9 ==="9")')
}

//probando el operador AND

if(num == "9" && elnombre=="Francisco"){
	console.log('Si, si es el mismo numero y nombre')
}else{
	console.log('No, no es el mismo numero y nombre')
}

//probando el bucle while

let  contador =0
while(contador <10){
	console.log("esto se esta repitiendo:" +contador)
	contador++
}

//probando el bucle For

for (let i = 7 ; i >= 0; i--) {
	console.log(i)
}

//probando funciones

// llamada
primera()

function primera(){
	console.log("esto es una funcion")
}

//funcion 2

segunda("argumento")
function segunda(nombre){
	console.log("esta es otra funcion con un argumento: " +nombre)
}

//funcion 3

let valor = tercera(6,7)

function tercera(num1,num2){
	resultado = num1*num2
	//console.log("el resultado de la multiplicacion es:" +resultado)
	return resultado
}

console.log("el resultado del retorno de la funcion es:", valor)

//funcion 4
resultado2=multiplicar(8,9)
function multiplicar(num1,num2){
	let result = num1 * num2 //varibale result es local, solo existe dentro de funcion multiplicar restringida por let
	return result
}
//console.log(result)
console.log(resultado2)


//probando arreglos

let arreglo = [ 4, 2, 1, 0, 5]

console.log(arreglo)

for (let i = arreglo.length - 1; i >= 0; i--) {
	console.log(arreglo[i])
}
//probando objetos

let miObjeto = {clave:"valor", nombre:"Falsa", edad:34}
let miObjeto2 = {llave:"valor", nombre:"Agro", edad:22}


console.log(miObjeto)
console.log(miObjeto2)

let arregloObjeto = [miObjeto,miObjeto2]

console.log(arregloObjeto)


miObjeto.patas = 4


//acceder a una propiedad del objeto

console.log(miObjeto.nombre)


const op1 = document.getElementById("op1")
const op = document.getElementById("op")
const op2 = document.getElementById("op2")
const cal = document.getElementById("cal") 
const solucion = document.getElementById('resultado')

cal.addEventListener('click',calcular)

function calcular(){
	console.log("se apreto el boton calcular")
	const operador = op.value 
	const operador1 = parseFloat(op1.value)
	const operador2 = parseFloat(op2.value)

	if((operador== "+" || operador== "-" || operador== "*" || operador== "/") && !isNaN(operador1) && !isNaN(operador2)){
		let re;
		switch(operador){
			case "+":
				re = operador1 + operador2
				break;
			case "-":
				re = operador1 - operador2
				break;
			case "*":
				re = operador1 * operador2
				break;
			case "/":
				re = operador1 / operador2
				break;
		}
		solucion.style = "color:white"
		solucion.innerText = " =" + re
	}
	else{
		solucion.style = "color:red"
		solucion.innerText = "calculo imposible"	
	}

}

