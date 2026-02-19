import { Login_form } from "./components/login_form";

export const Login_xmlibris = () => {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2 bg-[#F9E6C5]">
      <div className="flex flex-col items-center min-h-screen lg:min-h-0 p-6">
        <h1>Login_xmlibris</h1>
        <Login_form />
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <h1>Derecha</h1>
      </div>
    </div>
  );
};
