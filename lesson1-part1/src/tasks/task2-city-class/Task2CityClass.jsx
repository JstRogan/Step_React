import { Component } from 'react'

class Task2CityClass extends Component {
  render() {
    return (
      <main className="page">
        <section className="card">
          <h1>My City: Baku</h1>
          <p className="subtitle">Azerbaijan</p>
          <div className="grid">
            <div>
              <p><strong>Country:</strong> Azerbaijan</p>
              <p><strong>Founded:</strong> 5th century</p>
              <p><strong>Population:</strong> About 2.3 million people</p>
            </div>
            <div>
              <p>
                Baku is the capital and largest city of Azerbaijan. It stands on
                the shore of the Caspian Sea and is an important cultural and
                economic center of the region.
              </p>
            </div>
          </div>
          <div className="image-grid">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Baku_Skyline_November_2018.jpg/640px-Baku_Skyline_November_2018.jpg" alt="Baku skyline" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Old_City%2C_Baku%2C_Azerbaijan_-_panoramio_%2874%29.jpg/640px-Old_City%2C_Baku%2C_Azerbaijan_-_panoramio_%2874%29.jpg" alt="Old city of Baku" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Flame_Towers_Baku%2C_Azerbaijan_-_night.jpg/640px-Flame_Towers_Baku%2C_Azerbaijan_-_night.jpg" alt="Flame Towers at night" />
          </div>
        </section>
      </main>
    )
  }
}

export default Task2CityClass
