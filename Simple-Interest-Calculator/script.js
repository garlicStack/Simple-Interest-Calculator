function compute()
{
    
    var principal = document.getElementById("principal").value;
    if(principal<1){
        alert("Enter a positive number");
        return false;
        console.log(principal);
        
    }
    var rate = document.getElementById("rate").value;
    console.log(rate);
    var years = document.getElementById("years").value;
    console.log(years);
    var  interest = principal*years*rate/100;
    console.log(interest);
    var year = new Date().getFullYear()+parseInt(years);
    console.log(year);
    var res = "If you deposit, <span class = 'highlight'>" + principal+
            "</span> ,<br> at an interest rate of <span class = 'highlight'>" +rate+
            "</span>. <br> You will receive an amount of <span class = 'highlight'>" +interest+
            "</span>, <br> in the year <span class = 'highlight'>"+year;
  document.getElementById("result").innerHTML = res;
    console.log("inner html executed");
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        