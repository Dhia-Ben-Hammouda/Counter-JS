let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let r = document.getElementById("reset");

let number = document.getElementById("number");


let x=0;

increment.addEventListener("click",add);
decrement.addEventListener("click",remove);
r.addEventListener("click",res);

function add()
{
    x++;
    if(x == 0)
    {
        number.style.color="black";
    }
    else if(x > 0)
    {
        number.style.color="green";
    }
    number.innerHTML=x;
}

function remove()
{
    x--;
    if(x == 0)
    {
        number.style.color="black";
    }
    else if(x < 0)
    {
        number.style.color="red";
    }
    number.innerHTML=x;
}

function res()
{
    x=0;
    number.style.color="black";
    number.innerHTML=x;
}
