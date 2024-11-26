import marker from "/images/marker.png"

export default function Card(props) {
  const {
    img: { src, alt },
    country,
    googleMapsLink,
    title,
    dates,
    text } = props

  return (
    <article className="TravelCard">
      <figure className="TravelCard-image">
        <img src={src} alt={alt} />
      </figure>
      <section className="TravelCard-details">
        <header className="TravelCard-header">
          <img src={marker} alt="" aria-hidden="true" className="TravelCard-icon" />
          <span className="TravelCard-country">{country}</span>
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="TravelCard-mapLink">View on Google Maps</a>
        </header>
        <div className="TravelCard-info">
          <h2 className="TravelCard-title">{title}</h2>
          <p className="TravelCard-dates">{dates}</p>
          <p className="TravelCard-description">{text}</p>
        </div>
      </section>
    </article>
  )
}