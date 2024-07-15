import { exchangeRouter } from "./exchangeRouter";
import { myPageRouter } from "./mypageRouter";
import { investmentRouter } from "./investmentRouter";
import { landRouter } from "./landRouter";
import { dealershipRouter } from "./dealershipRouter";
import { homeRouter } from "./homeRouter";

//라우터들을 배열로 묶어서 export
export const routers = [ new exchangeRouter(), new myPageRouter(), new investmentRouter(), new landRouter(), new dealershipRouter(), new homeRouter() ]; 