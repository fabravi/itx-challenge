module.exports = [
  {
    id: "get-templates",
    url: "/api/templates",
    method: "GET",
    variants: [
      {
        id: "success", // id of the variant
        delay: 120, // delay of the variant
        type: "json", // variant type
        options: {
          // options for the variant type handler
          status: 200, // status to send
          body: [
            {
              id: "1",
              name: "Template Left",
              align: "LEFT",
            },
            {
              id: "2",
              name: "Template Center",
              align: "CENTER",
            },
            {
              id: "3",
              name: "Template Right",
              align: "RIGHT",
            },
          ],
        },
      },
    ],
  },
];
