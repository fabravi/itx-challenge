import { Grid } from "@/types";

export const saveGrid = async (rowOrder: string[], grid: Grid) => {
  const transformedGrid = rowOrder.map((rowId) => ({
    items: grid[rowId].items,
    template: grid[rowId].template,
  }));

  try {
    const response = await fetch("http://localhost:3100/api/grids", {
      method: "POST",
      body: JSON.stringify(transformedGrid),
    });

    if (!response.ok) {
      throw Error("Error creating grid");
    }
  } catch (err) {
    throw Error("Error sending grid");
  }
};
