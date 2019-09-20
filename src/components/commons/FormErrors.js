import React from 'react';
import './FormErrors.css';

export const FormErrors = function({ formErrors, friendlyNames }) {
  // TODO: Poniższy warunek wypadałoby dodać do większości komponentów
  // bez niego, przy deklaracji użytkownika bez propsów czyli po prostu
  // <FormErrors />
  // Wywali nam błąd na Object.keys
  if (
    typeof formErrors === 'undefined' ||
    typeof friendlyNames === 'undefined'
  ) {
    return <div></div>;
  }
  return (
    <div className="formErrors">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p key={i}>
              {friendlyNames[fieldName]} {formErrors[fieldName]}
            </p>
          );
        } else {
          return '';
        }
      })}
    </div>
  );
};
