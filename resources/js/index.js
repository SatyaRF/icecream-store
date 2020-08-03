const productContainer = document.querySelector('#productContainer');
const PRODUCTLIST = [
    {
        name: 'Mango Ice Cream',
        img: 'https://via.placeholder.com/150',
        price: 100,
    },

    {
        name: 'Vanilla Ice Cream',
        img: 'https://via.placeholder.com/150',
        price: 200,
    },

    {
        name: 'Chocolate Ice Cream',
        img: 'https://via.placeholder.com/150',
        price: 300,
    },

    {
        name: 'Fruits Ice Cream',
        img: 'https://via.placeholder.com/150',
        price: 200,
    },
];

const createHTML = () => {
    const HTMLdata = PRODUCTLIST.map((el) => {
    return `<li>
         <img src="${el.img}" alt="${el.name}"></img>
        <h3>${el.name}</h3>
        <p>Price: <span>${el.price}</span></p>
        <button class='red btn'>ADD</button>
    </li>`
    });
    productContainer.innerHTML = HTMLdata;
    btnEventClick();
}
    
    //productContainer.insertAdjacentElement('afterbegin',createHTML);

const btnEventClick = () => {
    const btn = document.querySelectorAll('.btn');
    for (let index = 0; index < btn.length; index++) {
        btn[index].addEventListener('click', (e) => {
            e.preventDefault();
            e.target.setAttribute('disabled', true);
        })
        
    }
    
}

createHTML();

//console.log(createHTML);