const Container = ({ children, className }) => {
    return (
      <div className={`max-w-screen-xl mx-auto px-2 ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;