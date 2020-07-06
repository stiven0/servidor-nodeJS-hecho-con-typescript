import { Schema, Document, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

interface Usuario extends Document {
    email: string;
    name: string;
    password: string;
    image : string;
    role : string;
    date_create : string;
}


const ROLES_VALIDOS = {
    values : ['ADMIN_ROLE', 'USER_ROLE'],
    message : '{VALUES} no es un rol valido'
};

const schemaUsuario = new Schema({

    email: {
        type : String,
        trim : true,
        lowercase : true,
        unique : true,
        validate: {
            validator: (email: string) => {
                return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test( email )
            },
            message: 'El correo ingresado no es correcto'
        },
        required : [true, 'El correo es obligatorio']
    },

    name: {
        type : String,
        trim : true,
        validate : {
            validator : (name : string) => {
                return /[a-zA-ZÑñáéíóú]{2,30}$/.test( name )
            },
            message : 'Error, el nombre no es correcto'
        },
        required : [true, 'El campo nombre es obligatorio']

    },

    password : {
        type : String,
        required : [true, 'La contraseña es obligatoria']
      },

    image : {
        type : String,
        trim : true,
        required : false
    },

    role : {
        type : String,
        enum : ROLES_VALIDOS,
        default : 'USER_ROLE',
    },

    date_create : {
        type : String,
        required : true
    }

});

schemaUsuario.plugin( uniqueValidator, {message: 'Este {PATH} ya existe debe elegir otro'} );

schemaUsuario.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}


export default model<Usuario>('usuario', schemaUsuario); 