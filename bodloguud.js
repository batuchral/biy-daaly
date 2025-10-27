function smaller(a, b){  
    if(a > b){   
        return b;     
    } else {
        return a;    
    }
}

function bigger(a, b){  
    if(a > b){      
        return a;     
    } else {
        return b;   
    }
}

function smaller3(a, b, c){ 
    let smaller;
    if(a > b){
        smaller = b;
    } else {
        smaller = a;
    }
    if(smaller > c){
        smaller = c;
    }
    return smaller;
}

function bigger3(a, b, c){
    let bigger;
    if(a > b){
        bigger = a;
    } else {
        bigger = b;
    }
    if(bigger < c){
        bigger = c;
    }
    return bigger;
}

function dundah(a, b, c){
    if ((a > b && a < c) || (a > c && a < b)) {
        return a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
        return b;
    } else {
        return c;
    }
}

function dundaj(a, b, c){
    return (a + b + c) / 3;
}

function ascending(a, b, c) {
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

function isPrime(n) {
    let z = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            z++;
        }   
    }
    if (z == 2) {
        return true;
    } else {
        return false;
    }
}

function isPalindrome(n) {
    let original = n;
    let reversed = 0;
    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = (n - digit) / 10;
    }
    if(original == reversed){
        return true;
    }else{
        return false;
    }
}

function run1(){
    let a = parseFloat(document.getElementById("a1").value);        
    let b = parseFloat(document.getElementById("b1").value);
    document.getElementById("out1").innerHTML = smaller(a, b);
}

function run2() {
    let a = parseFloat(document.getElementById("in2a").value);
    let b = parseFloat(document.getElementById("in2b").value);
    document.getElementById("out2").innerHTML = bigger(a, b);
}

function run3() {
    let a = parseFloat(document.getElementById("in3a").value);
    let b = parseFloat(document.getElementById("in3b").value);
    let c = parseFloat(document.getElementById("in3c").value);
    document.getElementById("out3").innerHTML = smaller3(a, b, c);
}

function run4() {
    let a = parseFloat(document.getElementById("in4a").value);
    let b = parseFloat(document.getElementById("in4b").value);
    let c = parseFloat(document.getElementById("in4c").value);
    document.getElementById("out4").innerHTML = bigger3(a, b, c);
}

function run5() {
    let a = parseFloat(document.getElementById("in5a").value);
    let b = parseFloat(document.getElementById("in5b").value);
    let c = parseFloat(document.getElementById("in5c").value);
    document.getElementById("out5").innerHTML = dundah(a, b, c);
}

function run6() {
    let a = parseFloat(document.getElementById("in6a").value);
    let b = parseFloat(document.getElementById("in6b").value);
    let c = parseFloat(document.getElementById("in6c").value);
    document.getElementById("out6").innerHTML = dundaj(a, b, c);
}

function run7() {
    let a = parseFloat(document.getElementById("in7a").value);
    let b = parseFloat(document.getElementById("in7b").value);
    let c = parseFloat(document.getElementById("in7c").value);
    document.getElementById("out7").innerHTML = ascending(a, b, c);
}

function run8() {
    let a = parseFloat(document.getElementById("in8a").value);
    let b = parseFloat(document.getElementById("in8b").value);
    let c = parseFloat(document.getElementById("in8c").value);
    document.getElementById("out8").innerHTML = ascending2(a, b, c);
}

function run9() {
    let n = parseInt(document.getElementById("in9").value);
    let result = "";
    for (let i = -1; i <= n; i++) {
        if (isPrime(i) === true) {
            result += i + ". Yes\n";
        } else {
            result += i + ". No\n";
        }
    }
    document.getElementById("out9").innerText = result;
}

function run10() {
    let n = parseInt(document.getElementById("in10").value);
    document.getElementById("out10").innerHTML = isPalindrome(n);
}

function run11() {
    let x = parseInt(document.getElementById("in11").value);
    let result = "";
    for (let i = 2; i <= x; i++) {
        if (isPalindrome(i) && isPrime(i)) {
            result += i + "\n";
        }
    }
    document.getElementById("out11").innerText = result;
}
