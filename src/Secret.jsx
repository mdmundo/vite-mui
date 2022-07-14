import { Alert, Button, Grid, Snackbar } from "@mui/material";
import { useState } from "react";

const texts = [
  ["success", "sucesso"],
  ["warning", "aviso"],
  ["error", "erro"],
  ["info", "informação"],
];

const Secret = () => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState(texts[0]);
  const close = (e, r) => {
    if (r !== "clickaway") {
      setActive(false);
    }
  };
  const open = (index) => {
    if (!active) {
      setText(texts[index]);
      setActive(true);
    }
  };

  return (
    <Grid container direction="row" justifyContent="space-around" alignItems="center">
      <Snackbar open={active} autoHideDuration={1750} onClose={close}>
        <Alert onClose={close} severity={text[0]}>
          {`Mensagem de ${text[1]}!`}
        </Alert>
      </Snackbar>
      <Button
        variant="text"
        color="success"
        onClick={() => {
          open(0);
        }}
      >
        Sucesso
      </Button>
      <Button
        variant="text"
        color="warning"
        onClick={() => {
          open(1);
        }}
      >
        Aviso
      </Button>
      <Button
        variant="text"
        color="error"
        onClick={() => {
          open(2);
        }}
      >
        Erro
      </Button>
      <Button
        variant="text"
        color="info"
        onClick={() => {
          open(3);
        }}
      >
        Info
      </Button>
    </Grid>
  );
};

export default Secret;
