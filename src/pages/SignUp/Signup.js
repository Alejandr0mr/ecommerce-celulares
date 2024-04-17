import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'; // Importa componentes de Formik
import * as Yup from 'yup'; // Importa Yup para validación de esquemas
import Header from '../../components/header/Header'; // Importa el componente Header
import Footer from '../../components/footer/Footer'; // Importa el componente Footer
import './SignupStyles.css'; // Importa estilos específicos para este componente
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faEnvelope, faLock, faUser, faUserPlus, faMobileScreen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importa iconos de FontAwesome
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom para navegación entre páginas
import Swal from 'sweetalert2'; // Importa SweetAlert2 para mensajes de alerta

// Utiliza Yup para definir un esquema de validación para el formulario
const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .required('El nombre es requerido'),
    apellido: Yup.string()
        .min(3, 'El apellido debe tener al menos 3 caracteres')
        .required('El apellido es requerido'),
    email: Yup.string()
        .email('Ingrese un email válido')
        .required('El email es requerido'),
    celular: Yup.string()
        .matches(/^\d{10}$/, 'El teléfono debe tener 10 dígitos')
        .required('El teléfono es requerido'),
    password: Yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/,
            'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial'
        )
        .required('La contraseña es requerida'),
    passwordVerify: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Debe confirmar la contraseña'),
});

function Signup() {
    // Encargado del estado del ojo para mostrar la contraseña
    const [showPassword, setShowPassword] = useState(false);
    // Referencia a Formik para resetear el formulario después del envío exitoso
    const formikRef = useRef(null);

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (values) => {
        try {
            // Envía los datos del formulario al servidor
            const response = await fetch('http://localhost:3001/registro-usuario', {
                method: 'POST',
                headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
                body: JSON.stringify(values)
            });

            // Verifica si la respuesta del servidor es exitosa
            if (response.status === 200) {
                // Muestra un mensaje de éxito
                Swal.fire({
                    title: 'Usuario creado con éxito',
                    icon: 'success',
                    customClass: {
                        popup: 'my-custom-popup-class',
                    },
                    showConfirmButton: false,
                    timer: 1500
                });
                // Resetea el formulario
                formikRef.current.resetForm();
            } else {
                // Muestra un mensaje de error
                Swal.fire({
                    title: 'No fue posible crear el usuario',
                    text: `Error: ${response.status} - Correo o identificación invalidas`,
                    icon: 'error',
                    customClass: {
                        popup: 'my-custom-popup-class',
                    },
                    showConfirmButton: true,
                    timer: 4500
                });
            }
        } catch (error) {
            // Muestra un mensaje de error si falla el envío del formulario
            Swal.fire({
                title: 'No fue posible finalizar el proceso de registro por un error',
                text: `Error: ${error}`,
                icon: 'error',
                customClass: {
                    popup: 'my-custom-popup-class',
                },
                showConfirmButton: false,
                timer: 1500
            });
        }
    };


    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center align-items-center min-vh-100 body">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    <div className="col-md-12 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4 text-center">
                                <h2>Formulario de registro</h2>
                            </div>
                            <Formik
                                initialValues={{
                                    nombre: '',
                                    apellido: '',
                                    email: '',
                                    celular: '',
                                    password: '',
                                    passwordVerify: '',
                                }}
                                validationSchema={SignupSchema} // Aplica las reglas de validación definidas en SignupSchema
                                onSubmit={handleSubmit} // Función de envío del formulario
                                innerRef={formikRef} // Referencia a Formik para resetear el formulario
                            >
                                {() => (
                                    <Form>
                                          {/* Cada Field maneja la entrada del usuario y los errores de validación */}
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                                <Field type="text" name="nombre" className="form-control form-control-lg bg-light fs-6" placeholder="Nombre" />

                                            </div>
                                            <ErrorMessage name="nombre" component="div" className="text-danger" />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faUserPlus} />
                                                </span>
                                                <Field type="text" name="apellido" className="form-control form-control-lg bg-light fs-6" placeholder="Apellido" />

                                            </div>
                                            <ErrorMessage name="apellido" component="div" className="text-danger" />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </span>
                                                <Field type="email" name="email" className="form-control form-control-lg bg-light fs-6" placeholder="Correo electrónico" />

                                            </div>
                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faMobileScreen} />
                                                </span>
                                                <Field type="text" name="celular" className="form-control form-control-lg bg-light fs-6" placeholder="Celular" />

                                            </div>
                                            <ErrorMessage name="celular" component="div" className="text-danger" />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-group mb-1">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </span>
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="password"
                                                        className="form-control form-control-lg bg-light fs-6"
                                                        placeholder="Contraseña"
                                                    />
                                                    <span className="input-group-text" onClick={togglePasswordVisibility}>
                                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                                    </span>
                                                </div>
                                                <ErrorMessage name="password" component="div" className="text-danger" />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-group mb-1">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </span>
                                                    <Field
                                                        type={showPassword ? 'text' : 'password'}
                                                        name="passwordVerify"
                                                        className="form-control form-control-lg bg-light fs-6"
                                                        placeholder="Repetir contraseña"
                                                    />
                                                    <span className="input-group-text" onClick={togglePasswordVisibility}>
                                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                                    </span>
                                                </div>
                                                <ErrorMessage name="passwordVerify" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="input-group mb-3 mt-3">
                                            <button type="submit" className="btn btn-lg btn-primary w-100 fs-6">
                                                Registrarse
                                            </button>
                                        </div>
                                    </Form>
                                )}  
                            </Formik>
                            <div className="row">
                                <small>
                                    ¿Ya tienes cuenta?<Link className="nav-link" to="/login">
                                        <a href="#">Inicia sesión aquí</a>
                                    </Link>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;