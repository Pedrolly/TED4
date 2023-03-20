//1
a1 = []
var totval = 0
for(var i=0;i<10;i++){
  a1[i]=parseFloat(prompt('Entre com um numero'))
  var valorepet = false
  for(var j=0;j<i;j++){
     if(a1[j] == a1[i]){
   valorepet = true;
      break;
  }
 } 
 if(!valorepet){
   totval++
 }
}
document.write(totval)
//2
/*
totnum = 0
totpar = 0
a2=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<=9;i++){
  if(a2[i]==9){
    totnum++
  }
  if(a2[i]%2 == 0){
    totpar++
  }
}
document.write("Está na posição: "+a2.indexOf(3))
document.write("<br>O numero 9  apareceu: "+totnum)
document.write("<br>A quantidade de números pares: "+totpar)
*/
//3
/*
var vet= []
var num6 = 0
for(var i=1;i<50;i++){
  const num = Math.floor(Math.random()*6)+1
  vet.push(num)
  if(vet.push(num) == 6){
    num6++
  }
}
var percseis = (num6/50)
document.write('<br>O percentual de seis é: '+percseis)
*/
//4
/*
var num = [1,2,3,4,5]
var sum = 0 
var mult= 1
for(var i=0;i<num.length;i++){
  sum += num[i];
  mult = num[i]*mult
  document.write('<br>Numero do vetor: '+num[i])
}
document.write("<br>A soma deu: " + sum)
document.write("<br>A multiplicação deu: " + mult)
*/
//5
/*
var idade = []
var altura = []
for(var i=1;i<6;i++){
  idade[i]=Number(prompt("Entre com a idade da pessoa "+i))
  altura[i]=prompt("Entre com a altura da pessoa "+i)
}
document.write(`<br>A ordem inversa das idades são ${idade.reverse()}`)
document.write(`<br>A ordem inversa das alturas são ${altura.reverse()}`)
*/
//6
/*
var pergunta = ["Telefonou para a vítima?","Esteve no local do crime?","Mora perto da vítima?","Devia para a vítima?","Já trabalhou com a vítima?"]
var num=[]
var respposi = 0
for(var i=0;i<=4;i++){
  num[i] = Number(prompt(pergunta[i]+"Entre com uma resposta: 1-sim e 2-Não")) 
  if(num[i]==1){
    respposi++
  }
}
if(respposi == 2){
  document.write("Suspeito(a)")
}
if(respposi == 3 || respposi == 4){
  document.write("Cumplíce")
}
if(respposi == 5){
  document.write("Assasino")
}
if(respposi < 2){
  document.write("Inocente")
}
*/
//7
/*
var dado=[]
var numdado = []
for(var i=0;i<=9;i++){
  dado[i] = (Math.floor(Math.random() * 6)) 
}
for(var i=0;i<=9;i++){
  numdado[i] = 0
}
for(var i=0;i<=9;i++){
  numdado[dado[i]]++  
}
for(var t=0;t<=9;t++){
  document.write("<br>Número  sorteado: "+dado[t])
}
for(t=0;t<=9;t++){
  document.write("<br>Quantidade Sorteada: "+numdado[t])
}
*/
//8
/*
var vetor = []
var somnum = 0
var media
for(var i=0;i<=3;i++){
  vetor[i]=Number(prompt('Entre com uma nota'))
  somnum=vetor[i]
}
media = (somnum/4)
document.write('Média= '+media)
document.write('Valor mais Próximo da média=7.5')
  */