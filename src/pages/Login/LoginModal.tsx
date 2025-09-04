import React, { useState, useRef, useEffect } from 'react';

import {
  LeftPanel,
  RightPanel,
  WelcomeTitle,
  WelcomeText,
  Form,
  FormTitle,
  InputContainer,
  InputIcon,
  StyledInput,
  SubmitButton,
  SwitchText,
  SwitchLink,
  ModalOverlay,
  ModalContainer,
  FormContainer,
  CloseButton
} from './styled';
import { 
  loginFields, 
  signupFields, 
  formTitles, 
  buttonTexts, 
  switchTexts, 
  welcomeMessages 
} from '../../services/pipelineLoginService';
import { EyeClosedIcon, EyeOpenIcon } from '../../assets/svg/EyeIcon';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FieldDef = {
  name: string;
  display_name: string;
  regex: string;
  format_error_message: string;
  type: string;
  required: boolean;
};

type Values = { [key: string]: string };
type Errors = { [key: string]: string | null };

function validateFields(fields: FieldDef[], values: Values): Errors {
  const errors: Errors = {};
  fields.forEach(field => {
    const value = values[field.name] ?? '';
    if (field.required && !value.trim()) {
      errors[field.name] = `${field.display_name} es obligatorio.`;
      return;
    }
    if (value && field.regex && !(new RegExp(field.regex).test(value))) {
      errors[field.name] = field.format_error_message;
      return;
    }
    errors[field.name] = null;
  });

  // Validación adicional: password y confirm_password deben coincidir
  if ('password' in values && 'confirm_password' in values) {
    if (values['password'] !== values['confirm_password']) {
      errors['confirm_password'] = 'Las contraseñas no coinciden.';
    }
  }

  return errors;
}

export function useFormValidation(fields: FieldDef[]) {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = validateFields(fields, values);
    setErrors(newErrors);
    return newErrors;
  };

  return { values, errors, handleChange, validate, setValues, setErrors };
}

// Animación para el popup de error
const bounceIn = {
  animation: 'bounceIn 0.35s cubic-bezier(.68,-0.55,.27,1.55)'
};

const bounceKeyframes = `
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  60% {
    opacity: 1;
    transform: translateY(4px) scale(1.05);
  }
  80% {
    transform: translateY(-2px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
`;

// Popup de error UX con animación
function ErrorPopup({ message }: { message: string }) {
  useEffect(() => {
    // Agrega keyframes globalmente solo una vez
    if (!document.getElementById('bounceInKeyframes')) {
      const style = document.createElement('style');
      style.id = 'bounceInKeyframes';
      style.innerHTML = bounceKeyframes;
      document.head.appendChild(style);
    }
  }, []);
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      background: '#ff6b3d',
      color: 'white',
      padding: '7px 14px',
      borderRadius: '8px',
      fontSize: '13px',
      marginTop: '6px',
      boxShadow: '0 2px 8px rgba(255,107,61,0.15)',
      zIndex: 2,
      whiteSpace: 'pre-line',
      ...bounceIn
    }}>
      {message}
    </div>
  );
}

// Iconos SVG en blanco para mostrar/ocultar contraseña (centrados y bien orientados)

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLoginForm, setIsLoginForm] = useState(true);
  // Estado para mostrar/ocultar contraseñas
  const [showPassword, setShowPassword] = useState<{ [key: string]: boolean }>({});

  const { fields: currentFields } = isLoginForm ? loginFields : signupFields;
  const { login: loginValidation, validate: signupValidation } = {
    login: useFormValidation(loginFields.fields),
    validate: useFormValidation(signupFields.fields)
  };
  const formValidation = isLoginForm ? loginValidation : signupValidation;

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    formValidation.setValues({});
    formValidation.setErrors({});
    setShowPassword({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = formValidation.validate();
    const hasErrors = Object.values(validationErrors).some(error => error !== null);
    
    if (!hasErrors) {
      // Aquí iría la lógica de autenticación o registro
      console.log('Form submitted:', isLoginForm ? 'Login' : 'Sign Up', formValidation.values);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    formValidation.handleChange(name, value);
    // Ya no se valida aquí
  };

  // Validación al salir del input
  const handleInputBlur = (name: string) => {
    const fieldDef = currentFields.find(f => f.name === name);
    const value = formValidation.values[name] || '';
    if (fieldDef) {
      let error: string | null = null;
      if (fieldDef.required && !value.trim()) {
        error = `${fieldDef.display_name} es obligatorio.`;
      } else if (value && fieldDef.regex && !(new RegExp(fieldDef.regex).test(value))) {
        error = fieldDef.format_error_message;
      }
      // Validación adicional para confirm_password
      if (name === 'password' || name === 'confirm_password') {
        const passwordValue = name === 'password' ? value : formValidation.values['password'] || '';
        const confirmValue = name === 'confirm_password' ? value : formValidation.values['confirm_password'] || '';
        if (passwordValue && confirmValue && passwordValue !== confirmValue) {
          if (name === 'confirm_password') {
            error = 'Las contraseñas no coinciden.';
          }
        } else if (name === 'confirm_password' && !error) {
          error = null;
        }
      }
      formValidation.setErrors(prev => ({
        ...prev,
        [name]: error
      }));
      // Si se modifica password o confirm_password, valida ambos
      if (name === 'password' || name === 'confirm_password') {
        const passwordValue = name === 'password' ? value : formValidation.values['password'] || '';
        const confirmValue = name === 'confirm_password' ? value : formValidation.values['confirm_password'] || '';
        let confirmError: string | null = null;
        const confirmDef = currentFields.find(f => f.name === 'confirm_password');
        if (confirmDef) {
          if (confirmDef.required && !confirmValue.trim()) {
            confirmError = `${confirmDef.display_name} es obligatorio.`;
          } else if (confirmValue && confirmDef.regex && !(new RegExp(confirmDef.regex).test(confirmValue))) {
            confirmError = confirmDef.format_error_message;
          } else if (passwordValue && confirmValue && passwordValue !== confirmValue) {
            confirmError = 'Las contraseñas no coinciden.';
          }
        }
        formValidation.setErrors(prev => ({
          ...prev,
          ['confirm_password']: confirmError
        }));
      }
    }
  };

  // Solo muestra el primer error visible
  const firstErrorField = currentFields.find(field => formValidation.errors[field.name]);
  const firstErrorMessage = firstErrorField ? formValidation.errors[firstErrorField.name] : null;

  // Función para alternar la visibilidad de la contraseña
  const handleTogglePassword = (fieldName: string) => {
    setShowPassword(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName]
    }));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <FormContainer >
          <LeftPanel>
            <Form isVisible={true} onSubmit={handleSubmit} noValidate>
              <FormTitle>{isLoginForm ? formTitles.login : formTitles.signup}</FormTitle>
              
              {currentFields.map((field) => (
                <InputContainer key={field.name} style={{ position: 'relative' }}>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <InputIcon>
                      {field.icon}
                    </InputIcon>
                    <StyledInput 
                      type={
                        (field.type === 'password' && showPassword[field.name])
                          ? 'text'
                          : field.type
                      }
                      placeholder={field.display_name} 
                      required={field.required}
                      value={formValidation.values[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      onBlur={() => handleInputBlur(field.name)}
                      style={field.type === 'password' ? { paddingRight: '32px' } : {}}
                    />
                    {/* Icono para mostrar/ocultar contraseña */}
                    {field.type === 'password' && (
                      <span
                        onClick={() => handleTogglePassword(field.name)}
                        style={{
                          position: 'absolute',
                          right: '8px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          cursor: 'pointer',
                          fontSize: '18px',
                          userSelect: 'none',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                        aria-label={showPassword[field.name] ? 'Ocultar contraseña' : 'Ver contraseña'}
                        tabIndex={0}
                        role="button"
                      >
                        {showPassword[field.name] ? EyeClosedIcon : EyeOpenIcon}
                      </span>
                    )}
                  </div>
                  {/* Solo muestra el popup en el campo con el primer error */}
                  {firstErrorField?.name === field.name && firstErrorMessage && (
                    <ErrorPopup message={firstErrorMessage} />
                  )}
                </InputContainer>
              ))}
              
              <SubmitButton type="submit">
                {isLoginForm ? buttonTexts.login : buttonTexts.signup}
              </SubmitButton>
              
              <SwitchText>
                {isLoginForm ? switchTexts.login.text : switchTexts.signup.text}{' '}
                <SwitchLink onClick={toggleForm}>
                  {isLoginForm ? switchTexts.login.link : switchTexts.signup.link}
                </SwitchLink>
              </SwitchText>
            </Form>
          </LeftPanel>
          
          <RightPanel>
            <WelcomeTitle>
              {isLoginForm ? welcomeMessages.login.title : welcomeMessages.signup.title}
            </WelcomeTitle>
            <WelcomeText>
              {isLoginForm ? welcomeMessages.login.text : welcomeMessages.signup.text}
            </WelcomeText>
          </RightPanel>
        </FormContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}