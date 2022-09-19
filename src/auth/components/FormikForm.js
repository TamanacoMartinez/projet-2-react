import Container from "react-bootstrap/Container";
import BsForm from "react-bootstrap/form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {Formik, Form} from "formik";
import useAuth from "../../components/UseAuth";
import * as Yup from "yup";
import FormikInput from "./components/FormikInput";
import { useDispatch } from "react-redux";
import { updateEmail } from "../store/authSlice";
import {useEmailPasswordSignin} from "./hooks/useEmailPasswordSignin";
import {useEmailPasswordSignup} from "./hooks/useEmailPasswordSignup";
import {useGoogleSignin} from "./useGoogleSignIn";
 
const REQUIRED_AUTHENTICATION = {
  email: "",
  password: "such-password",
};


const initialValues = {
    email: "",
    password: "",
  };

const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const motDePassePasValide = "Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre";
const champRequis = "Ce champs est requis";
const courrielPasValide = "Entrez une adresse courriel valide";

const LoginForm = () => {

  const auth = useAuth();
  const dispatch = useDispatch();
  const signinWithEmailAndPassword = useEmailPasswordSignin();
  const signinWithGoogle = useGoogleSignin();
    

 
  const onSubmit = (values) => {
    dispatch(updateEmail(values));
    signinWithEmailAndPassword(values.email, values.password);
};
  };

  return (
    <Container fluid className="vh-100">
      <Container className="h-100 d-flex justify-content-center align-items-center">
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnChange
            validationSchema={yup.object({
              email: yup
                .string()
                .required(champRequis)
                .email(courrielPasValide),
              password: yup
                .string()
                .required(champRequis)
                .matches(regex, motDePassePasValide),
            })}
            >
            <Form as={BsForm} noValidate>
                <Row>
                    <Col>
                        <Input id="email" type="email" label="Courriel" required />
                    </Col>
                    <Col>
                        <Input id="password" type="password" label="Mot de Passe" required/>
                    </Col>
                    <Col>
                        <Button onClick={signinWithGoogle} type="button" variant="danger">Connexion avec Google</Button>
                    </Col>
                </Row>
            </Form>
        </Formik>
      </Container>
    </Container>
  );
};

export default LoginForm;