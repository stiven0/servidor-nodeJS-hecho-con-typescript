
  import { resolve, extname } from 'path';

  import { Router } from 'express';
  import multer, { diskStorage } from 'multer';
  import { uuid } from 'uuidv4';

  // constrollers
  import * as metodosPrincipales from '../controllers/principal';

  // midllewares
  import verificarToken from '../middlewares/token';
  
  // config storage multer
  const storage = diskStorage({
    destination: resolve(__dirname, '../uploads'),
    filename : (req, file, cb) => cb(null, uuid() + extname(file.originalname))
  });

  // config the uploads files
  const uploadConfig = multer({
    fileFilter( req, file, next ) {
      if ( file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ) {
            next(null, true);
      } else {
          next(null, false);
      }
    },
    storage
  })

  const router = Router();

  // rutas
  router.get('/', metodosPrincipales.principal);


  export default router;
