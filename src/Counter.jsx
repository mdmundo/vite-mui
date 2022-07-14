import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center">
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Aumentar
      </Button>
      <Typography variant="h4">{count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Diminuir
      </Button>
    </Grid>
  );
};

export default Counter;
