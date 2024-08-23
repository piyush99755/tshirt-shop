function OrderSummary({itemsInBag}) {
    return (
        <>
          <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1x Joker</td>
                            <td>£ 44.99</td>
                        </tr>
                        
                        <tr>
                            <th>Total</th>
                            <th>£ 44.99</th>
                        </tr>
                    </tbody>
                </table>
            </section>

        </>
    )
}

export default OrderSummary;