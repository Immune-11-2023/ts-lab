// 1 Resuelve el conflicto de tipos:
let favoriteNumber = 729
favoriteNumber = "525"

// 2 Crea una intefaz que resuelva el problema "Parameter 'x' implicitly has an 'any' type.ts(7006)"
function fn(x) {
  return x.flip()
}

// 3 Hay demasiados gatos en este planeta! Son variados así que necesitamos crear una interfaz que
// nos ayude a tipar todos los posibles tipos de gatos que podemos encontrar. Modifica la interfaz IPet
// para que todos los gatos aquí descritos tengan sentido como objetos.

interface IPet {
  name: string
  color: "orange" | "black"
  isCrazy: boolean
  canMove: boolean
  isAthletic: boolean
  likesTuna: boolean
  favoriteToy: string
  specialSkill: string | null
}

const chonkyCat: IPet = {
  name: "Tofu",
  color: "white",
  isCrazy: true,
  canMove: false,
  likesTuna: true,
}

const fastCat: IPet = {
  name: "Bolt",
  color: "orange",
  isCrazy: true,
  canMove: false,
  isAthletic: false,
  likesTuna: true,
}

// 4 Investiga el significado de la palabra "readonly" y descubre por qué la línea 58 da un error.
// Puedes eliminar la palabra clave "readonly" una vez comprendido su significado.

interface IPerson {
  readonly motherTongue: string
  name: string
  email: string
  age: number
}

const normalHuman: IPerson = {
  motherTongue: "Spanish",
  name: "Jessih",
  email: "lajessih@gmail.com",
  age: 25,
}

normalHuman.motherTongue = "English"

// 5 ENUM: enum es un tipo de datos peculiar en TS. Funciona de manera parecida a un objeto en JS
// pero permite que un dato adquiera un único tipo dentro del abanico de "propiedades" del mismo.
// Investiga la documentación para comprender el concepto de ENUM. Crea un enum COLORS de colores para
// guardar el "tema" de tu aplicación. Este enum tendrá 3 propiedades: "RED", "GREEN", "PURPLE" con sus
// correspondientes valores en colores de código HEX ("#FF0000")

// DOCS: https://www.typescriptlang.org/docs/handbook/enums.html

enum COLORS {}

// 6 En nuestra aplicación contamos con usuarios normales y administradores. Los administradores tienen
// una serie de propiedades extra como "permissions. Contamos con la interfaz "IUser". Nos gustaría
// tener otra interfaz BASADA (esto es una pista...) en IUser que hiciera justicia a esta clase de usuarios.
// Haz que "admin" deje de ser un tipo "IUser" para hacer justicia a sus propiedades.

interface IUser {
  name: string
  email: string
  age: number
  role: "user"
}

const user: IUser = {
  name: "pakito",
  email: "el_paki89@gmail.com",
  age: 45,
  role: "user",
}

const admin: IUser = {
  name: "Manolo",
  email: "manolo_admin@gmail.com",
  age: 65,
  role: "admin",
  permissions: ["create-user", "view-all-users", "delete-posts"],
  superAdmin: false,
}
