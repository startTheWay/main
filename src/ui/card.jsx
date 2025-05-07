export function Card({ children }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className = "" }) {
    return (
      <div className={`p-4 ${className}`}>
        {children}
      </div>
    );
  }
  