import { httpServer, io } from './http'

import './websocket';

httpServer.listen(3000, () => {
    console.log(`Server listening on ${3000}`);
});