import Href from './productHref';
import Result from './results';
import FilterAndSort from './filterAndSort';
import Product from './products';
import BooleanEgyptian from '../img/Rectangle 308.png';
import RoadToEgypt from '../img/Rectangle 62.png';
import Blanc from '../img/Rectangle 62 (1).png';
import Ellipsia from '../img/Rectangle 62 (2).png';
import Lawmakers from '../img/Rectangle 62 (3).png';
import {useState} from 'react';


export default function ProductPage() {
  const [postsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const productsArray = [
    {id:0, img:BooleanEgyptian, name: 'Boolean Egyptian', price:21.00},
    {id:2, img:RoadToEgypt, name: 'Road To Egypt', price:11.00},
    {id:3, img:Blanc, name: 'Blanc', price:11.00},
    {id:4, img:Ellipsia, name: 'Ellipsia', price:11.00},
    {id:5, img:Lawmakers, name: 'The Lawmakers', price:30.00},
    {id:6, img:RoadToEgypt, name: 'Boolean Egyptian', price:21.00},
    {id:7, img:BooleanEgyptian, name: 'Road To Egypt', price:11.00},
    {id:8, img:Ellipsia, name: 'Blanc', price:11.00},
    {id:9, img:Blanc, name: 'Ellipsia', price:11.00},
    {id:10, img:BooleanEgyptian, name: 'The Lawmakers', price:30.00},
    {id:11, img:Lawmakers, name: 'Boolean Egyptian', price:21.00},
    {id:12, img:Blanc, name: 'Road To Egypt', price:11.00},
    {id:13, img:RoadToEgypt, name: 'Blanc', price:11.00},
    {id:14, img:Lawmakers, name: 'Ellipsia', price:11.00},
    {id:15, img:Ellipsia, name: 'The Lawmakers', price:30.00},
    {id:16, img:Blanc, name: 'Boolean Egyptian', price:21.00},
    {id:17, img:Lawmakers, name: 'Road To Egypt', price:11.00},
    {id:18, img:BooleanEgyptian, name: 'Blanc', price:11.00},
    {id:19, img:Ellipsia, name: 'Ellipsia', price:11.00},
    {id:20, img:RoadToEgypt, name: 'The Lawmakers', price:30.00}
]
  {console.log(productsArray.length)}
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsArray.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];

const products = currentPosts.map((product) => {
    return(
        <div key={product.id}>
            <img src={product.img} alt={product.name} />
            <aside>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </aside>
            
        </div>
    )
})




for (let i = 1; i <= Math.ceil(productsArray.length / postsPerPage); i++) {
  pageNumbers.push(i);
}

//change page
function paginate(pageNumber){
  setCurrentPage(pageNumber)
}

  return (<section>
    <Href />
    <Result productsArray={productsArray} />
    <FilterAndSort />
    <Product products={products} currentPosts={currentPosts} paginate={paginate} pageNumbers={pageNumbers} currentPage={currentPage}/>
  </section>) 
  
}


