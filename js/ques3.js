function greet(name,message)
{

    if(name === "juan" && message === "goodmorning")
    {
        return "goodmorning juan";
    }
    else
    {
        return "error";
    }
}

console.log(greet("pedro","goodmorning"));