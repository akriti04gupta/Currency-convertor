const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

options=document.querySelectorAll(".exchange select");
btn=document.querySelector("button")

// adding option in dropdown

for(let select of options)
{
    for(code in countryList)
    {
        newOption=document.createElement("option");
        select.append(newOption);
        newOption.innerText=code;
        newOption.val=code;
        if(select.name==="from" && code==="EUR")
        {
            newOption.selected="selected";
        }
        if(select.name==="to" && code ==="INR")
        {
            newOption.selected="selected";
        }
    }
    select.addEventListener("change",(element)=>{
        flag(element.target);

    });
}

//changing flags in dropdown

function flag(element)
{
    console.log(element);
    code=element.value;
    console.log(code);
    countryCode=countryList[code];
    console.log(countryCode);
    newSrc=`https://flagsapi.com/${countryCode}/shiny/64.png`;
    let image=element.parentElement.querySelector("img");
    image.src=newSrc;

}

// submiting the form


const exchange = async () => {
    let data = document.querySelector("input");
    let amount = data.value;
    if (amount === "" || amount < 1) {
      amount = 0;
      data.value =0;
    }
}
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    exchange();
  });  


// calling of API

fromVal=document.querySelector(".from select");
toVal=document.querySelector(".to select");
const URL=`${BASE_URL}/${fromVal.value}/${toVal.value}.json`;
// let response= await fetch(URL);
// let data= await response.json;
//  let rate = data[toVal.value];

//  finalAmt= amount*rate;

const msg=document.querySelector(".text");
// msg.innerText=`${amount} ${fromVal.value} = ${finalAmt} ${toVal.value}`;