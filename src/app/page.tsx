import Button from './button';
// import { sql } from '@vercel/postgres';
import { fetchClicks } from './lib/actions'



export default async function Home() {
  const startingCount = await fetchClicks();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">{"Cloud Clicker"}</h1>
      <Button startingCount={startingCount}/>
    </div>
  );
}
