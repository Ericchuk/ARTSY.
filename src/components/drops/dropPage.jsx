import DropDescription from './dropDescription';
import Drops from './drops';
import Sort from '../productPage/sort';
import Href from '../productPage/productHref'
import './cssfile/dropPage.css';

export default function DropPage(){
    return(
        <section className="drop-page">
            { window.innerWidth > 699 ? <Href /> : "" }
            <DropDescription />
            <Sort />
            <Drops />
        </section>
    )
}