import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Product = (props) => {
  return (
    <Box>
      <Typography
        className=""
        style={{
          width: 200
        }}
        variant="h4"
      >
        {props.name}
      </Typography>
      <Typography variant="h6">{props.price}</Typography>
    </Box>
  );
};

export default Product;
