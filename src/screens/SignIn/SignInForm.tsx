import React, { Component } from 'react';
import { Form, Item, Label, Input, Button, Text } from 'native-base';
import { Dispatch } from 'redux';
import { ApplicationState } from 'src/reducers';
import { connect } from 'react-redux';
import { FormikProps, withFormik } from 'formik';
import { signInSubmit } from 'src/screens/SignIn/actions';

const SignInForm = (props: ISignInFormProps) => {
  const { username, password } = props.values;
  return (
    <Form>
      <Item floatingLabel>
        <Label>Username</Label>
        <Input
          value={username}
          onChangeText={value => props.setFieldValue('username', value)}
        />
      </Item>
      <Item floatingLabel>
        <Label>Password</Label>
        <Input
          value={password}
          onChangeText={value => props.setFieldValue('password', value)}
        />
      </Item>
      <Button rounded onPress={e => props.handleSubmit(e)}>
        <Text>Sign In</Text>
      </Button>
    </Form>
  );
};

interface SignInForm {
  username: string;
  password: string;
}
const DecoratedSignInForm = withFormik<ISignInFormActions, SignInForm>({
  handleSubmit: (values, { props }) => {
    props.logInUser(values.username, values.password);
  }
})(SignInForm);

interface ISignInFormActions {
  logInUser: (username: string, password: string) => void;
}

const mapDispatchToProps = (
  dispatch: Dispatch<ApplicationState>
): ISignInFormActions => {
  return {
    logInUser: (username, password) =>
      // dispatch(new signInSubmit(username, password))
      dispatch(new signInSubmit('forcelord50@gmail.com', 'tesser@89'))
  };
};

type ISignInFormProps = FormikProps<SignInForm> & ISignInFormActions;
export default connect(null, mapDispatchToProps)(DecoratedSignInForm);
