import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import classes from './UserList.module.css';

const columns = [
  {
    field: 'username',
    headerName: 'User name',
    width: 150,
    renderCell: (params) => (
      <div className={classes.userListUser}>
        <img className={classes.userListImage} src={params.row.avatar} alt={params.row.username} />
        {params.row.username}
      </div>
    )
  },
  // { field: 'avatar', headerName: 'Avatar', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 150
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    center: true
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
    renderCell: (param) => (
      <button type="button" onClick={() => console.log(param.row.username)}>
        add
      </button>
    )
  }
];

const rows = [
  {
    id: 1,
    username: 'nasir',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    email: 'nasir@mailcom',
    transaction: '$ 789',
    status: 'active'
  },
  {
    id: 2,
    username: 'rima',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    email: 'rima@mail.com',
    transaction: '$ 741',
    status: 'inactive'
  }
];

const UserList = function () {
  return (
    <div className={classes.userList}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
