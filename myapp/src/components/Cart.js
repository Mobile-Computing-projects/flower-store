export default function Cart(props) {
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                    props.getCart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.flowerName}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity*item.flowerPrice}</td>
                        </tr>
                    ))
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>Grand Total</td>
                </tr>
            </table>
           
        </div>
    );
}