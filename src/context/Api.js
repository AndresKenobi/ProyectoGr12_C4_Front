// const server = "http://localhost:3000"; // VARIABLE PARA DESARROLLO EN LOCAL
const server = "https://pandaza-back.herokuapp.com"; // VARIABLE AJUSTADA PARA DESPLIEGUE

const apiRegister = `${server}/api/usuarios`;
const apiLogin = `${server}/api/usuarios/login`;

const apiProduct = `${server}/api/recetas`; // PENDIENTE DE AJUSTAR DIRECCION   
const apiProductByUser = ""; // PENDIENTE AJUSTAR DIRECCION

export { apiRegister, apiLogin, apiProduct, apiProductByUser };
