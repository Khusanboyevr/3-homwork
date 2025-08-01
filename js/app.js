// let soz = prompt("So'z kiriting:");
// if (soz) {
//   for (let i = 0; i < soz.length; i++) {
//     let harf = soz[i];
//     switch (harf) {
//       case "a":
//         console.log("a");
//         break;
//       case "b":
//         console.log("b");
//         break;
//       case "c":
//         console.log("c");
//         break;
//       case "d":
//         console.log("d");
//         break;
//       case "e":
//         console.log("e");
//         break;
//       case "f":
//         console.log("f");
//         break;
//       case "g":
//         console.log("g");
//         break;
//       case "h":
//         console.log("h");
//         break;
//       case "i":
//         console.log("i");
//         break;
//       case "j":
//         console.log("j");
//         break;
//       case "k":
//         console.log("k");
//         break;
//       case "l":
//         console.log("l");
//         break;
//       case "m":
//         console.log("m");
//         break;
//       case "n":
//         console.log("n");
//         break;
//       case "o":
//         console.log("o");
//         break;
//       case "p":
//         console.log("p");
//         break;
//       case "q":
//         console.log("q");
//         break;
//       case "r":
//         console.log("r");
//         break;
//       case "s":
//         console.log("s");
//         break;
//       case "t":
//         console.log("t");
//         break;
//       case "u":
//         console.log("u");
//         break;
//       case "v":
//         console.log("v");
//         break;
//       case "w":
//         console.log("w");
//         break;
//       case "x":
//         console.log("x");
//         break;
//       case "y":
//         console.log("y");
//         break;
//       case "z":
//         console.log("z");
//         break;
//     }
//   }
// }

// let num = prompt("1 dan 999 gacha son kiriting:");

// if (num < 1 || num > 999 || isNaN(num)) {
//   alert("Xatolik.");
// } else {
//   let result = "";

//   let yuz = Math.floor(num / 100);
//   let on = Math.floor((num % 100) / 10);
//   let bir = num % 10;

//   switch (yuz) {
//     case 1:
//       result += "bir yuz ";
//       break;
//     case 2:
//       result += "ikki yuz ";
//       break;
//     case 3:
//       result += "uch yuz ";
//       break;
//     case 4:
//       result += "to‘rt yuz ";
//       break;
//     case 5:
//       result += "besh yuz ";
//       break;
//     case 6:
//       result += "olti yuz ";
//       break;
//     case 7:
//       result += "yetti yuz ";
//       break;
//     case 8:
//       result += "sakkiz yuz ";
//       break;
//     case 9:
//       result += "to‘qqiz yuz ";
//       break;
//   }

//   switch (on) {
//     case 1:
//       result += "o‘n ";
//       break;
//     case 2:
//       result += "yigirma ";
//       break;
//     case 3:
//       result += "o‘ttiz ";
//       break;
//     case 4:
//       result += "qirq ";
//       break;
//     case 5:
//       result += "ellik ";
//       break;
//     case 6:
//       result += "oltmish ";
//       break;
//     case 7:
//       result += "yetmish ";
//       break;
//     case 8:
//       result += "sakson ";
//       break;
//     case 9:
//       result += "to‘qson ";
//       break;
//   }

//   switch (bir) {
//     case 1:
//       result += "bir";
//       break;
//     case 2:
//       result += "ikki";
//       break;
//     case 3:
//       result += "uch";
//       break;
//     case 4:
//       result += "to‘rt";
//       break;
//     case 5:
//       result += "besh";
//       break;
//     case 6:
//       result += "olti";
//       break;
//     case 7:
//       result += "yetti";
//       break;
//     case 8:
//       result += "sakkiz";
//       break;
//     case 9:
//       result += "to‘qqiz";
//       break;
//   }

//   alert(result.trim());
// }

// let y = "y";
// let n = "n";

// let min = 44;
// let max = 66;
// let gas = true;

// let random_son = Math.floor(Math.random() * (max - min + 1)) + min;

// while (gas) {
//   let answer = prompt(`Siz o'ylagan son ${random_son} mi?`);

//   if (answer == y) {
//     alert(`Siz o'ylagan son ${random_son} ekan`);
//     console.log(random_son);

//     gas = false;
//     break;
//   }

//   if (answer == n) {
//     random_son = Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// }
