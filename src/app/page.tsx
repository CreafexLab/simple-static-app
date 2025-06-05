export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="space-y-8 mx-auto max-w-xl p-8">
      <h1 className="text-2xl font-bold text-center">Simple Static App</h1>

      <p>This is a simple static app that can be used to test Ling.dev Compiler integration.</p>

      <p>This is some text that can be used to test the translation.</p>

      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">
          Click me
        </button>
      </div>
    </div>
  );
}
