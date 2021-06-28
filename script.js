
// function to compute the interest and displaying the result
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // checking value of principal
    if(principal<=0){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
    }
    else {
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="if you deposit <span id='value'>"+principal+"</span>, </br>at an interest rate of <span id='value'>"+rate+"%</span>. </br>You will receive an amount of <span id='value'>"+interest+"</span>, </br> in the year <span id='value'>"+year+"</span> </br> </br>"
    }
}

// updating the value of rate 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        