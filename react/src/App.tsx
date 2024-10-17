import { Box, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box width={1} height={1} justifyContent={"center"} display={"flex"}>
      <Box
        width={["200px", "300px", "500px"]}
        height={"200px"}
        textAlign={"center"}
        bgcolor={"lightgray"}
        borderRadius={"10px"}
        alignContent={"center"}
      >
        <Typography fontSize={[10, 13, 17]}>Walksafe TechTest</Typography>
        <Typography fontSize={[10, 13, 17]}>By: Joseph Meyrick</Typography>
      </Box>
    </Box>
  );
}

export default App;
