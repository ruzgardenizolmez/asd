import axios from "axios";

const fromApi = axios.create({
  baseURL: "https://backend-stock.onrender.com",

  // "https://backend-stock.onrender.com"
  // "https://sea-turtle-app-xc9w8.ondigitalocean.app/"
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

export const getPortfolioProfitLoss = (uid) => {
  return fromApi.get(`/api/portfolio/${uid}/pl`).then(({ data }) => {
    return data;
  });
};

export const deleteStock = (uid, stock) => {
  return fromApi.delete(`/api/portfolio/${uid}/removestock`, {
    data: { stock: stock },
  });
};

export const editStock = (uid, stockName, date, quantity, price) => {
  return fromApi.patch(`/api/portfolio/${uid}/update`, {
    name: stockName,
    date: date,
    quantity: quantity,
    price: price,
  });
};

export const getStockList = () => {
  return fromApi.get(`/api/stocklist`).then(({ data }) => {
    return data;
  });
};

export const getStockListNasdaq = () => {
  return fromApi.get(`/api/stocklist/nasdaq`).then(({ data }) => {
    return data;
  });
};

export const fetchStockData = (symbol, time) => {
  return fromApi.get(`/stock/${symbol}?time=${time}`).then(({ data }) => {
    return data.stock;
  });
};

export const getStockNews = () => {
  return fromApi.get("/api/news").then((response) => {
    return response.data;
  });
};

export const getSingleStockNews = (symbol) => {
  return fromApi.get(`/api/news/${symbol}`).then((response) => {
    return response.data;
  });
};

export const getSingleStock = (stock) => {
  return fromApi.get(`/api/stockdata/${stock}`).then((response) => {
    return response.data;
  });
};

export const getTickerPrice = (tickers) => {
  const tickerArr = tickers.map((ticker) => {
    return `tickerArr=${ticker}`;
  });

  let endpoint = ``;
  endpoint += tickerArr[0];

  tickerArr.forEach((ticker, i) => {
    if (i < 1) return;
    return (endpoint += `&${ticker}`);
  });

  return fromApi.get(`/api/tickerinfo?${endpoint}`).then(({ data }) => {
    return data;
  });
};

export const getStockEvents = (ticker) => {
  return fromApi.get(`/api/calendar/${ticker}`).then(({ data }) => {
    return data;
  });
};

export const getStockAI = (stockname) => {
  return fromApi.get(`/api/stockai/${stockname}`).then(({ data }) => {
    return data;
  });
};
