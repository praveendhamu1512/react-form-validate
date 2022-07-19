
export default function validate(inputs) {
    let errors = {};
    if (!inputs.email) {
        errors.email = 'Email address is required';
      }
      else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errors.email = 'Email address is invalid';
      }
      return errors;

  };


  console.log("called login")