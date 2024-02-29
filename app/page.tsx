import Header from "@/components/Header";
import { pathmap, PathMap } from "@/lib/pathmap";

async function getData(): Promise<PathMap[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(pathmap);
    }, 2000);
  });
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-col min-h-screen">
      <Header data={data} />
    </main>
  );
}
