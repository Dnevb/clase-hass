import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    border: "solid 1px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "0.4rem",
    padding: "0.2rem 0.8rem",
    borderColor: "#D1D5DB"
  }
});

const Product = (props) => {
  const classes = useStyles();
  return (
    <Stack className={classes.root}>
      <Typography
        style={{
          width: 200
        }}
        variant="h4"
      >
        {props.name}
      </Typography>
      <Stack direction="row" alignItems="center">
        <Typography variant="subtitle1">Price:</Typography>
        <Typography variant="body1">${props.price}</Typography>
      </Stack>
    </Stack>
  );
};

export default Product;
