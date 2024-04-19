//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const startDatabase = require("./src/functions/startDatabase.js");
const { conn } = require("./src/db.js");
// Syncing all the models at once.
conn.sync({ alter:true }).then(() => {
  startDatabase()
    .then(() => {
      server.listen(3001, () => {
        console.log("Server listening at 3001"); // eslint-disable-line no-console
      });
    })
    .catch((error) => {
      console.error("Error starting the database:", error);
    });
});
