 myDataShow =()=>{
 
    document.getElementById("demo").innerHTML ="";
    let cicleData =parseInt(document.getElementById("rangeInput").value) ;


    let div1 = parseInt(document.getElementById("rangeInput1").value);
    let div2 = parseInt(document.getElementById("rangeInput2").value);
    let description = "";

    for(let i = 1 ; i <= cicleData;i++){
        if(i%div1 == 0 && i%div2 == 0){
            description += "Bish-Bosh" + " ";
            SendElementData(description);
            description = "";
        }
        else if(i%div1 == 0 ){
            description+="Bish" + " "
            SendElementData(description);
            description = "";
        }
        else if(i%div2 == 0 ){
            description+="Bosh" + " "
            SendElementData(description);
            description = "";
        }
        else{
            description+=i + " "
            SendElementData(description); 
            description = "";
        }
    }




}




function SendElementData(text){
let demo = document.getElementById("demo");
let newElement = document.createElement("div");
newElement.classList.add("children");
newElement.innerHTML = text;
demo.appendChild(newElement);
}