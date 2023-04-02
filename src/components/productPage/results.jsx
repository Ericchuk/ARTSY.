import './cssfile/results.css'

export default function Result({
  products, currentPage}) {
  return (
    <div className="results">
      <p>Showing {currentPage}-{products.length / 6} of {products.length} results</p>
    </div>
  );
}
