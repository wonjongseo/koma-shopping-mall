import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

function SellerLogin() {
  const { isSeller, setIsSeller, navigate } = useAppContext();
  const [email, setEmail] = useState("visionwill3322@gmail.com");
  const [password, setPassword] = useState("12345678");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsSeller(true);
  };
  useEffect(() => {
    navigate("/seller");
  }, [isSeller]);

  return (
    !isSeller && (
      <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center text-sm text-gray-600">
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Seller</span>
            Login
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border rounded w-full p-2 mt-1 outline-primary border-gray-200 "
              type="email"
              placeholder="enter your email"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border rounded w-full p-2 mt-1 outline-primary border-gray-200 "
              type="password"
              placeholder="enter your password"
              required
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md cursor-pointer">Login</button>
        </div>
      </form>
    )
  );
}

export default SellerLogin;
