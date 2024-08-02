import * as React from "react";
import { useForm } from "react-hook-form";

const FormValidation = () => {
  const formValues={
    username:String,
    email:String,
    password:String,
    phoneNumber:Number,
  }
  const { register, handleSubmit, formState: { errors }} = useForm<formValues>({
    defaultValues:{
      username:'',
      email:'',
      password:'password',
      phoneNumber:'',
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={() => handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="username">username:</label>
          <input type="text" name="username" {...register('username', { 
            required:{
              value:true,
              message:"Required Field"
            },
            minLength:{
              value:5,
              message:"Enter atleast 5 characters"
            }
          })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" {...register('email', { 
             required:{
              value:true,
              message:"Required Field"
            },
           })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input type="password" name="password" {...register('password', {
             required:{
              value:true,
              message:"Required Field"
            },
            minLength:{
              value:8,
              message:"Enter atleast 8 characters"
            }
           })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="number" name="phoneNumber"{...register('phoneNumber', { 
             required:{
              value:true,
              message:"Required Field"
            },
            minLength:{
              value:10,
              message:"Enter atleast 10 characters"
            }
          })} />
          {errors.phoneNumber && <soan>{errors.phoneNumber.message}</soan>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;