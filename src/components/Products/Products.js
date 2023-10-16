
import { Link } from "react-router-dom";

const Cardproducts = ({product}) => {

    
    return (
        
        <div className="producto-detalle col-sm-4">
            <Link className="link" to={`/detail/${product._id}`}>
                <img className="IMG" src= {`${product.image}`} alt=" Product img" />
                    <h3 className="Title">{product.name}</h3>
                    <p className="Price">${product.price}</p>
            </Link>
                
        </div>
                
    );
};
export default Cardproducts;