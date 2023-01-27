import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://stock-backend-nlko.onrender.com",
});

export const getPortfolioStocks = (uid) => {
  return fromApi.get(`/api/portfolio/${uid}`).then(({ data }) => {
    return data;
  });
};

export const postPortfolioStock = (uid, stockName, date, quantity, price) => {
  return fromApi.post(`/api/portfolio/${uid}/add`, {
    name: stockName,
    date: date,
    quantity: quantity,
    price: price,
  });
};

export const deletePortfolio = (uid) => {
  return fromApi.delete(`/api/portfolio/${uid}/deleteportfolio`);
};

export const deleteStock = (uid, stock) => {
  return fromApi.delete(`/api/portfolio/${uid}/removestock`, {
    data: { stock: stock },
  });
};

export const getStockList = () => {
  return fromApi.get(`/api/stocklist`).then(({ data }) => {
    return data;
  });
};

export const fetchStockData = () => {
  return fromApi.get(`/stock`).then(({ data }) => {
    console.log(data);
    return data.stock;
  });
};

// export const signUp = () => {
//   return formApi
//   .post('/sign-up', {

//   })
//   .then((response) => {
//     console.log(response, "API")
//   })
// }

export const getStockNews = () => {
  return fromApi.get("/api/news").then((response) => {
    return response.data;
  });
};

export const getSingleStock = (stock) => {
  return fromApi.get(`/api/stockdata/${stock}`).then((response) => {
    console.log(response);
    return response.data;
  });
};
