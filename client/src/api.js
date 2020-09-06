export const hitApi = async (signal) => {
  try {
    const response = await fetch("http://localhost:4001/", { signal });
    const data = await response.json();
    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      return "Request Aborted ";
    }
    return err;
  }
};
