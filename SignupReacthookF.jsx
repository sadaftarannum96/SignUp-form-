import React from 'react';
import { useForm } from "react-hook-form";
import "./signup.css";


function SignupReacthookF() {
    const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign-Up</h1>
      <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type='password' placeholder="password" {...register("password",{ required:true, maxLength: 6 })} />
        </div>

        <div>
          <label htmlFor="number">Contact-No</label>
          <input type='number' placeholder="contact-no" {...register("contact-no",{ required:true,minLength: 10, maxLength: 10 })} />
          {errors.test && <p>{errors.test.message}</p>}
        </div>

        <div>
          <label htmlFor="isDeveloper">Is an developer?</label>
          <input
            type="checkbox"
            value="yes"
            {...register("isDeveloper")}
          />
        </div>

        <div class="clearfix">
        <input type="submit" className='submitbtn' />
        </div>
      </form>
    </div>
  );
}



export default SignupReacthookF