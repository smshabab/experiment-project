import React from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import {logInUser} from '../../store/actions/index';


class Basic extends React.Component {
  render() {
    const {
      errors,
      handleSubmit,
      isSubmitting,
      values,
      setFieldValue,
      setFieldTouched,
    } = this.props

    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <input 
           value={values.email} 
           type="email" name="email" 
           onChange={setFieldValue} 
           onBlur={setFieldTouched}
          />
          <input
           value={values.password}
           type="password" 
           name="password" 
           onChange={setFieldValue} 
           onBlur={setFieldTouched}
          />
          <button type="submit" disabled={isSubmitting || errors}>
            Submit
          </button>
        </form>
      </div>
    )
  }
};

const Form = withFormik({
  validate(values) {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors;
  },
  handleSubmit(values, { props, setSubmitting }) {
    const { logInUser } = props
    const payload = { email: values.email, password: values.password }
    logInUser(payload).then(() => setSubmitting(false))
  },
})(Basic);

const mapDispatchToProps = (dispatch) => ({
  logInUser
}, dispatch);



export default connect(null, mapDispatchToProps)(Form);