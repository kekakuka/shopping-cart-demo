import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Table, TableHead, TableRow, TableCell, TableBody, Box, Button, Drawer } from '@material-ui/core';
import { connect } from 'react-redux';
import action from '../../store/action';
import { calculateTotalPrice } from '../../utils/cartFunctions';

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
});

function ShoppingCart(props) {
  console.log(props);
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const { listItems, remove_from_cart } = props;
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Table size='small' className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Price</TableCell>
            <TableCell align='left'>Quantity</TableCell>
            <TableCell align='left'>Sub</TableCell>
            <TableCell align='left'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map((item, index) => {
            const { name, price, quantity, id } = item;
            return (
              <TableRow key={index}>
                <TableCell>{name}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell>{price * quantity}</TableCell>
                <Button
                  onClick={() => {
                    remove_from_cart(id);
                  }}
                ></Button>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Box style={{ width: '100%', marginLeft: '60%' }}>TOTAL: {calculateTotalPrice(listItems)}</Box>
    </div>
  );

  return (
    <React.Fragment key={'right'}>
      <Button onClick={toggleDrawer('right', true)}>
        <ShoppingCartIcon />
      </Button>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </React.Fragment>
  );
}

export default connect((state) => state.cart, action.cart)(ShoppingCart);
