export default function LoadSpinner(){
  return <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0" id="loader-container">
      <div className="relative text-center">
        <span className="inline-block w-4 h-4 rounded-full bg-primary animate-loader"></span>
        <span className="inline-block w-4 h-4 rounded-full bg-primary animate-loader animation-delay-200"></span>
        <span className="inline-block w-4 h-4 rounded-full bg-primary animate-loader animation-delay-400"></span>
      </div>
    </div>
}