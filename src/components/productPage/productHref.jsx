import './cssfile/productHref.css';

export default function Href(){
    return(
        <p className="href">Home<b>{window.location.pathname}</b></p>
        
    )
}