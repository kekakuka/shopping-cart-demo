import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, Box, Typography, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
  },
}));

export default function ProductList({ products }) {
  const classes = useStyles();
  const handleAddToCart = () => {};
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Card>
              <CardContent>
                <img src={product.image} alt='product' />
                <Box>
                  <Typography variant='subtitle1' component='div'>
                    {product.name}
                  </Typography>
                  <Box>
                    <Typography variant='subtitle1' component='div'>
                      {'$' + Number(product.price).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Button
                    onClick={(e) => {
                      handleAddToCart();
                    }}
                  >
                    <ShoppingCartIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
