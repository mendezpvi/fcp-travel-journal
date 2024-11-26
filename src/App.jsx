import Header from "./components/Header.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import data from "./db/data.js"

export default function App() {
  const entries = data.map(entry => <Card key={entry.id} {...entry} />)

  return (
    <>
      <Header />
      <main className="SiteMain">
        <div className="Container CardContainer">
          {entries}
        </div>
      </main>
      <Footer />
    </>
  )
}
