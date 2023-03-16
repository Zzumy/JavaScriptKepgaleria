window.addEventListener("load", init);
const kepLista = ["./css/images/1.jpg", "./css/images/2.jpg", "./css/images/3.jpg", "./css/images/4.jpg", "./css/images/5.jpg"];

function init() {
    mainElrendezes();
    headerTartalom();
    articleTartalom();
    asideTartalom();
}

function mainElrendezes() {
    const mainElrendezes = document.querySelectorAll("main");
    mainElrendezes[0].style.maxWidth = "80%";
    mainElrendezes[0].style.margin = "auto";
}

function headerTartalom() {
    idTitleTartalom();
}

function articleTartalom() {
    const articleElrendezes = document.querySelectorAll("article");
    articleElrendezes[0].style.display = "grid";
    articleElrendezes[0].style.gridTemplateAreas = "'headerElso headerKozepso headerUtolso'";

    idElozoGombTartalom();
    idNagyKepTartalom();
    idKovetkezoGombTartalom();
}

function asideTartalom() {
    const asideElrendezes = document.querySelectorAll("aside");
    asideElrendezes[0].style.display = "grid";
    asideElrendezes[0].style.gridTemplateAreas = "'asideElso asideKozepso asideUtolso'";

    const kisKepek = document.querySelectorAll(".kisKep");
    kisKepek[0].innerHTML = `<img src="${kepLista[1]}" class="mellekKep" alt="kep">`;
    kisKepek[1].innerHTML = `<img src="${kepLista[2]}" class="mellekKep" alt="kep">`;
    kisKepek[2].innerHTML = `<img src="${kepLista[3]}" class="mellekKep" alt="kep">`;

    const kisKep = document.querySelectorAll(".mellekKep");
    kisKep[0].style.width = "100%";
    kisKep[0].style.gridArea = "asideElso";
    kisKep[0].style.border = "1px solid black";
    kisKep[0].style.borderRadius = "5px";
    kisKep[1].style.width = "100%";
    kisKep[1].style.gridArea = "asideKozepso";
    kisKep[1].style.border = "1px solid black";
    kisKep[1].style.borderRadius = "5px";
    kisKep[2].style.width = "100%";
    kisKep[2].style.gridArea = "asideUtolso";
    kisKep[2].style.border = "1px solid black";
    kisKep[2].style.borderRadius = "5px";
}

function idTitleTartalom() {
    const headerElem = document.getElementById("title");
    headerElem.innerHTML = "<h1>Képgaléria</h1>";
}

function idElozoGombTartalom() {
    const elsoGomb = document.getElementById("elozo");
    elsoGomb.innerHTML = "<<";
    elsoGomb.style.width = "100%";
    elsoGomb.style.gridArea = "headerElso";
}

function idNagyKepTartalom() {
    const nagyKep = document.getElementById("nagyKep");
    nagyKep.innerHTML = `<img src="${kepLista[0]}" id="foKep" alt="kep">`;

    const foKep = document.getElementById("foKep");
    foKep.style.width = "100%";
    foKep.style.gridArea = "headerKozepso";
    foKep.style.border = "1px solid black";
    foKep.style.borderRadius = "5px";
}

function idKovetkezoGombTartalom() {
    const masodikgomb = document.getElementById("kovetkezo");
    masodikgomb.innerHTML = ">>";
    masodikgomb.style.width = "100%";
    masodikgomb.style.gridArea = "headerUtolso";
}

