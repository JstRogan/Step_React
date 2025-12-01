function PetDetail({ label, value }) {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  )
}

function PetInfo() {
  const pet = {
    name: 'Luna',
    type: 'Cat',
    breed: 'British Shorthair',
    age: '3 years',
    favoriteFood: 'Chicken and dry food',
    favoriteActivity: 'Sleeping on the window and watching birds',
    photoUrl:
      'https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=600',
  }

  return (
    <main className="page">
      <section className="card">
        <h1>My Pet: {pet.name}</h1>
        <p className="subtitle">{pet.type}</p>
        <div className="grid">
          <div>
            <PetDetail label="Breed" value={pet.breed} />
            <PetDetail label="Age" value={pet.age} />
            <PetDetail label="Favourite food" value={pet.favoriteFood} />
            <PetDetail label="Favourite activity" value={pet.favoriteActivity} />
          </div>
          <div>
            <img src={pet.photoUrl} alt={pet.name} className="profile-photo" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default PetInfo
