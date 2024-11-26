import globe from "/images/globe.png"

export default function Header() {
  return (
    <header className="SiteHeader">
      <img src={globe} alt="" aria-hidden="true" className="SiteHeader-logo" />
      <h1 className="SiteHeader-title">my travel journal</h1>
    </header>
  )
}