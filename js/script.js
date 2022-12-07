window.addEventListener('storage', function (e) {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('b1');
});
localStorage.setItem('data', 5);
console.log(localStorage.getItem('data')); 


const a = [3, 4, 5];
localStorage.setItem('a', JSON.stringify(a));
let b = localStorage.getItem('a');
b = JSON.parse(b)
console.log(b);
console.log(b[2]);
console.log(typeof b);


const c = {
    hello: 5,
    k: 2,
    4: 'hi'
};

localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c');
d = JSON.parse(d)
console.log(d);

console.log(typeof d);


// Home work



const t = [12, ' hello kitty'];
document.querySelector('.b1').onclick =  function t1() {
    localStorage.setItem('5', t )
    console.log(localStorage.getItem('5'));
    document.querySelector('.out-1').innerHTML += localStorage.getItem(5) + ' <br>' ;
};

try {
    document.querySelector('.ok') = 0;
}
catch (err) {

    console.log('ok');
    document.querySelector('.out-1').innerHTML = 'err Work' + '<br>'
};

document.querySelector('.b1').oncontextmenu =  function t2() {
    localStorage.getItem('5', t )
   

    document.querySelector('.out-1').innerHTML += localStorage.removeItem('hello kitty') + ' <br>';
    return false;
    
};



// document.querySelector('.div2').addEventListener("touchstart", myTouch);
 
function myTouch1(event) {
    if (document.querySelector('.div1').addEventListener("touchstart", myTouch)) {
        function myTouch(event) {
            document.querySelector('.out-2').innerHTML = '1';
        }
    }
    else {
        document.querySelector('.div2').addEventListener("touchstart", myTouch2);
        function myTouch2(event) {
            document.querySelector('.out-2').innerHTML = '2'
        }
    }
    console.log(myTouch1);
   

    // document.querySelector('.out-2').innerHTML += 'Touch ' + '<br>' + event.touches.length;
    // console.log(event);
}



