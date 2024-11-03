import Hello from "./components/hello";

export default function Home() {
  console.log('Im Naimur')
  return (
    <>
    <h1 className="text-5xl">Welcome to next.js</h1>
    <Hello/>
    </>
  );
}
