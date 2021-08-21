// total calculation 
function totalPrice(){
    let bestPrice= parseInt(document.getElementById('best-price').innerText);
    let memoryCost=parseInt(document.getElementById('memory-cost').innerText);
    let storageCost= parseInt(document.getElementById('storage-cost').innerText);
    let deliveryCharge= parseInt(document.getElementById('delivery-charge').innerText);
    let total=0;
    total= bestPrice+memoryCost+storageCost+deliveryCharge;
    document.getElementById('total-price').innerText= total
    document.getElementById('grand-total').innerText= total
}


// pomo code apply 
function applyPomo(){
    const total= parseInt(document.getElementById('total-price').innerText);
    const pomo = document.getElementById('pomo-input').value
    if(pomo== 'stevekaku'){
        let distount= (total/100)*20;
        let grandTotal=total-distount
        const right='✔ Pomo Code applied'
        document.getElementById('pomo-status').innerText= right;
        document.getElementById('pomo-status').style.color = "blue"
        document.getElementById('grand-total').innerText= grandTotal;
        document.getElementById('pomo-input').value= '';
   }
   else{
    const wrong='❌ Wrong Pomo Code'
    document.getElementById('pomo-status').innerText= wrong;
    document.getElementById('pomo-status').style.color = "red"
    document.getElementById('pomo-input').value= '';

   }
//    button disabled 
   const btnStatus= document.getElementById('pomo-status').innerText;
    if(btnStatus== '✔ Pomo Code applied'){
    document.getElementById('btn-status').disabled = true;

}

}

// Extra Memory Cost calculate
document.getElementById('select-opt').addEventListener('click', function(event){
    let option= event.target.innerText
    const mamoryType1= '8GB unified memory'
    const mamoryType2= '16GB unified memory'
    if(option==mamoryType2 && option!=mamoryType1){
        document.getElementById('memory-cost').innerText= '180'
    }
    else if (option!=mamoryType2 && option==mamoryType1){
        document.getElementById('memory-cost').innerText= '0'
    }
    totalPrice()
})

// Extra Storage Cost calculate
document.getElementById('select-opt').addEventListener('click', function(event){
    let option= event.target.innerText
    const storageType1= '256GB SSD storage'
    const storageType2= '512GB SSD storage'
    const storageType3= '1TB SSD storage'
    if(option==storageType3 && option!=storageType2 && option!=storageType1){
        document.getElementById('storage-cost').innerText= '180'
    }
    else if (option!=storageType3 && option==storageType2 && option!=storageType1){
        document.getElementById('storage-cost').innerText= '100'
    }
    else if (option!=storageType3 && option!=storageType2 && option==storageType1){
        document.getElementById('storage-cost').innerText= '0'
    }
    totalPrice()
})

// Delivery charge calculate
document.getElementById('select-opt').addEventListener('click', function(event){
    let option= event.target.innerText
    const proDelivery= 'Friday, Aug 21 Deliverry charge $20'
    const freeDelivery= 'Friday, Aug 25 FREE Prime Deliverry'
    if(option==proDelivery && option!=freeDelivery){
        document.getElementById('delivery-charge').innerText= '20'
    }
    else if (option!=proDelivery && option==freeDelivery){
        document.getElementById('delivery-charge').innerText= '0'
    }
    totalPrice()
})