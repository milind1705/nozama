import { useEffect, useState } from "react";

const BillingComponent = ({ items, setItems }) => {
  // const itemList = [
  //     {id:1,
  //     item: 'book',
  //      quantity:1,
  //      price:25.12,
  //      type:'book',
  //      imported: 'no'
  //         },
  //     {id:2,
  //     item: 'chocolate box',
  //         quantity:1,
  //         price:10.12,
  //         type:'food',
  //         imported: 'no'
  //     },
  //      {id:3,
  //         item: "novel",
  //         quantity:1,
  //         price:50,
  //         type:'book',
  //         imported: 'yes'
  //     },
  //     {id:4,
  //     item: 'music cd',
  //     quantity:1,
  //     price:70,
  //     type:'none',
  //     imported: 'no'
  //     },

  // ];
  // let itemDetails ={
  //     itemName: item,
  //     price:price,
  //     type:type,
  //     imported:imported
  // }

  const addItems = (e) => {
    e.preventDefault();

    setItems([
      ...items,
      {
        item: e.target.item.value,
        price: e.target.price.value,
        types: e.target.types.value,
        imported: e.target.imported.value,
      },
    ]);
    e.target.value =''
  };

  return (
    <div className="pl-24">
      <h1 className="text-3xl text-center mt-8">Billing Form</h1>
      <div className="m-8 w-full ">
        <form
          className="w-full max-w-lg flex flex-row gap-4 text-center"
          onSubmit={addItems}
        >
          <div className="gap-4 flex flex-row py-2">
            <label className="py-2 flex flex-row" htmlFor="item">Item Name:</label>
            <input className="rounded" required name="item" type="text" />
          </div>
          <div className="gap-4 flex flex-row py-2">
            <label className="py-2" htmlFor="price">Price:</label>
            <input className="rounded" required name="price" type="number" step="any"/>
          </div>
          <div className="gap-4 flex flex-row py-2">
            <label className="py-2" htmlFor="type">Type:</label>
            <select className="rounded" name="types" id="" required>
              <option value="none">Non</option>
              <option value="food">Food</option>
              <option value="medicle">Medicle Poducts</option>
              <option value="book">Book</option>
            </select>
          </div>
          <div className="gap-4 flex flex-row py-2">
            <label className="py-2" htmlFor="type">Imported:</label>
            <select className="rounded" name="imported" id="" required>
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <input 
            className="rounded bg-black text-white w-12"
            type="submit"
            value={"add"}
          />
        </form>
      </div>
      <h1 className="text-3xl text-center">Itmes Input</h1>
      <div className="w-full px text-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Item Name</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((elm) => {
              return (
                <tr key={elm.index}>
                  <td className="border px-4 py-2">{elm.item}</td>
                  <td className="border px-4 py-2">{elm.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingComponent;
