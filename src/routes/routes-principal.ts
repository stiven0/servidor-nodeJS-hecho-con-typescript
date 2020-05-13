
  import { Router } from 'express';
  import multer, { diskStorage } from 'multer';
  import { resolve, extname } from 'path';
  import { uuid } from 'uuidv4';

  // constrollers
  import { principal } from '../controllers/principal';

  // midllewares
  import verificarToken from '../middlewares/token';


  // multer config
  const storage = diskStorage({
    destination : resolve(__dirname, '../uploads'),
    filename : (req, file, cb) => {
      cb(null, uuid() + extname(req.file.originalname))
    }
  });
  const mullterConfig = multer({storage});


  const router = Router();

  // rutas
  router.get('/', principal);


  export default router;
