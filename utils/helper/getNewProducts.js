function getNewArrivals(allProducts) {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);

  const newArrivals = allProducts.filter((product) => {
    const updatedAtParts = product.updatedAt.split("/");
    const updatedAt = new Date(
      `${updatedAtParts[1]}/${updatedAtParts[0]}/${updatedAtParts[2]}`
    );
    return updatedAt >= tenDaysAgo;
  });

  return newArrivals;
}

export default getNewArrivals;
