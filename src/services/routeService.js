export const mockRoutes = [
    {
      id: 1,
      name: "Route A",
      stops: [
        { lat: 34.4361, lng: 35.8305 },
        { lat: 34.4401, lng: 35.8322 },
        { lat: 34.4451, lng: 35.8387 },
      ],
    },
    {
      id: 2,
      name: "Route B",
      stops: [
        { lat: 34.4298, lng: 35.8241 },
        { lat: 34.4332, lng: 35.8276 },
        { lat: 34.4385, lng: 35.8339 },
      ],
    },
  ];
  
  // Function to simulate fetching data
  export const fetchRoutes = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockRoutes);
      }, 500);
    });
  };
  