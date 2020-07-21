
  require('dotenv').config();
  import app from './app';
  import { connect } from 'mongoose';
  import chalk from 'chalk';

  const options = { useNewUrlParser : true, useCreateIndex : true, 
                    useFindAndModify : false, useUnifiedTopology : true };

  const serverInit = () => {
    connect(String(process.env.DATABASE), options)
    .then( _ => {

      console.log(chalk.bgBlackBright('Conexion a la base de datos establecida'));
      app.listen(process.env.PORT);
      console.log(chalk.bgBlueBright(`Servidor corriendo en el puerto : ${ process.env.PORT }`));

    })
    .catch(err => console.log(err));
  };

  serverInit();
