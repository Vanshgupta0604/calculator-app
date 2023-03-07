'use strict';

const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

function cal(item){
    item.onclick = function() {
        if(item.id=='clear'){
            display.innerText = ''
        }
        else if(item.id=='backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substr(0,string.length-1)
        }
        else if( display.innerText!='' && item.id=='equal'){
            display.innerText = eval(display.innerText)
        }
        else if( display.innerText=='' && item.id=='equal'){
            display.innerText = 'Please enter something to calculate'
            setTimeout(()=>(display.innerText=''),2000)
        }
        else {
            display.innerText += item.id
        }
    }
}

buttons.forEach((item) => {cal(item)})
// for(int ele : arr){
//     cal(ele)
// }
// buttons.forEach((item)=>{
//     item.onclick = ()=>{
//         if(item.id=='clear'){
//             display.innerText = ''
//         }
//         else if(item.id=='backspace'){
//             let string = display.innerText.toString()
//             display.innerText = string.substr(0,string.length-1)
//         }
//         else if( display.innerText!='' && item.id=='equal'){
//             display.innerText = eval(display.innerText)
//         }
//         else if( display.innerText=='' && item.id=='equal'){
//             display.innerText = 'Please enter something to calculate'
//             setTimeout(()=>(display.innerText=''),2000)
//         }
//         else {
//             display.innerText += item.id
//         }
//     }
// })