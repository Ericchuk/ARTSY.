import './cssfile/results.css'

export default function Result({
  productsArray, currentPage}) {
  return (
    <div className="results">
      <p>Showing {currentPage}-{productsArray.length / 6} of {productsArray.length} results</p>
    </div>
  );
}
