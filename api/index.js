const { createProxyMiddleware } = require("http-proxy-middleware");

export default async function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: "https://13.211.92.181",
    changeOrigin: true,
  });

  proxy(req, res, null, (err) => {
    if (err) {
      res.status(500).send("Proxy error");
    } else {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
    }
  });
}
