import { io, server } from "./app";

import { startTimer } from "./timer";

const port = 5000;

startTimer(io);
server.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});
