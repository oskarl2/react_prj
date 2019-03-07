import React from 'react';

let FormErrors = ({formErrors}) => {
  let error;

  if(formErrors.length > 0) {
    error = <p>{formErrors}</p>
  } else {
    error = '';
  }

  return  (
    <div className='errors'>
      {error}
    </div>
  );
};

export default FormErrors;