import { ThemeToggleButton } from './ThemeToggleButton'

function Navbar({ activePage, onChangePage }) {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="rounded bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-200">
            Movie App
          </span>
        </div>
        <nav className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onChangePage('movies')}
            className={
              activePage === 'movies'
                ? 'text-sm font-medium text-white underline underline-offset-4'
                : 'text-sm font-medium text-slate-300 hover:text-white'
            }
          >
            Movies
          </button>
          <button
            type="button"
            onClick={() => onChangePage('login')}
            className={
              activePage === 'login'
                ? 'text-sm font-medium text-white underline underline-offset-4'
                : 'text-sm font-medium text-slate-300 hover:text-white'
            }
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => onChangePage('register')}
            className={
              activePage === 'register'
                ? 'text-sm font-medium text-white underline underline-offset-4'
                : 'text-sm font-medium text-slate-300 hover:text-white'
            }
          >
            Register
          </button>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
