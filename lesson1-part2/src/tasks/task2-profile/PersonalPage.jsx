function DetailItem({ label, value }) {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  )
}

function SkillTag({ name }) {
  return <li>{name}</li>
}

function PersonalPage() {
  const person = {
    name: 'Rogan Example',
    city: 'Baku',
    phone: '+994 00 000 00 00',
    email: 'example@mail.com',
    role: 'Front-end student',
    experience: 'Learning JavaScript, TypeScript and React',
    photoUrl:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    skills: ['JavaScript', 'React', 'HTML & CSS', 'Git', 'English B1–B2'],
  }

  return (
    <main className="page">
      <section className="card">
        <h1>{person.name}</h1>
        <p className="subtitle">{person.role}</p>
        <div className="grid">
          <div>
            <DetailItem label="City" value={person.city} />
            <DetailItem label="Phone" value={person.phone} />
            <DetailItem label="Email" value={person.email} />
            <DetailItem label="Experience" value={person.experience} />
          </div>
          <div>
            <img src={person.photoUrl} alt={person.name} className="profile-photo" />
          </div>
        </div>
        <h2 className="section-title">Skills</h2>
        <ul className="list">
          {person.skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default PersonalPage
