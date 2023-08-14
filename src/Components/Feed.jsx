import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState({ name: 'Self Improvement', icon: <SelfImprovementOutlinedIcon />, term: 'Self Improvement',});
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory.term}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory.term]);
  console.log(videos)
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory.term} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Support the creator
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#FC1503" }}>
          {selectedCategory.name} <span style={{ color: "white" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;