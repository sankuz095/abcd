"use strict";

const cements = [533, 500]; 
const sands = [444, 500]; 
const stones = [1200, 1150];
const waters = [222, 250];

let h = document.getElementById("height");
let w = document.getElementById('width');
let l = document.getElementById('length');
let mark = document.getElementById('mark');
let res = document.getElementById('res');

function calc() {
    let key = 0;
    
    if (mark.value != "1") {
        key=1
    }

    let q = h.value * w.value * l.value / 1000000;

    let ct = `<b>Цемент:</b> ${Number(cements[key]*q).toFixed(1)}, кг`;
    let st = `<b>Песок:</b> ${Number(sands[key]*q).toFixed(1)}, кг`;
    let stt = `<b>Щебень:</b> ${Number(stones[key]*q).toFixed(1)}, кг`
    let wt = `<b>Вода:</b> ${Number(waters[key]*q).toFixed(1)}, л`
    res.innerHTML = ct + "<br />" +  st + "<br />" + stt + "<br />" + wt + "<br />";
}