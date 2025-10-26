import { Link } from 'react-router-dom'

export default function MenuItem({ id, name, thumb, category, price }) {
  return (
    <article className="card">
      <Link to={`/meal/${id}`}>
        <img src={thumb} alt={name} className="card-img" />
        <h3 className="card-title">{name}</h3>
      </Link>
      <p className="card-category">{category}</p>
      <p className="card-price">${price.toFixed(2)}</p>
    </article>
  )
}