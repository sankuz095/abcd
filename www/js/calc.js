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
    
    if (
        parseFloat(w.value) < 0 || parseFloat(w.value) > 10 ||
        parseFloat(h.value) < 0 || parseFloat(h.value) > 100 ||
        parseFloat(l.value) < 0 || parseFloat(l.value) > 10000
    ) {
        return res.innerHTML = "Одно из значений вышло за доступимый диапозон";
    }

    if (mark.value != "1") {
        key=1
    }

    let q = h.value * w.value * l.value;

    let ct = `<b>Цемент:</b> ${Number(cements[key]*q).toFixed(2)}, кг`;
    let st = `<b>Песок:</b> ${Number(sands[key]*q).toFixed(2)}, кг`;
    let stt = `<b>Щебень:</b> ${Number(stones[key]*q).toFixed(2)}, кг`;
    let wt = `<b>Вода:</b> ${Number(waters[key]*q).toFixed(2)}, л`;
    let mt = `<b>Арматура:</b> ${Number(l.value*5).toFixed(2)}, м`;

    res.innerHTML = ct + "<br />" +  st + "<br />" + stt + "<br />" + wt + "<br />" + mt;
}