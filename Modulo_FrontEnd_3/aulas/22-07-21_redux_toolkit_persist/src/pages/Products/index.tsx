import {
  Box, Button, Grid, TextField, Typography,
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, selectorProduct } from '../../store/modules/products/productsSlice';

export function Products() {
  const products = useSelector(selectorProduct.selectAll);
  const totalProducts = useSelector(selectorProduct.selectTotal);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const onSaveProduct = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addProduct({
      id: totalProducts + 1,
      title: name,
      price,
    }));

    setName('');
    setPrice(0);
  };

  useEffect(() => {
    console.log(totalProducts);
  }, [totalProducts]);

  return (
    <Grid container px={1}>
      <Grid item xs={12}>
        <Typography variant="h2" color="primary">Products</Typography>
      </Grid>

      <Grid item xs={12}>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Price"
            type="number"
            value={price || ''}
            onChange={(e) => setPrice(Number(e.target.value))}
          />

          <Button
            variant="outlined"
            color="primary"
            type="button"
            onClick={onSaveProduct}
            disabled={!name || !price}
          >Save
          </Button>
        </Box>

        {
        products?.map((product) => (
          <div key={product.id}>
            <Typography variant="h5" fontWeight="bold" color="primary">{product.id}</Typography>
            <Typography color="secondary">{product.title}</Typography>
            <Typography color="secondary">{product.price}</Typography>
          </div>
        ))

      }
      </Grid>
    </Grid>
  );
}
