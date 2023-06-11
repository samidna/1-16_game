"use strict";

let numArr = [];
for (let i = 1; i <= 16; i++) {
    numArr.push(i);
}
function table() {
    let table = document.getElementById('tbl');
    let tr = '';
    // console.log(rdm);
    for (let i = 0; i < 4; i++) {
        tr += `<tr>`;
        for (let j = 0; j < 4; j++) {
            let rdm = numArr[Math.floor(Math.random() * numArr.length)];
            tr += `<td onclick="check()" id="tdd" class="table_td bg-secondary border p-4">${rdm}</td>`
            console.log(tr);
            numArr.splice(numArr.indexOf(rdm), 1);
            console.log(numArr);
        }
    }
    tr += `</tr>`;
    document.getElementById('tbl').innerHTML = tr;
}
table();
function check() {
    let table = document.getElementById('tbl');
    let td = document.getElementById('tdd');
    
    if(td.value===1){
        table.value.classList.add("green");
    }
}






