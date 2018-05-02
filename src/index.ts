import * as http from 'http';
import app from './app';
import { normalizePort, onError, onListening } from './utils';

const port = normalizePort(process.env.port || 3000);
const server = http.createServer(app);

server.listen(port);
server.on('error', onError(server));
server.on('listening', onListening(server));
