module.exports = [
  {
    id: "post-grids",
    url: "/api/grids",
    method: "POST",
    variants: [
      {
        id: "success", // id of the variant
        delay: 250, // delay of the variant
        type: "json", // variant type
        options: {
          // options for the variant type handler
          status: 200, // status to send
          body: {
            message: "Grid created",
            grid: {},
          },
        },
      },
    ],
  },
];
