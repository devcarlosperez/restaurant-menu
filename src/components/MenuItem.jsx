import { Link } from 'react-router-dom'

export default function MenuItem({ item }) {
  return (
    <article className="card">
      <Link to={`/meal/${item.id}`}>
        <img src={item.thumb} alt={item.name} className="card-img" />
        <h3 className="card-title">{item.name}</h3>
      </Link>
      <p className="card-category">{item.category}</p>
      <p className="card-price">${item.price.toFixed(2)}</p>
    </article>
  )
}