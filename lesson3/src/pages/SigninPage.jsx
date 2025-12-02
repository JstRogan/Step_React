import { Component } from 'react'
import { Link } from 'react-router-dom'

class SigninPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      statusMessage: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ statusMessage: `Signed in as ${this.state.email}` })
  }

  render() {
    return (
      <div className="page-shell">
        <div className="auth-card">
          <h1 className="auth-title">Sign in</h1>
          <p className="auth-subtitle">Enter your email and password.</p>
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <div className="field-group">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="field-group">
              <label htmlFor="password" className="field-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="field-input"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Sign in
            </button>
          </form>
          <p className="helper-text">
            No account yet?{' '}
            <Link className="helper-link" to="/signup">
              Create one
            </Link>
          </p>
          {this.state.statusMessage && (
            <p className="status-message">{this.state.statusMessage}</p>
          )}
        </div>
      </div>
    )
  }
}

export default SigninPage
