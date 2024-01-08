// Lista de productos (simulación, en una aplicación real se obtendría de una base de datos)
const products = [
    { name: "Televisor", category: "electrodomesticos" },
    { name: "Lavadora", category: "electrodomesticos" },
    { name: "Camiseta", category: "ropa" },
    { name: "Pantalón", category: "ropa" },
    // Agrega más productos según tus necesidades
];

// Función para inicializar la lista de productos
function initProductList() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Limpiar la lista

    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - ${product.category}`;
        productList.appendChild(listItem);
    });
}

// Función para filtrar productos por categoría
function filterProducts() {
    const categoryFilter = document.getElementById("categoryFilter");
    const selectedCategory = categoryFilter.value;

    const filteredProducts = selectedCategory === "todos"
        ? products
        : products.filter(product => product.category === selectedCategory);

    updateProductList(filteredProducts);
}

// Función para actualizar la lista de productos después de aplicar el filtro
function updateProductList(filteredProducts) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Limpiar la lista

    filteredProducts.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - ${product.category}`;
        productList.appendChild(listItem);
    });
}

// Inicializar la lista de productos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    initProductList();
});
