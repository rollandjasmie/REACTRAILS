import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { userLogoutAttempt } from '../../redux/Auth/auth.action';
import { connect } from 'react-redux';


 function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    console.log(props);
    props.userLogoutAttempt()
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Mon profil
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        <MenuItem > <a  className ="hover:no-underline"href='/EditProfil'>My account</a></MenuItem>
        <MenuItem onClick={() => logout()}>Déconnecter</MenuItem>
      </Menu>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogoutAttempt: () => dispatch(userLogoutAttempt())
    }
}

export default connect(null, mapDispatchToProps)(SimpleMenu);