import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // ✅ Demo login (fake auth)
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isAuthenticated", "true")
      navigate("/") // chuyển về trang Home
    } else {
      setError("Sai email hoặc mật khẩu!")
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] pt-20">
        <div className="bg-[#1e1e1e] p-10 rounded-2xl shadow-lg w-full max-w-md text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Đăng Nhập</h2>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:border-[#AB8BFF] focus:outline-none"
                placeholder="Nhập email..."
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Mật khẩu</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-gray-600 focus:border-[#AB8BFF] focus:outline-none"
                placeholder="Nhập mật khẩu..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#AB8BFF] hover:bg-[#8e6cff] transition-colors py-2 rounded-lg font-semibold text-lg"
            >
              Đăng nhập
            </button>
          </form>

          <p className="text-gray-400 text-sm text-center mt-6">
            Chưa có tài khoản?{" "}
            <Link to='/register' className="text-[#AB8BFF] hover:underline cursor-pointer">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
