import { Container, Paper } from "@mui/material";

const Basic = ({ Child }) => {
  return (
    <Container maxWidth="sm" sx={{ py: 2 }}>
      <Paper elevation={24} sx={{ py: 3 }}>
        <Child />
      </Paper>
    </Container>
  );
};

export default Basic;
