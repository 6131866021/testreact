function myfunction() {
    var x = 1024;   // min value
    var y = 9999;   // max value
    
    var deg = Math.floor(Math.random() * (x-y)) + y;
    console.log(deg);
    document.getElementById("box").style.transform = "rotate("+deg+"deg)";

    var element = documet.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function() {
        element.classList.add('animate');
    }, 5000);
}