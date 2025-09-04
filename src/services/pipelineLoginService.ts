export const loginFields = {
  fields: [
    {
      name: "email",
      display_name: "Correo electrónico",
      regex: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
      format_error_message: "Ingrese un correo electrónico válido (ej: usuario@dominio.com).",
      type: "email",
      required: true,
      icon: "✉️"
    },
    {
      name: "password",
      display_name: "Contraseña",
      regex: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      format_error_message: "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.",
      type: "password",
      required: true,
      icon: "🔒"
    }
  ]
};

export const signupFields = {
  fields: [
    {
      name: "username",
      display_name: "Nombre de usuario",
      regex: "^[a-zA-Z0-9_]{3,20}$",
      format_error_message: "El nombre de usuario debe tener entre 3 y 20 caracteres, y solo puede contener letras, números y guiones bajos.",
      type: "text",
      required: true,
      icon: "👤"
    },
    {
      name: "email",
      display_name: "Correo electrónico",
      regex: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
      format_error_message: "Ingrese un correo electrónico válido (ej: usuario@dominio.com).",
      type: "email",
      required: true,
      icon: "✉️"
    },
    {
      name: "password",
      display_name: "Contraseña",
      regex: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      format_error_message: "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.",
      type: "password",
      required: true,
      icon: "🔒"
    },
    {
      name: "confirm_password",
      display_name: "Confirme Contraseña",
      regex: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      format_error_message: "La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.",
      type: "password",
      required: true,
      icon: "🔒"
    }
  ]
};

export const formTitles = {
  login: "Iniciar Sesión",
  signup: "Crear Cuenta"
};

export const buttonTexts = {
  login: "Ingresar",
  signup: "Registrarse"
};

export const switchTexts = {
  login: {
    text: "¿No tienes una cuenta?",
    link: "Regístrate"
  },
  signup: {
    text: "¿Ya tienes una cuenta?",
    link: "Inicia sesión"
  }
};

export const welcomeMessages = {
  login: {
    title: "¡Bienvenido de nuevo!",
    text: "Nos alegra verte otra vez. Inicia sesión para acceder a tu cuenta y descubrir todas las novedades que tenemos para ti."
  },
  signup: {
    title: "¡Únete a nosotros!",
    text: "Crea una cuenta y descubre un mundo de posibilidades. Estamos emocionados de tenerte como parte de nuestra comunidad."
  }
};
