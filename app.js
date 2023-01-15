let menu = ['rau xào', 'thịt luộc', 'gà rán' ];
localStorage.setItem("menu", menu);
localStorage.getItem("menu");
input =prompt("moi nguoi dung nhap lenh C,R,U,D");
if (input == "C" ) {
   monan= prompt('moi nguoi dung nhap mon an muon them vao menu');
   localStorage.setItem("menu",menu + monan);
   localStorage.getItem("menu");
   alert(menu + monan);

   }
if (input == "R" ) {
let recent = menu.join(",");
alert(menu);
console.log(recent);
}
if (input == "U" ) {
monancanupdate = prompt('moi nguoi dung nhap mon an muon thay doi vao menu');
let index = menu.indexOf(monancanupdate);
console.log(index);

monanmoi=prompt('moi nguoi dung nhap mon an moi muon them vao menu');
menu[index] = monanmoi;
localStorage.setItem("menu", menu);
localStorage.getItem("menu");
alert(menu);
console.log(menu);

}
if (input == "D" ) {
   monancanxoa=prompt('Moi nhap mon an can xoa');
   let index = menu.indexOf(monancanxoa);
   console.log(index);
   menu.splice(index);
   localStorage.setItem("menu", menu);
   localStorage.getItem("menu");
   alert(menu);
   console.log(menu);
   }
