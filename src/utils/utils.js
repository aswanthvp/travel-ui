const getAppMode = () => {
    return process.env.NODE_ENV === "development" ? "development" : "production";
  };
  
  const getURL = () => {
    return getAppMode() === "development"
      ? "http://localhost:3010"
      : "https://travel-fpwb.onrender.com";
  };
  
  export { getAppMode, getURL };
  