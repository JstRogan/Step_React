import { Component } from 'react'

class Task4BookClass extends Component {
  render() {
    return (
      <main className="page">
        <section className="card">
          <h1>My Favourite Book: The Hobbit</h1>
          <p className="subtitle">J. R. R. Tolkien</p>
          <div className="grid">
            <div>
              <p><strong>Genre:</strong> Fantasy, adventure</p>
              <p><strong>Pages:</strong> About 300</p>
            </div>
            <div>
              <p>
                The Hobbit is a story about courage, friendship and the ability
                to change. Bilbo begins as a quiet hobbit, but step by step he
                becomes a real hero for his friends.
              </p>
            </div>
          </div>
          <section className="reviews">
            <h2>Reviews</h2>
            <ul>
              <li>Light and interesting introduction to the world of Middle-earth.</li>
              <li>Shorter and simpler than The Lord of the Rings.</li>
              <li>Many readers return to this book several times.</li>
            </ul>
          </section>
        </section>
      </main>
    )
  }
}

export default Task4BookClass
