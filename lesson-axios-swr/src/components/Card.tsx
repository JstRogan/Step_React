import type { Character } from '../hooks/useData'

type CardProps = {
  character: Character
}

function Card({ character }: CardProps) {
  const status = character.status.toLowerCase()
  const statusClass =
    status === 'alive'
      ? 'rm-card__status rm-card__status--alive'
      : status === 'dead'
        ? 'rm-card__status rm-card__status--dead'
        : 'rm-card__status rm-card__status--unknown'

  return (
    <article className="rm-card">
      <div className="rm-card__image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="rm-card__body">
        <h2 className="rm-card__name">{character.name}</h2>
        <p className="rm-card__meta">
          <span className={statusClass}>{character.status}</span>
          <span className="rm-card__species">{character.species}</span>
        </p>
        <p className="rm-card__location">
          Last known location: <span>{character.location.name}</span>
        </p>
        <p className="rm-card__origin">
          Origin: <span>{character.origin.name}</span>
        </p>
      </div>
    </article>
  )
}

export default Card
