export const FormLogin = ({
  onChange,
  formLoginState,
  BtnControllChange,
  formLoginSubmit
}) => {
  return (
    <form
      className=" border-2 grid p-4 rounded-tl-2xl rounded-bl-2xl"
      onSubmit={(e) =>   formLoginSubmit
(e)}
    >
      <label className="label-text">Username</label>
      <input
        className="input-bar"
        placeholder="Yourname"
        type="text"
        name="username"
        onChange={onChange}
        value={formLoginState.username}
      ></input>
      <label className="label-text">Password</label>
      <input
        className="input-bar"
        placeholder="Password"
        type="password"
        name="password"
        onChange={onChange}
        value={formLoginState.password}
      ></input>
      <div className="grid p-4">
        <button className=" bg-[#948979] p-2 font-bold text-xl" type="submit">
          Login
        </button>
        <label className="mt-2">
          Don't have a account?
          <BtnControllChange
            text="Register"
            style="text-blue-500 hover:text-blue-400 ml-2 hover:cursor-pointer"
          />
        </label>
      </div>
    </form>
  );
};
