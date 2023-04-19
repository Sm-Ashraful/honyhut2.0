export function getNewArrivals(products) {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

  const newArrivals = products.filter((product) => {
    const updatedAt = new Date(product.updatedAt);
    return updatedAt >= tenDaysAgo;
  });

  return newArrivals;
}
