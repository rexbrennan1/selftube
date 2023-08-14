import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ bgcolor: 'black', position:  "sticky", background: '#000', top: 0, justifyContent: "space-between", borderBottom: 1, borderColor: 'grey.800', zIndex: '1050'}}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={60} />
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white", marginTop:'15px', display: { xs: 'none', sm: 'block'}}}>SelfTube</Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;