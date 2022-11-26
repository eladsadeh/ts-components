import service from '../utils/http';

const Authenticate = async () => service.get('auth/authenticate');
const Login = async (email: string, password: string) => service.post('auth/login', {
  email,
  password,
});

const Auth = {
  login: Login,
  authenticate: Authenticate,
};

export default Auth;
