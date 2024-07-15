async function getData() {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()

    let result = data.map((data) => {
        return data.price
    })

    let result1 = data.filter((data) => {
        return data.price < 0
    })

    let result2 = data.find((data) => {
        return data.price == 22.3
    })

    // const initialValue = 0;
    // const sumWithInitial = result.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);

    // console.log(sumWithInitial)
}

getData()

let arr = [1, 2, 3, 4]

let sum = arr.reduce((total, currentElement) => currentElement + total)

console.log(sum)