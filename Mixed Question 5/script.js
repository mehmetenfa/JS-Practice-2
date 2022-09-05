//! 1) - verilen sayının basamak değerlerini birbiri ile çarpacağız. kaç defada tek haneli basamağa ulaşıyor?

//? 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//? 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//? 4 --> 0 (because 4 is already a one-digit number)

//* Gelen integer degerin stringe yada diziye dönüşmesi lazım


let tekhane = (sayi) => {
  sayi = "" + sayi;
  sayi = sayi.split("");
  let toplam = 1;
  let counter = 0;
  while (sayi.length > 1) {
    for (let i = 0; i < sayi.length; i++) {
      toplam *= sayi[i];
    }
    sayi = ("" + toplam).split("");
    toplam = 1;
    counter++;
  }
  return counter;
};
console.log(tekhane(999));


//! 2) - verilen bir sayının binary sistemdeki karşılığı olan sayının içerisinde kaç adet 1 rakamı var.

//? input                   output
//? 15     =>   (1111)  =>    4 
//? 14     =>   (1110)  =>    3

let binary = (sayi) => {
    sayi = sayi.toString(2);
    console.log(sayi);
    sayi = ("" + sayi).split("0");
    let counter = 0;
    for (let item of sayi) {
      console.log("item : ", item);
      if (item == "1") {
        counter++;
      }
    }
    return counter;
  };
  console.log(binary(20));
  // yöntem 2
  countBits = (n) => n.toString(2).split("0").join("").length;


