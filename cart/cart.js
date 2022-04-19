function home(){
    location.href = "../index.html"
}

noCart = document.querySelector('.no-cart')
// if(localStorage.noCart === undefined || localStorage.noCart === '[]') {
//     noCart = []
// } else {
//     noCart = JSON.parse(localStorage.noCart) 
// }

if(localStorage.card !== undefined && localStorage.card !== '[]') {
    noCart.style.display = 'none'
} 
let card;
if(localStorage.card === undefined || localStorage.card === '[]') {
    card = []
} else {
    card = JSON.parse(localStorage.card) 
}

let main = document.querySelector('main')
product()
function product() {        
    if(card) {
        card.forEach( 
            (arg) => {
                let product = document.createElement('div');
                product.className = 'tooCart';

                product.insertAdjacentHTML('afterbegin', 
                    `
                    <div class="product-img">
                        <img src="${arg.productImg}" alt="">
                    </div>
        
                    <div class="product-info">
                        <div class="product-info-in">
                            <h3>${arg.productName}</h3>
                           <h5>${arg.priceName}</h5>
                            <p>${arg.productPrice}</p>
                        </div>
        
                        
                    </div>
                    `
                )

                main.appendChild(product)
            } 
        ) 
    } 
}
