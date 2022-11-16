const currency_Element_One = document.querySelector("#currency-one");
const amount_Element_One = document.querySelector("#amount-one");
const currency_Element_Two = document.querySelector("#currency-two");
const amount_Element_Two = document.querySelector("#amount-two");
const rate_Element = document.querySelector("#rate");
const swap = document.querySelector("#swap");
async function calculate()
{
    const currency_One =currency_Element_One.value;
    const currency_Two = currency_Element_Two.value;
    try{
        const response = await 
                            fetch(`https://v6.exchangerate-api.com/v6/59f01e488d74c667da26ec0c/latest/${currency_One}`
                            );
        const data = await response.json();
        console.log(data.conversion_rates);
        const rate=data.conversion_rates[currency_Two];
        rate_Element.innerHTML = `1 ${currency_One} = ${rate} ${currency_Two}`;
        amount_Element_Two.value = (amount_Element_One.value * rate).toFixed(2);
    }
    catch(error)
    {
        console.log(error);
    }
}
currency_Element_One.addEventListener("change",calculate);
currency_Element_Two.addEventListener("change", calculate);
amount_Element_One.addEventListener("input",calculate);
amount_Element_Two.addEventListener("input",calculate);
swap.addEventListener("click",()=>{
    const temp = currency_Element_One.value;
    currency_Element_One.value = currency_Element_Two.value;
    currency_Element_Two.value = temp;
    calculate();
})
calculate();




