var express = require("express");
var router = express.Router();
var https = require("https");

/* GET home page. */
router.get("/", function(req, res, next) {
  if (process.env.mode === "development") res.redirect(process.env.client);
  else res.render(__dirname + "/../build/index.html");
});
router.get("/web/*", function(req, res, next) {
  if (process.env.mode === "development") res.redirect(process.env.client);
  else res.render(__dirname + "/../build/index.html");
});

router.get("/health", function(req, res, next) {
  res.json({ result: true });
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
        result[i].html_url = result[i].html_url.replace("/blob/", "/commits/");
      }
      return result;
    })
    .then(result => {
      let promises = [];
      for (let i in result)
        promises.push(
          new Promise(resolve => {
            // https://github.com/CreatiCoding/KOREAWIKI/commits/master/nginx%20%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC.md
            https.get(
              {
                host: "github.com",
                headers: { "user-agent": "CreatiCoding" },
                path: result[i].html_url.substr(18),
                port: 443
              },
              response => {
                console.log("Got response: " + response.statusCode);
                let body = "";
                response.on("data", d => {
                  body += d;
                });
                response.on("end", function() {
                  let data = body.substr(body.indexOf("Commits on"));
                  result[i].date = data
                    .substr(10, data.substr(0, 100).indexOf(", 20") + 4)
                    .trim();
                  resolve(result[i]);
                });
              }
            );
          })
        );
      return Promise.all(promises);
    })
    .then(result => {
      return result
        .map(e => {
          return {
            name: e.name,
            date: new Date(e.date)
          };
        })
        .sort(function(a, b) {
          return b.date - a.date;
        })
        .map(e => {
          e.date = e.date.toLocaleDateString();
          return e;
        });
    })
    .then(result => {
      res.json(result);
    });
});
module.exports = router;
