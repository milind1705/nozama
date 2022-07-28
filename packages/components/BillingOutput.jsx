const BillingOutput = ({ items }) => {
  let total = 0;
  let finalTotal = 0;
  let salesTax = 0;

  return (
    <div className="mt-16 ">
      <h1 className="text-3xl text-center">Itmes Output</h1>
      <div className="flex justify-center">

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Item Name</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((elm) => {
            total = total + parseFloat(elm.price);
            let itemPrice = parseFloat(elm.price);
            let importDuty = elm.imported == "yes" ? itemPrice * 0.05 : 0;
            let tax =
              elm.types === "food" ||
              elm.types === "book" ||
              elm.types === "medicle"
                ? 0
                : itemPrice * 0.1;

            finalTotal = finalTotal + parseFloat(elm.price) + importDuty + tax;
            salesTax = finalTotal - total;

            
              const finalPriceOfItem = parseFloat(elm.price) + importDuty + tax;
            return (
              <tr key={elm.index}>
                <td className="border px-4 py-2">{elm.item}</td>
                <td className="border px-4 py-2">
                  {finalPriceOfItem.toFixed(2)}
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              {" "}
              Total : {finalTotal.toFixed(2)}
              {" &"}{" "}
            </td>
            <td> Sales Tax : {salesTax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default BillingOutput;
