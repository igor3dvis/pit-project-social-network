import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import styles from "./LoginPage.module.scss";
//import { loginTC } from "../../redux/authReducer";

const LoginModal = (props) => {
  const validationSchema = yup.object().shape({
    email: yup.string().email("It must be Email").required("Required"),
    password: yup.string().typeError("It must be password").required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnBlur
        validationSchema={validationSchema}

        onSubmit={(values) => { 
          console.log(values);
          console.log(props);
          props.loginTC(values.email, values.password)
          }
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
        }) => (
          <div className={styles.formWrapper}>
            
              <span className={styles.spanLabel}>e m a i l </span>
              <Field className={styles.inputs}
                name={"email"}
                type={"email"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <span>{errors.email}</span>}
            
              <span className={styles.spanLabel} >p a s s w o r d</span>
              <Field className={styles.inputs}
                name={"password"}
                type={"password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && <span>{errors.password}</span>}
            <div></div>
            <div>
              <button className={styles.loginBtn} disabled={!isValid} onClick={handleSubmit}>
                l o g i n
              </button>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default LoginModal;
