import { useState, useEffect } from 'react';



const useForm = (callback, validate) => {

const [inputs, setInputs] = useState({});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);

useEffect(() => {

    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(inputs));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }));

    console.log(name);
    
  };

  return {
    handleChange,
    handleSubmit,
    inputs,
    errors,
  }
};

export default useForm;