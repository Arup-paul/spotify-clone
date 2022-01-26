import Head from 'next/head'
import Dashboard from "../components/Dashboard";
export default function Home() {

  return (
      <div>
          <Head>
              <title>Spotify</title>
              <link rel="icon" href="/spotify.ico" />
          </Head>


          <Dashboard />

      </div>
  )
}
