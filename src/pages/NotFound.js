import { Box, CssBaseline, makeStyles, Paper } from "@material-ui/core";
import pageNotFoundImage from "../assets/pagesResources/pageNotFoundImage.jpg";

const useStyles = makeStyles(theme => {
  return {
    img: {
      width: "60%",
      height: "60%",
    },
    boxRoot: {
      //   margin: "10rem auto",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "3rem",
      backgroundColor: "#fdedd5",
    },
  };
});
const NotFound = () => {
  const styleClasses = useStyles();
  return (
    <Box className={styleClasses.boxRoot}>
      <img
        className={styleClasses.img}
        alt='page Not found'
        src={pageNotFoundImage}
      />
    </Box>
  );
};

export default NotFound;
