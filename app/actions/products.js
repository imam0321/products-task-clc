"use server";

// get all products
export async function getProducts() {
  try {
    const response = await fetch("https://admin.refabry.com/api/all/product/get");
    const data = await response.json();
    return data.data.data;
  } catch (error) {
    throw new Error(error);
  }
}

// get product details by product id
export async function getProductById(productId) {
  try {
    const products = await getProducts();
    const productDetails = products.find((p) => p.id === Number(productId));
    return productDetails;
  } catch (error) {
    throw new Error(error);
  }
}

// Post place orders
export async function postPlaceOrder(data) {
  try {
    const response = await fetch(
      "https://admin.refabry.com/api/public/order/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      const result = await response.json();
      return result?.message;
    } else {
      const errorData = await response.json();
      throw new Error(errorData?.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
