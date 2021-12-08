import { CalendarToday, MailOutline, PermIdentity, PhoneOutlined } from '@mui/icons-material';
import React from 'react';
import classes from './User.module.css';

const User = function () {
  return (
    <div className={classes.user}>
      <div className={classes.userTitleContainer}>
        <h1>Edit User</h1>
        <button type="button" className={classes.userAddBtn}>
          ADD
        </button>
      </div>

      <div className={classes.userContainer}>
        <div className={classes.userShow}>
          <div className={classes.userShowTop}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="username"
              className={classes.userShowImg}
            />
            <div className={classes.userShowTopTitle}>
              <span className={classes.userShowUserName}>Nasir</span>
              <span className={classes.userShowUserTitle}>Software Developer</span>
            </div>
          </div>
          <div className={classes.userShowBottom}>
            <span className={classes.userShowBottomTitle}>Account Details</span>
            <div className={classes.userShwoInfo}>
              <PermIdentity className={classes.userShwoInfoIcon} />
              <span className={classes.userShwoInfoTitle}>nasir</span>
            </div>
            <div className={classes.userShwoInfo}>
              <CalendarToday className={classes.userShwoInfoIcon} />
              <span className={classes.userShwoInfoTitle}>01-Dec-2000</span>
            </div>
            <span className={classes.userShowBottomTitle}>Contact Details</span>
            <div className={classes.userShwoInfo}>
              <MailOutline className={classes.userShwoInfoIcon} />
              <span className={classes.userShwoInfoTitle}>nasir@mail.com</span>
            </div>
            <div className={classes.userShwoInfo}>
              <PhoneOutlined className={classes.userShwoInfoIcon} />
              <span className={classes.userShwoInfoTitle}>01911612755</span>
            </div>
          </div>
        </div>
        <div className={classes.userUpdate} />
      </div>
    </div>
  );
};

export default User;
