
import rateLimit from 'express-rate-limit';


const response = {
  ok : false,
  message : 'Has intentado acceder a este recurso en varias ocasiones repetitivamente, espera 1 minuto'
};

export const limitPeticiones = rateLimit({
  windowMs: 60000, // 1 minuto in milliseconds
  max: 10,
  message:  JSON.stringify(response),
  headers: true,
  statusCode : 429
});
