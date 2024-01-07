import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Space to fill in</p>


      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>


      <h2>Bakery</h2>


      <div className="card">
        <h3>New sweet buns next week!</h3>
        <p>Something to fill in</p>
      </div>
      <div className="card">
        <h3>Closed on Christmas</h3>
        <p>Something to fill in</p>
      </div>
    </main>
  )
}