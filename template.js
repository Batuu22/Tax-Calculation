let rate1=document.getElementById("rate1_id")
rate1.addEventListener("click",function(e){
    let clickedTarget1=e.target.innerHTML;
    taxRate_id.value=clickedTarget1;
});
let rate8=document.getElementById("rate8_id")
rate8.addEventListener("click",function(e){
    let clickedTarget8=e.target.innerHTML
    taxRate_id.value=clickedTarget8;
});
let rate18=document.getElementById("rate18_id")
rate18.addEventListener("click",function(e){
    let clickedTarget18=e.target.innerHTML;
    taxRate_id.value=clickedTarget18;
});
let rateYuzde=document.getElementById("rate_yuzdeGir")
rateYuzde.addEventListener("click",function(){
    taxRate_id.focus(); // input alanına odaklanma
});

let taxRateControl=document.getElementById("taxRate_id")
taxRateControl.addEventListener("keydown",function(e){

    //Sadece Sayıları ve Silme olayını kontrol etmesi için bu ifadeyi kullandık
    if(e.key!='Backspace' && e.key!='delete' && e.key!='%' && e.key!='0' && e.key!='1' && e.key!='2' && e.key!='3' && e.key!='4' && e.key!='5' && e.key!='6' && e.key!='7' && e.key!='8' && e.key!='9'){
        e.preventDefault();
    }
});

let totalIdControl=document.getElementById("total_id")
totalIdControl.addEventListener("keydown",function(e){

    //Sadece Sayıları ve Silme olayını kontrol etmesi için bu ifadeyi kullandık
    if(e.key!='Backspace' && e.key!='delete' && e.key!='0' && e.key!='1' && e.key!='2' && e.key!='3' && e.key!='4' && e.key!='5' && e.key!='6' && e.key!='7' && e.key!='8' && e.key!='9'){
        e.preventDefault();
    }
});

let vergiIncludeButton=document.getElementById("vergiDahil_id");
vergiIncludeButton.addEventListener("click",function(e){
    let taxRate=taxRate_id.value;
    // '%' işaretini sildik, yeni bir içerik oluşturduk.
    if(taxRate.startsWith("%")){
        taxRate=taxRate.substring(1);
    }
    let taxRateNew=parseFloat(taxRate);
    price=parseFloat(total_id.value);
    document.getElementById("araToplam_id").innerHTML=price + "₺";
    document.getElementById("vergi_id").innerHTML=price*taxRateNew/100 + "₺";
    document.getElementById("genelToplam_id").innerHTML=price+(price*taxRateNew/100) + "₺";
});

let totalControl=document.getElementById("vergiHaric_id")
totalControl.addEventListener("click",function(e){
    document.getElementById("vergi_id").innerHTML="₺0,00";
    document.getElementById("genelToplam_id").innerHTML=price + "₺";
});

sifirlaButton=document.getElementById("sifirla_id")
sifirlaButton.addEventListener("click",function(e){
    document.getElementById("taxRate_id").value="";
    document.getElementById("total_id").value="";
    document.getElementById("araToplam_id").innerHTML="₺0,00";
    document.getElementById("vergi_id").innerHTML="₺0,00";
    document.getElementById("genelToplam_id").innerHTML="₺0,00";
});