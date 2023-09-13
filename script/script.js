function confirmPassword()
{
    let container = document.querySelectorAll(".test");
    let p = document.querySelector("#pword");
    let cp = document.querySelector("#cpword");
    let error = document.querySelector("#error");

    if(p.value != cp.value)
    {
        p.style.borderColor = "red";
        p.style.borderRadius = "3px";
        cp.style.borderColor = "red";
        cp.style.borderRadius = "3px";
        container.forEach(element => {
            element.style.paddingBottom = "0px";
        });
        error.innerText = "* Password did not match!";
    }
    else
    {
        p.style.borderColor = "";
        p.style.borderRadius = "";
        cp.style.borderColor = "";
        cp.style.borderRadius = "";
        container.forEach(element => {
            element.style.paddingBottom = "20px";
        });
        error.innerText = "";
    }
}

