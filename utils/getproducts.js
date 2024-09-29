

export default async function Getproduct() {
try {
    const product = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json());
    return product;
} catch (error) {
    throw Error("Something went wrong");
}
}


