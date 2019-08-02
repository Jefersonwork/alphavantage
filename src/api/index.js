import axios from "axios";

const api = axios.create({
    baseURL: "https://cloud.iexapis.com/v1/pk_e929f28820b8450facc2951e083b1427"
});

export default api;

"https://cloud-sse.iexapis.com/stable/stocksUS\?token\=pk_e929f28820b8450facc2951e083b1427"

https://cloud-sse.iexapis.com/stable/stocksUSNoUTP?token=pk_e929f28820b8450facc2951e083b1427&symbols=fb

"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=CH0Q7L9WWQIR3NB5"

"CH0Q7L9WWQIR3NB5"