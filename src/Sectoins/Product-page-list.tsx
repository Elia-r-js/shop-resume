import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useProductStore } from "../store/productStore";
import useCartStore from "../store/cartstore";

export default function ProductPage() {
  const { products, fetchProducts, loading, error, searchValue } = useProductStore();
  const { addItem, items,removeItem } = useCartStore();

  const filtered = products.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase()))


  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" textAlign={"center"}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center" mt={4}>
        {error}
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} justifyContent="center">
      {filtered.map((p) => {
        const isInCart = items.some((item) => item.id === p.id);

        return (
          <Grid  key={p.id}>
            <Card
              sx={{
                width: 250,
                p: 2,
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "0.3s",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={p.image}
                alt={p.title}
                sx={{ objectFit: "contain", mb: 1 }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="subtitle1" fontWeight="bold" noWrap>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${p.price}
                </Typography>
                <Button
                  variant={isInCart ? "outlined" : "contained"}
                  color={isInCart ? "success" : "primary"}
                  fullWidth
                  sx={{ mt: 1 }}
                  onClick={() => {
                    if(isInCart) removeItem(p.id) 
                      else{
                    addItem({
                      id: p.id,
                      name: p.title,
                      price: p.price,
                      quantity: 1,
                    });
                  }}}
                >
                  {isInCart ? "In Cart" : "Add to Cart"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}