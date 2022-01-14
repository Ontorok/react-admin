/**
 * Title: Product List page
 * Description: Product List page
 * Author: Nasir Ahmed
 * Date: 01-January-2022
 * Modified: 01-January-2022
 * */

import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { rows } from '../../fake-data/product';
import classes from './ProductList.module.css';

const ProductList = function () {
  const [state, setState] = useState(rows);

  const handleDelete = (id) => {
    setState(rows.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => (
        <div className={classes.productListItem}>
          <img className={classes.productListImage} src={params.row.img} alt={params.row.name} />
          {params.row.name}
        </div>
      )
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200
    },
    {
      field: 'stock',
      headerName: 'Stock',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      center: true
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      renderCell: (param) => (
        <>
          <Link to={`/product/${param.row.id}`}>
            <IconButton aria-label="edit">
              <EditOutlined color="success" />
            </IconButton>
          </Link>

          <IconButton aria-label="delete" onClick={() => handleDelete(param.row.id)}>
            <DeleteOutline color="error" />
          </IconButton>
        </>
      )
    }
  ];
  return (
    <div className={classes.productList}>
      <DataGrid
        autoPageSize
        rows={state}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
