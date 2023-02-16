import Filter from './filter';
import Sort from './sort';
import './cssfile/filterAndSort.css';

export default function FilterAndSort(){
    return(
        <section className="filterAndSort">
            <Filter />
            <Sort />
        </section>
    )
}