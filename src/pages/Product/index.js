import React from 'react';
import products from '../../constants/products';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
  },
}));

export default function Product() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        {products.map((product, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Card>{product.name}</Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
