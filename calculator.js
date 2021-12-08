function proiz(){
    const check = /^[1-9][0-9]*$/;
    let num1, num2, num3;
    num1 = document.getElementById("n1").value;
    num1=parseInt(num1);
    num2 = document.getElementById("n2").value;
    num2=parseInt(num2);
    num3=num1*num2;

    if (!check.test(num1)|| !check.test(num2)) {
        alert('Вы сделали что-то не так!');
        document.getElementById('out').innerHTML="Произошла ошибка!";
    }
    else{
        document.getElementById('out').innerHTML=num3;
    }
}

    
window.addEventListener('DOMContentLoaded', function()  {
    console.log("DOM fully loaded and parsed");

    let buttonProiz = document.getElementById("proiz");
    buttonProiz.addEventListener("click",proiz);
})