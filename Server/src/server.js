import { getBruker } from "./mysql/mysqlQueries.js";

const bruker = getBruker();

console.log(bruker);

setInterval(() => {
    console.log(bruker);
}, 2000);
