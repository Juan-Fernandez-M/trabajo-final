import Cardproducts from "./Products";

const Productlist = ({products, title}) => {
    console.log(products, "list");
    return ( 
        <>
        <h1 className="title" id="title">{title} </h1>
            <div className="container">
                <div className="row">
                    {products.map((product)=> (
                        <Cardproducts 
                        key={product._id} 
                        product={product}
                        />
                    ))}
                </div>
            </div>
        </>

            );
}


export default Productlist;