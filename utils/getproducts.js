

export default async function Getproduct() {
try {
    const product = await fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json());
    return product;
} catch (error) {
    throw Error("Something went wrong");
}
}


