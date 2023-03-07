import {Form,InputDiv} from "./styles/App"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Digite um email válido"),
  password: yup.string().min(6,"Digite uma senha com mais de 6 números").required("Digite uma senha"),
  confirmPassword: yup.string().min(6, "Confirmar a senha é obrigatório").required().oneOf([yup.ref("password")]),
})

function App() {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {

  };



  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Form</h1>
      <InputDiv>

        <label>Nome
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name", { required: true })}
          />
          {errors.name &&<span>{errors.name?.message}</span>}

        </label>

        <label>Email
          <input
            type="email"
            placeholder="Digite um email..."
            {...register("email")}
          />
           {errors.name &&<span>{errors.email?.message}</span>}
          
        </label>

        <label>Password
          <input
            type="password"
            placeholder="Digite uma senha..."
            autoComplete="on"
            {...register("password")}
          />
           {errors.name &&<span>{errors.password?.message}</span>}
        </label>
        <label>Confirm Password
          <input
            type="password"
            placeholder="Confime a senha..."
            autoComplete="on"
            {...register("confirmPassword")}
          />
           {errors.name &&<span>{errors.confirmPassword?.message}</span>}
        </label>
      </InputDiv>

      <button type="submit">Sign up</button>
    </Form>
  );
}

export default App;
