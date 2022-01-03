const dummySubCategories = [
    { name: "Dummy" },
    { name: "Dummy" },
    { name: "Dummy" },
    { name: "Dummy" },
    { name: "Dummy" },
]

const dummy1Product = {
    name: "VL7N low-top sneakers",
    image: "https://cdn-images.farfetch-contents.com/15/35/02/07/15350207_27859457_1000.jpg",
    price: "$1,800",
    category: "Shoes",
    brand: 'Valentino Garavani'
}

const dummy2Product = {
    name: "VL7N slip-on sneakers",
    image: "https://cdn-images.farfetch-contents.com/15/72/15/62/15721562_30460363_1000.jpg",
    price: "$1,518",
    category: "Shoes",
    brand: 'Valentino Garavani'
}

export const categoriesData = [
    {
        name: "Sale",
        color: "red",
        subCategories: [
            {
                name: "Clothing",
                products: [
                    dummy1Product,
                    dummy2Product,
                    dummy1Product,
                    dummy2Product,
                    dummy1Product,
                    dummy2Product,
                ],
            },
            { name: "Activewear" },
            { name: "Shoes" },
            { name: "Bags" },
            { name: "Accessories" },
            { name: "Underwear & Socks" },
            { name: "Fine Watches" },
            { name: "Jewellers" },
            { name: "Lifestyle" },
            { name: "Pre-owned" },
            { name: "Sneakers" },
        ],
    },
    {
        name: "Clothing",
        subCategories: [
            { name: "Coats" },
            { name: "Denim" },
            { name: "Jackets" },
            { name: "Jumpsuits" },
            { name: "Pants" },
            { name: "Polo Shirts" },
            { name: "Shirts" },
            { name: "Shorts" },
            { name: "Suits" },
            { name: "Sweatshirts & Knitwear" },
            { name: "Swimwear" },
            { name: "T-Shirts & Vests" },
        ],
    },
    { name: "Activewear", subCategories: dummySubCategories },
    { name: "Shoes", subCategories: dummySubCategories },
    { name: "Bags", subCategories: dummySubCategories },
    { name: "Accessories", subCategories: dummySubCategories },
    { name: "Underwear & Socks", subCategories: dummySubCategories },
    { name: "Fine Watches", subCategories: dummySubCategories },
    { name: "Jewellers", subCategories: dummySubCategories },
    { name: "Lifestyle", subCategories: dummySubCategories },
    { name: "Pre-owned", subCategories: dummySubCategories },
    { name: "Sneakers", subCategories: dummySubCategories },
]
