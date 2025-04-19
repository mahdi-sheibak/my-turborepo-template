import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <main>
      <h2>App</h2>
      <Button appName="app" className="text-4xl">
        App
      </Button>
      <div className="bg-red-300">content</div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
}
