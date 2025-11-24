export const FormRegister = ({
  onChange,
  formRegisterSubmit,
  BtnControllChange,
  formRegisterState,
}) => {
  return (
    <form
      className=" border-2 grid p-4 rounded-tl-2xl rounded-bl-2xl"
      onSubmit={(e) => formRegisterSubmit(e)}
    >
      <label className="label-text">Username</label>
      
      <input
        className="input-bar"
        placeholder="Yourname"
        name="username"
        onChange={onChange}
        value={formRegisterState.username}
      ></input>
      <label className="label-text" id="password">
        Password
      </label>
      <input
        className="input-bar"
        placeholder="Password"
        type="password"
        name="password"
        onChange={onChange}
        value={formRegisterState.password}
      ></input>
      <label className="label-text">Repeat Password</label>
      <input
        className="input-bar"
        placeholder="Repeat Password"
        type="password"
        name="repeatpass"
        onChange={onChange}
        value={formRegisterState.repeatpass}
      ></input>
      <div className="grid p-4">
        <button className=" bg-[#948979] p-2 font-bold text-xl">
          Register
        </button>
        <label className="mt-2">
          Already Have a account?
          <BtnControllChange
            text="Login"
            style="text-blue-500 hover:text-blue-400 ml-2 hover:cursor-pointer"
          />
        </label>
      </div>
    </form>
  );
};
