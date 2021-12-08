function proiz(){
    const check = /^[1-9][0-9]*$/;
    let num1 = document.getElementsByName("n1");
    let num2 = document.getElementsByName("n2");
    
    if (!check.test(num1[0].value)|| !check.test(num2[0].value)) {
        document.getElementById('out').innerHTML='Вы сделали что-то не так!';
    }
    else{
        let num3 = document.getElementById("out");
        num1[0] = Number.parseInt(num1[0]);
        num2[0] = Number.parseInt(num2[0]);
        var result = num1[0].value * num2[0].value;
        num3.innerHTML = Math.abs(result);   
    }
}

    
window.addEventListener("DOMContentLoaded", function(event)  {
    console.log("DOM loaded");

    let buttonProiz = document.getElementById("proiz");
    buttonProiz.addEventListener("Click",proiz);
})