//Code Question 1
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); //'Double Cheese Burger' 
// console.log(secondBurger.name); // 'Double Cheese Burger' 

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//1




//Code Question 2
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // "Salad"
// console.log(secondBurger.ingredients[0]); // "Salad"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//2,ma l'array viene condiviso tra i 2 oggetti



//Code Question 3 
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//Sono stati creati 9 oggetti in memoria,includendo anche gli oggetti maker e restaurant
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);






//Code Question 4
//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//Il metodo miglior metodo è usare lo Spread per portarsi dietro anche la funzione presente nelle proprietá.



//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//Il metodo miglior metodo è usare lo structuredClone(), per poter copiare gli oggetti complessi annidati,in questo caso, la Data.

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
