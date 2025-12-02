import { useState } from 'react'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Logged in as ${email}`)
  }

  return (
    <div className="flex justify-center py-10 px-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl dark:border-slate-700 dark:bg-slate-950 dark:text-slate-50">
        <h1 className="mb-1 text-2xl font-semibold">Login</h1>
        <p className="mb-6 text-sm text-slate-400">Enter your email and password.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="login-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="login-password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-slate-100 py-2 text-sm font-medium text-slate-900"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-sm text-emerald-400">{message}</p>}
      </div>
    </div>
  )
}

export default LoginPage
