import React, { useState } from "react";


const ProductCategoryRow = (props) => {
    const category = useState(props.category);
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
}

const ProductRow = (props) => {
    const product = useState(props.product);
    const name = props.product.stocked ? props.product.name : <span style={{ color : 'red' }}>{props.product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{props.product.price}</td>
      </tr>
    );
}

const ProductTable = (props) => {
    const rows = useState([]);
    let lastCategory = null;
    
    props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
           category={product.category}
           key={product.category} />
        );
      }
      rows.push(
        <ProductRow
        product={product}
        key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}

const SearchBar = () => {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
}

const FilterableProductTable = (props) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
}


export default FilterableProductTable;
