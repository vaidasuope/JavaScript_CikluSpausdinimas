"use strict";
let duomenys={
    "id":"0001",
    "type":"donut",
    "name":"Cake",
    "ppu":0.55,
    "topping":[
        {"id":"5001","type":"None"},
        {"id":"5002","type":"Glazed"},
        {"id":"5005","type":"Sugar"},
        {"id":"5007","type":"Powdered Sugar"},
        {"id":"5006","type":"Chocolate with Sprinkles"},
        {"id":"5002","type":"Chocolate"},
        {"id":"5004","type":"Maple"},
    ]
}
for (let pirmiDuomenys in duomenys) {
    if (typeof duomenys[pirmiDuomenys] != "object") {
        console.log(pirmiDuomenys + " : " + duomenys[pirmiDuomenys]);
    } else {
        for (let ids in duomenys[pirmiDuomenys]) {
            console.log(pirmiDuomenys + " : ");
            if (typeof duomenys[pirmiDuomenys][ids] != "object") {
                console.log(ids+duomenys[pirmiDuomenys][ids]);
            } else {
                for (let eile in duomenys[pirmiDuomenys][ids]) {
                    console.log(eile + " : " + duomenys[pirmiDuomenys][ids][eile]);
                }
            }

        }
    }
}
for (let pirmiDuomenys in duomenys) {
    if (typeof duomenys[pirmiDuomenys] != "object") {
        console.log(pirmiDuomenys + ":" + duomenys[pirmiDuomenys]);
    } else {
        for (let ids in duomenys[pirmiDuomenys]) {
            console.log(pirmiDuomenys+":");
            let masyvas=JSON.stringify(duomenys[pirmiDuomenys][ids]);
            console.log(masyvas);
            }
        }
}


