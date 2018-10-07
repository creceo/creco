var express = require("express");
var router = express.Router();
var https = require("https");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "CreatiCoding", type: "list" });
});
router.get("/post", function(req, res, next) {
  res.render("index", { title: "CreatiCoding", type: "post" });
});
router.get("/health", function(req, res, next) {
  res.send(true);
});
router.get("/api/list/post", (req, res, next) => {
  // https://api.github.com/repos/creaticoding/KOREAWIKI/contents/
  return new Promise(resolve => {
    https.get(
      {
        host: "api.github.com",
        headers: { "user-agent": "CreatiCoding" },
        path: "/repos/creaticoding/KOREAWIKI/contents/",
        port: 443
      },
      function(response) {
        console.log("Got response: " + response.statusCode);
        let body = "";
        response.on("data", function(d) {
          body += d;
        });
        response.on("end", function() {
          let data = JSON.parse(body);
          data = data.filter((ele, idx, arr) => {
            if (ele.name.indexOf(".md") == -1) {
              return false;
            } else if (ele.name != "README.md") {
              return true;
            } else {
              return false;
            }
          });
          resolve(data);
        });
      }
    );
  })
    .then(result => {
      for (let i in result) {
        console.log(result[i]);
      }
      return result.map(e => {
        return {
          name: e.name,
          date: "2018.10.08 02:00:01"
        };
      });
    })
    .then(result => {
      res.json(result);
    });
});
module.exports = router;
