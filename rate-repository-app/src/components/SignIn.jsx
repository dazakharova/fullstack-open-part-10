import Text from './Text';
import { View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import theme from "../theme";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    maxWidth: 300,
    alignSelf: 'center',
    backgroundColor: theme.backgroundColors.mainBackground,
    borderRadius: 10,
  },
  formInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: theme.backgroundColors.repositoryItemBackground,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    marginHorizontal: 20,
  },
  submitButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    color: theme.colors.appBarText,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
};

const initialValues = {
  username: '',
  password: '',
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
      <View stye={styles.container}>
        <TextInput
            style={styles.formInput}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
        />
        <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
        />
        <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
          <Text>Sign in</Text>
        </Pressable>
      </View>
  )
};

export default SignIn;