// for memory 
function totalMemoryCost (isIncreasing){
    const memoryText = document.getElementById("memory-cost");
    let memoryPrice =parseInt( memoryText.innerText);

    if(isIncreasing == true){
        memoryText.innerText = 180;
    }
    else if(isIncreasing == false){
        memoryText.innerText = 0;
    }
    calculateTotal ();
}
document.getElementById("memory-button-16gb").addEventListener("click", function(){
    totalMemoryCost(true)
   
})
document.getElementById("memory-button-8gb").addEventListener("click", function(){
   totalMemoryCost(false);
    
})
// for Storage 
function totalStorageCost (isIncreasing){
    const memoryText = document.getElementById("storage-cost");
    let memoryPrice =parseInt( memoryText.innerText);

    if(isIncreasing == true){
        memoryText.innerText =  0;
    }
    else if(isIncreasing == false){
        memoryText.innerText = 100
    }
    else{
         memoryText.innerText = 180
    }
    calculateTotal ()
}
document.getElementById("storage-button-256gb").addEventListener("click", function(){
    totalStorageCost(true)
   
})
document.getElementById("storage-button-512gb").addEventListener("click", function(){
   totalStorageCost(false);
    
})
document.getElementById("storage-button-1tb").addEventListener("click", function(){
   totalStorageCost();
    
})
// delivary charge Option 
function totalDeliveryCost (isIncreasing){
    const memoryText = document.getElementById("delivary-cost");
    let memoryPrice = parseInt( memoryText.innerText);

    if(isIncreasing == true){
        memoryText.innerText =  0;
    }
    else if(isIncreasing == false){
        memoryText.innerText = 20;
    }
    calculateTotal ()
}
document.getElementById("delivary-free").addEventListener("click", function(){
    totalDeliveryCost(true);
   
});
document.getElementById("delivery-cost").addEventListener("click", function(){
    totalDeliveryCost(false);
    
});
// total price section 
function getInputValue (product){
    const productInput = document.getElementById(product+"-cost");
    const productName = parseInt(productInput.innerText);
    return productName;
}
function calculateTotal (){
    const bestPriceText = document.getElementById("best-price")
    const bestPrice =parseInt(bestPriceText.innerText);

    const memoryCostToyal = getInputValue("memory");
    const StorageCostTotal = getInputValue("storage");
    const delivaryCostTotal = getInputValue("delivary");
    const subTotal = bestPrice +  memoryCostToyal + StorageCostTotal + delivaryCostTotal;
    document.getElementById("total-product-price").innerText = subTotal;
}


























