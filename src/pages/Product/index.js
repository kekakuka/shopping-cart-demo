import React from 'react';
import products from '../../constants/products';
import ProductList from './ProductList';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
  },
}));

export default function Product() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <ProductList products={products} />
    </Container>
  );
}
