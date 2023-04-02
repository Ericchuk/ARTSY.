import { useState,useContext } from 'react';
import { ProductContext } from '../productContectApi';
import { Link } from 'react-router-dom'
import Href from './productHref';
import Result from './results';
import FilterAndSort from './filterAndSort';
import Product from './products';


export default function ProductPage() {
  const [postsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const {products} = useContext(ProductContext)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];

const productss = currentPosts.map((product) => {
    return(
        <div key={product.id}>
          <Link to={`/marketplace/${product.id}`}>
            <img src={product.img} alt={product.name} />
            <aside>
                <p>{product.name}</p>
                <p>${product.price}0</p>
            </aside>
          </Link>
            
            
        </div>
    )
})




for (let i = 1; i <= Math.ceil(products.length / postsPerPage); i++) {
  pageNumbers.push(i);
}

//change page
function paginate(pageNumber){
  setCurrentPage(pageNumber)
}

function next(e){
  e.preventDefault();
  if(products.length / 6 === 6 && currentPage === 6){
    // setDone(false)
    return;
  }else{
    setCurrentPage(currentPage + 1);
    setDone(true);
  }
}


function prev(e){
  e.preventDefault();
  if(products.length / 6 === 6 && currentPage === 1){
    setDone(false)
    return;
  }else{
    setCurrentPage(currentPage - 1);
    setDone(true);
  }
}

const [done, setDone] =  useState(false);

  return (<section>
    <Href />
    <Result products={products} currentPage={currentPage}/>
    <FilterAndSort />
    <Product products={productss} currentPosts={currentPosts} paginate={paginate} pageNumbers={pageNumbers} currentPage={currentPage} next={next} prev={prev} done={done}/>
  </section>) 
  
}


