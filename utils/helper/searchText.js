function getProductFromSearch(allProducts, searchText) {
  const results = [];

  const removeSpecialCharacters = (str) => {
    return str.replace(/[^\w]/gi, "");
  };
  if (searchText) {
    allProducts.map((item, idx) => {
      if (
        removeSpecialCharacters(item.name)
          .toLowerCase()
          .includes(removeSpecialCharacters(searchText).toLowerCase())
      ) {
        results.push(item);
      }
    });
  }
  if (results.length === 0) {
    allProducts.map((item, idx) => {
      if (idx < 8) {
        results.push(item);
      }
    });
  }
  return results;
}
export default getProductFromSearch;
