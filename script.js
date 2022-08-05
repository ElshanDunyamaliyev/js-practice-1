// Task 1

// let userGuess = prompt('En azi 2 reqemli eded daxil edin: ')

// while(userGuess<10){
//     userGuess = prompt('En azi 2 reqemli eded daxil edin: ')
// }

// alert(`Axirdan 2ci reqem: ${parseInt(userGuess/10%10)}`)

// Task 2

// let userGuess = parseInt(prompt('Tek reqemli eded daxil edin:'))
// let num = userGuess;
// let length = 0;
// while(num>0){
//     num = parseInt(num/10)
//     length++
// }
// let n = Math.ceil(length/2)
// let middle_digit = userGuess % (10**n)
// middle_digit = parseInt(middle_digit/10**(n-1)) 
// alert(`Ortada duran reqem: ${middle_digit}`)

// Task 3

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// userGuess = parseInt(userGuess/10)
// alert(`Eded : ${userGuess}`)

// Task 4

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// let num = userGuess;
// let length = 0;
// while(num>0){
//     num = parseInt(num/10)
//     length++
// }

// let number = userGuess % (10**(length-1))
// alert(`Eded: ${number}`)

// Task 5

// let userGuess = parseInt(prompt('Eded daxil edin:'))

// if(userGuess%3 ===0 && userGuess%5===0){
//     alert(`${userGuess} 3 ve 5-e tam bolunur`)
// }else{
//     alert(`${userGuess} 3 ve 5-e tam bolunmur`)
// }

// Task 6

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// let num = userGuess;
// result = false
// while(num>0){
//     if(num%10 === 6){
//         result = true
//         break;
//     }
//     num = parseInt(num/10)
// }
// alert(result)

// Task 7

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// let nextNum = userGuess - userGuess%11 + 11;
// alert(`Novbeti eded ${nextNum}`)

// Task 8

// let userGuess1 = parseInt(prompt('Eded daxil edin:'))
// let userGuess2 = parseInt(prompt('Quvveti daxil edin:'))
// let result = userGuess1 ** userGuess2
// alert(`Netice: ${result}`)

// Task 9

// let userGuess = parseInt(prompt('5 reqemli Eded daxil edin:'))

// let num = userGuess
// let length = 0;
// while(num>0){
//     num = parseInt(num/10)
//     length++
// }

// n1 = parseInt(userGuess % 10)
// n2 = parseInt(userGuess %100/10)
// n3 = parseInt(userGuess %1000/100)
// n4 = parseInt(userGuess %10000/1000)
// n5 = parseInt(userGuess /10000)

// let result = n1 + n2 + n3 + n4 + n5
// alert(`Cem: ${result}`)


// Task 10
// let userGuess = parseInt(prompt('Eded daxil edin:'))

// let num = userGuess
// let length = 0;
// while(num>0){
//     num = parseInt(num/10)
//     length++
// }

// let sum = 0;
// for(let i = 1; i<=length; i++){
//    let n = parseInt(userGuess%(10 **i)/(10 ** (i-1)))
//    sum += n
// }

// alert(`Reqenlerin cemi: ${sum}`)

// Task 11 and 12

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// let num = userGuess
// let length = 0;
// while(num>0){
//     num = parseInt(num/10)
//     length++
// }

// let result = ''
// for(let i = 1; i<=length; i++){
//    let n = parseInt(userGuess%(10 **(i))/(10 ** (i-1)))
//    result += '' + n
// }
// alert(result)

// Task 13

// let en = parseInt(prompt('Eni daxil edin:'))
// let uz = parseInt(prompt('Uzunluqu daxil edin:'))
// let h = parseInt(prompt('Hundurluyu daxil edin:'))
// let hecm = en * uz * h;
// alert(`Duzbucaqli paralelepipedin hecmi: ${hecm}`)


// Task 14

// let userGuess = parseInt(prompt('Eded daxil edin:'))

// let num = userGuess
// let length = 0;
// while(num>0){
//     num = parseInt(num/10)
//     length++
// }
// let sum = '';
// for(let i = length; i>0; i-=1){
//     if(i%2!==0 && length%2 ==0){
//         let n = parseInt(userGuess%(10 **(i))/(10 ** (i-1)))
//         sum += n
//     }else if(i%2 ==0 && length%2 !==0){
//         let n = parseInt(userGuess%(10 **(i))/(10 ** (i-1)))
//         sum += n
//     }
// }
// alert(sum)

// Task 15

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// if(userGuess>0){
//     alert(1)
// }else if(userGuess<0){
//     alert(-1)
// }else if(userGuess===0){
//     alert(0)
// }


// Task 16

// let userGuess = parseInt(prompt('Goturmek istediyiniz pulu daxil edin:'))
// let bill;
// bill = parseInt(userGuess / 100)
// alert(`100 manat ${bill} eded`)
// userGuess = userGuess - (bill * 100);
// bill = parseInt(userGuess / 50)
// alert(`50 manat ${bill} eded`)
// userGuess = userGuess - (bill * 50);
// bill = parseInt(userGuess / 20)
// alert(`20 manat ${bill} eded`)
// userGuess = userGuess - (bill * 20);
// bill = parseInt(userGuess / 10)
// alert(`10 manat ${bill} eded`)
// userGuess = userGuess - (bill * 10);
// bill = parseInt(userGuess / 5)
// alert(`5 manat ${bill} eded`)
// userGuess = userGuess - (bill * 5);
// bill = userGuess / 1
// alert(`1 manat ${bill} eded`)



// Task 17
// let userGuess = parseInt(prompt('Eded daxil edin:'))
// let n1 = userGuess%10
// let n2 = parseInt(userGuess%100/10)
// let n3 = parseInt(userGuess/100)
// console.log(n1,n2,n3);

// if(n1>n2 && n1>n3 && n2>n3){
//     alert(`` + n3 + n2 + n1)
// }else if(n1>n2 && n1>n3 && n2<n3){
//     alert(`` + n2 + n3 + n1)
// }
// else if(n2>n1 && n2>n3 && n1>n3){
//     alert(`` + n3 + n1 + n2)
// }else if(n2>n1 && n2>n3 && n3>n1){
//     alert(`` + n1 + n3 + n2)
// }
// else if(n3>n1 && n3>n2 && n1>n2){
//     alert(`` + n2 + n1 + n3)
// }else if(n3>n1 && n3>n2 && n2>n1){
//     alert(`` + n1 + n2 + n3)
// }

// Task 18
// let userGuess = parseInt(prompt('Eded daxil edin:'))
// for(let i = 2;i<userGuess;i++){
//     if(userGuess%i==0){
//         alert(`${userGuess} sade deyil`)
//         break
//     }else{
//         alert(`${userGuess} sadedir`)
//         break
//     }
// }

// Task 19

// let userGuess = parseInt(prompt('Eded daxil edin:'))
// let n = parseInt(Math.cbrt(userGuess))
// alert(n**3)


// Task 20
// let userGuess = parseInt(prompt('1 ile 12 arasinda eded daxil edin:'))

// switch(userGuess){
//     case 1:
//         alert('yanvar')
//         break;
//     case 2:
//         alert('fevral')
//         break;
//     case 3:
//         alert('mart')
//         break;
//     case 4:
//         alert('aprel')
//         break;
//     case 5:
//         alert('may')
//         break;
//     case 6:
//         alert('iyun')
//         break;
//     case 7:
//         alert('iyul')
//         break;
//     case 8:
//         alert('avqust')
//         break;
//     case 9:
//         alert('sentyabr')
//         break;
//     case 10:
//         alert('oktyabr')
//         break;
//     case 11:
//         alert('noyabr')
//         break;
//     case 12:
//         alert('dekabr')
//         break;
// }
