import axios from "axios";

export const getDishes = async () => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    );
    const dishes = await response.data;
    return dishes;
  } catch (error) {
    console.error("Error fetching dishes:", error);
    return [];
  }
};
