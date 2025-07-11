
// src/newsApi.js

const API_KEY = "29f8e3c1-573f-4fe8-94ef-593b9dafb04a";
const BASE_URL = "https://eventregistry.org/api/v1/article/getArticles";
export async function fetchNewsByTag(tag) {
    const response = await fetch(`${BASE_URL}?apiKey=dc8ee551-30e0-40ff-ba4d-f7b2a309e7c5&keyword=${tag}&lang=eng&sortBy=rel&articlesCount=10`);
    const data = await response.json();
    return data.articles.results;
}
