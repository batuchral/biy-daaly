//1. 2 tooni hamgiin bag

function smaller(a, b){  // function uusgej a, b avna
    if(a > b){      // a ih baival b butsaana
        return b;     // hamgiin bagiig butsaana
    } else {
        return a;    // hamgiin bagiig butsaana
    }
}


//2. 2 tooni hamgiin ih

function bigger(a, b){  // function uusgej a, b avna
    if(a > b){      
        return a;     // hamgiin ihiig butsaana
    } else {
        return b;    // hamgiin ihiig butsaana
    }
}


//3. 3 tooni hamgiin bag

function smaller3(a, b, c){  // function uusgej a, b, c avna
    let smaller;        // smaller gej huvisagch uusgej hamgiin bagiig hadgalna
    if(a > b){
        smaller = b;        // a b hoyriig shalgaj hamgiin bagiig smaller dotor hadgalna
    } else {
        smaller = a;
    }
    if(smaller > c){
        smaller = c;  // hamgiin bagiig oloh
    }
    return smaller;   // hamgiin bagiig butsaana
}


//4. 3 tooni hamgiin ih

function bigger3(a, b, c){  // function uusgej a, b, c avna
    let bigger;        // bigger gej huvisagch uusgej hamgiin ihiig hadgalna
    if(a > b){
        bigger = a;       // a b hoyriig shalgaj hamgiin ihiig hadgalna
    } else {
        bigger = b;
    }
    if(bigger < c){
        bigger = c;  // hamgiin ihiig oloh
    }
    return bigger;   // hamgiin ihiig butsaana
}


//5. 3 tooni dundah

function dundah(a, b, c){  // function uusgej a, b, c avna
    if ((a > b && a < c) || (a > c && a < b)) {     // a dundah uu gej shalgana
        return a;
    } else if ((b > a && b < c) || (b > c && b < a)) {     // b dundah uu gej shalgana
        return b;
    } else {
        return c;       // a bolon b bish bol c
    }
}


//6. 3 tooni dundaj

function dundaj(a, b, c){       // utguudiig avna
    return (a + b + c) / 3;  // dundajiig olno
}


//7. 3 toog erembelj jagsaah

function ascending(a, b, c) {
    let smallest, middle, largest;

    if(a <= b && a <= c){       // a hamgiin jijig uu gej shalgana
        smallest = a;
    }else if(b <= a && b <= c){     // b hamgiin jijig uu gej shalgana
        smallest = b;
    }else{
        smallest = c;       // ali n ch bish bol c
    }

    if(a >= b && a >= c){       // a hamgiin ih uu gej shalgana 
        largest = a;
    }else if(b >= a && b >= c){     // b hamgiin ih uu gej shalgana
        largest = b;
    }else{
        largest = c;       // ali n ch bish bol c
    }

    middle = a + b + c - smallest - largest; // buh toog nemeed hamgiin bag, ih hoyriig hasaad gol toog olno

    return [smallest, middle, largest]; // jagsaasan array butsaana
}


//8. erembe 3 — adilhan gehdee davhtsaj shalgaad butsaana

function ascending2(a, b, c) {
    let smallest, middle, largest;

    if(a <= b && a <= c){       
        smallest = a;
    }else if(b <= a && b <= c){
        smallest = b;
    }else{
        smallest = c;
    }

    if(a >= b && a >= c){       
        largest = a;
    }else if(b >= a && b >= c){
        largest = b;
    }else{
        largest = c;
    }

    middle = a + b + c - smallest - largest; 

    return [smallest, middle, largest]; 
}


//9. anhnii too shalgah

function isPrime(n) {       // n gedeg utgiig avna
    let z = 0;              // anhnii too mun uu gej shalgahad tootsoh too
    for (let i = 1; i <= n; i++) {  // 1-eesee n hurtel huvaagdah esehiig shalgana
        if (n % i == 0) {
            z++;             // huvaagdaj bolvol z deer nemeh
        }   
    }
    if (z == 2) {
        return true;        // 1 bolon uurtuu l huvaagdaj baival anhnii too mun
    } else {
        return false;       // busad toond huvaagdaj bolbol bish
    }
}


//10. palindrome too mun uu shalgah

function isPalindrome(n) {
    let original = n;   // original toog hadgalna
    let reversed = 0;   // erguulsen toog hadgalah huvisagch

    while (n > 0) {
        let digit = n % 10;          // suuliin oron
        reversed = reversed * 10 + digit; // erguulsen toond nemeh
        n = (n - digit) / 10;        // suuliin orniig hasaad 10-aar huvaana
    }

    if(original == reversed){
        return true;   // adil bol palindrome mun
    }else{
        return false;  // adil bish bol bish
    }
}


// DOLOO, NAIM, etc run functions

function run1(){                // 1-r daalgavryn inputiig ajilluulna
    let a = parseFloat(document.getElementById("a1").value);        
    let b = parseFloat(document.getElementById("b1").value);
    document.getElementById("out1").innerHTML = smaller(a, b);  // hasiltiig hevleh
}


function run2() {   // 2-r daalgavryn input
    let a = parseFloat(document.getElementById("in2a").value);
    let b = parseFloat(document.getElementById("in2b").value);
    document.getElementById("out2").innerHTML = bigger(a, b);
}

function run3() {   // 3-r daalgavryn input
    let a = parseFloat(document.getElementById("in3a").value);
    let b = parseFloat(document.getElementById("in3b").value);
    let c = parseFloat(document.getElementById("in3c").value);
    document.getElementById("out3").innerHTML = smaller3(a, b, c);
}

function run4() {   // 4-r daalgavar
    let a = parseFloat(document.getElementById("in4a").value);
    let b = parseFloat(document.getElementById("in4b").value);
    let c = parseFloat(document.getElementById("in4c").value);
    document.getElementById("out4").innerHTML = bigger3(a, b, c);
}

function run5() {   // 5-r daalgavar
    let a = parseFloat(document.getElementById("in5a").value);
    let b = parseFloat(document.getElementById("in5b").value);
    let c = parseFloat(document.getElementById("in5c").value);
    document.getElementById("out5").innerHTML = dundah(a, b, c);
}

function run6() {   // 6-r daalgavar
    let a = parseFloat(document.getElementById("in6a").value);
    let b = parseFloat(document.getElementById("in6b").value);
    let c = parseFloat(document.getElementById("in6c").value);
    document.getElementById("out6").innerHTML = dundaj(a, b, c);
}

function run7() {   // 7-r daalgavar
    let a = parseFloat(document.getElementById("in7a").value);
    let b = parseFloat(document.getElementById("in7b").value);
    let c = parseFloat(document.getElementById("in7c").value);
    document.getElementById("out7").innerHTML = ascending(a, b, c);
}

function run8() {   // 8-r daalgavar
    let a = parseFloat(document.getElementById("in8a").value);
    let b = parseFloat(document.getElementById("in8b").value);
    let c = parseFloat(document.getElementById("in8c").value);
    document.getElementById("out8").innerHTML = ascending2(a, b, c);
}

function run9() {   // 9-r daalgavar
    let n = parseInt(document.getElementById("in9").value);
    let result = "";
    for (let i = -1; i <= n; i++) {     // -1-eesee n hurtel shalgah
        if (isPrime(i) === true) {
            result += i + ". Yes\n";    // anhnii too bol yes
        } else {
            result += i + ". No\n";     // bish bol no
        }
    }
    document.getElementById("out9").innerText = result;
}

function run10() {  // 10-r daalgavar
    let n = parseInt(document.getElementById("in10").value);
    document.getElementById("out10").innerHTML = isPalindrome(n);
}

function run11() {  // 11-r daalgavar — palindrome bolon anhnii toog hamt shalgah
    let x = parseInt(document.getElementById("in11").value);
    let result = "";
    for (let i = 2; i <= x; i++) {
        if (isPalindrome(i) && isPrime(i)) {
            result += i + "\n";   // hamgiin sonirholtoi toonuudiig hevleh
        }
    }
    document.getElementById("out11").innerText = result;
}