const { createProxyMiddleware } = require("http-proxy-middleware");

export default async function handler(req, res) {
  const proxy = createProxyMiddleware({
    target: "https://54.253.2.130",
    changeOrigin: true,
  });

  proxy(req, res, null, (err) => {
    if (err) {
      res.status(500).send("Proxy error");
    }
  });
}