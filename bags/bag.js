function cart(){
    location.href = "../cart/cart.html"
}
function home(){
    location.href = "../index.html"
}
function add(){
   
}

let card;
if(localStorage.card === undefined || localStorage.card === '[]') {
    card = []
} else {
    card = JSON.parse(localStorage.card) 
}
// document.addEventListener('click', (par) =>{
//     if(par.target.id === 'add-cart'){
//         let uzii = '';

//         card.forEach((arg)=> {
//             if(arg.productId == productId){
//                 uzii = 'already added'

//             }
    
//         })
//         if(uzii ===''){
//             chosenProductPrice = par.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
//             console.log(par.target.parentElement.firstElementChild.nextElementSibling)
//             chosenProductName = par.target.parentElement.firstElementChild.nextElementSibling.innerText;
//             card.push({productId: productId, count: count.innerText, productName: chosenProductName, productPrice: chosenProductName})
//         }else{
//             alert('бүтээгдхүүн')
//         }
//         localStorage.card = JSON.stringify(card)
//         uzii = '';
//     }

// })
document.addEventListener('click', (par) => {
    if(par.target.id === 'add-cart') {
        let uzii = '';
        sagsandNemeh = document.querySelector('#add-cart')
        // count = document.querySelector('.count')
        let productId = sagsandNemeh.parentElement.parentElement.firstElementChild;


        card.forEach((arg) => {
            if(arg.productId == productId) {
                uzii = 'already added'
            } 
        })
        
        if(uzii === '') {
            let chosenProductImgSrc;
            chosenProductImgSrc = par.target.parentElement.parentElement.parentElement.firstElementChild.src.toString()
            cosenProductPrice = par.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText
            chosenProductPriceName = par.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
            
            // console.log(par.target.parentElement.firstElementChild.nextElementSibling)
            chosenProductName = par.target.parentElement.parentElement.firstElementChild.innerText;
            card.push({productId: productId, productName: chosenProductName, productPrice: cosenProductPrice, productImg: chosenProductImgSrc,  priceName: chosenProductPriceName})
        } else {
            alert('Products in the cart')
        }
        localStorage.card = JSON.stringify(card)
        uzii = '';
    }
})
document.querySelector("#add-cart").parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText