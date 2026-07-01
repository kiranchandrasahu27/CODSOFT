const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if(value === "C"){
            input = "";
            display.value = "";
        }

        else if(value === "="){

            try{
                input = eval(input).toString();
                display.value = input;
            }

            catch{
                display.value = "Error";
                input = "";
            }

        }

        else{

            input += value;
            display.value = input;

        }

    });

});