// get all products
export async function getProducts() {
  try {
    const response = await fetch(
      "https://admin.refabry.com/api/all/product/get"
    );
    const data = await response.json();
    return data.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

// get product details by product id
export async function getProductById(productId) {
  const products = await getProducts();
  const productDetails = products.find((p) => p.id === Number(productId));
  return productDetails;
}
