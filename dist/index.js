module.exports = (function() {
  var dust = require("dustjs-linkedin");
  (function(){dust.register("index.dust",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html>").write("\n  ").write("<head>").write("\n    ").write("<meta charset=\"utf-8\">").write("\n    ").write("<meta content=\"text/html\" http-equiv=\"Content-Type\">").write("\n    ").write("<meta content=\"IE=edge,chrome=1\" http-equiv=\"X-UA-Compatible\">").write("\n    ").write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">").write("\n    ").write("<title>").reference(ctx.get(["title"], false),ctx,"h").write("</title>").write("\n  ").write("</head>").write("\n  ").write("<body class=\"html js\">").write("\n    ").write("<h1>").reference(ctx.get(["title"], false),ctx,"h").write("</h1>").write("\n    ").write("<h2>Author: ").reference(ctx.get(["author"], false),ctx,"h").write("</h2>").write("\n    ").reference(ctx.get(["body"], false),ctx,"h",["s"]).write("\n  ").write("</body>").write("\n").write("</html>").write("\n");}return body_0;})();
  // Returning object for nodejs
  return dust;
})();
