// Clickoutside.js
const Clickoutside = (element, callback) => {
    const handleClick = (event) => {
      if (element && !element.contains(event.target)) {
        callback();
      }
    };
  
    document.addEventListener('mousedown', handleClick);
  
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  };
  
  export default Clickoutside;
  