// 1. 0 - ээс 100 хүртэлх тоог хэвлэ.
// -- Энд кодоо бичнэ үү!!

for (let i = 0; i <= 100; i++) {
    console.log(i)
}


// 2. 60 - с 30 хүртэлх бүх СОНДГОЙ тоог хэвлэ.
// -- Энд кодоо бичнэ үү!!
for (let i = 30; i <= 60; i++) {
    if ((i % 2) != 0) {
        console.log(i)
    }
}

// 3. Чагтаас бүрдсэн квадрат зурах ба баруун тийшээ налсан диагональ нь нэмэх тэмдэг байна:
// ######+
// #####+#
// ####+##
// ###+###
// ##+####
// #+#####
// +######
// -- Энд кодоо бичнэ үү!!
for (let i = 0; i < 7; i++) {
    for (let j = 0; j > 0; j--) {

    }
}


// 4. Регистрийн дугаар өгөхөд төрсөн он, сар, өдөр (YYYY-MM-DD) хүйсийг хэвлэдэг convertRegNum функц бич.
//      РД - гийн сүүлийн орон сондгой бол эрэгтэй, тэгш бол эмэгтэй байна.
// Жишээ нь:
//      convertRegNum('АБ90020321')
//      >> 1990-02-03 онд төрсөн эрэгтэй
// -- Энд кодоо бичнэ үү!!
function convertRegNum () {
    reg.split('')
    console.log(reg)

}


// 5. Бүх .red-boxes гэсэн класстай элемэнтийг улаан болго;
// -- Энд кодоо бичнэ үү!!
const $red = document.querySelectorAll(".red-boxes")
for (let i = 0; i < red.length; i++) {
   $red[i].style.color="red";
}



// 6. blue-box гэсэн ID-тай элемэнтийг цэнхэр болго;
// -- Энд кодоо бичнэ үү!!

// 7. Бүх div - ийг бор болго;
// -- Энд кодоо бичнэ үү!!
document.getElementsByClassName("box").style.color="brown";


// 8. Шинээр box гэсэн класстай section tag үүсгээд, хар өнгөтэй болгоно.
//    Дотор нь box гэсэн класстай article tag үүсгэнэ.
//    article tag - ыг улаан өнгөтэй бөөрөнхий болгоно (JS - ээр)
//    section tag - ыг body руу append хийнэ.
//    улаан бөөрөнхий дээр дарахад бөөрөнхийг ногоон болгоно.
// -- Энд кодоо бичнэ үү!!
function addElement () {
    const newSection = document.createElement("section")
    newSection.className = "box"
    document.getElementsByClassName("box").style.color="black";
    const newArticle = document.createElement("article")
    document.getElementsByClassName("box").appendChild("article")
    document.getElementsByTagName("article").style.color="red";
} 
