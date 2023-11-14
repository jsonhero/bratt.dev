
export default function Page() {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">
          Now
        </h2>
        <p className="text-secondary">
          Last updated Nov 13, 2023
        </p>
      </div>
      <div className="h-8"></div>
      <a className="underline" href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">What is a now page?</a>
      <div className="h-6">

      </div>
      <p>
        {"Currently I'm working at "} 
        <a className="text-blue-400" href="https://www.blueprint-health.com" target="_blank" rel="noopener noreferrer">Blueprint Health</a> 
        {" as a senior fullstack engineer."}
      </p>
    </div>
  )
}