import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
import { channels } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      zIndex: '1000'
    }}

  >
  <div >
        <span>
          <h3 style={{color: 'white', font: 'roboto'}}><font face="roboto">Categories</font></h3>
        </span>
  </div>
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category)}
        style={{
          background: category.term === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.term === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.term === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
    <div>
        <span>
          <h3 style={{color: 'white', font: 'roboto'}}><font face="roboto">People</font></h3>
        </span>
    </div>
    {channels.map((channel) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(channel)}
        style={{
          background: channel.name === selectedCategory && "#FC1503",
          color: "white",
        }}
        key={channel.name}
      >
        <span style={{ color: channel.term === selectedCategory ? "white" : "red", marginRight: "15px" }}>
          {channel.icon}
        </span>
        <span style={{ opacity: channel.term === selectedCategory ? "1" : "0.8" }}>
          {channel.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;