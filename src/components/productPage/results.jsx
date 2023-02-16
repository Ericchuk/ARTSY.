export default function Result({
  productsArray,
  currentPosts,
  paginate,
  pageNumbers,
  currentPage
}) {
  return (
    <div className="results">
      <p>Showing 1-5 of {productsArray.length} results</p>
    </div>
  );
}
