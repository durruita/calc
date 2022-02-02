function calculate(){
    console.log("Calculator function");
    let num1=Number(prompt("Enter the first number:"));
    console.log(num1);
    let num2=Number(prompt("Enter the second number:"));
    console.log(num2);

    let sum,subs,mult,div;
    sum=num1+num2;
    console.log(sum);
    document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum}</p>
    <p>${num1} - ${num2} = ${subs}</p>
    <p>${num1} * ${num2} = ${mult}</p>
    <p>${num1} / ${num2} = ${div}</p>
    `;
    subs=num1-num2;
    console.log(subs);
}