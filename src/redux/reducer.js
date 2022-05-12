const handleCarousel = (state = 0, action) => {
    const length = 8;
  
    switch (action.type) {
      case "SET_READ":
        return action.payload > length ? 0 : action.payload;
  
      case "SET_REFLECT":
        return action.payload < 0 ? length : action.payload;
        
      case "SET_GROW":
        return action.payload < 0 ? length : action.payload;

      case "SET_CREATE":
        return action.payload < 0 ? length : action.payload;
      
      case "SET_PUBlISH":
        return action.payload < 0 ? length : action.payload;

        case "SET_MONITOR":
          return action.payload < 0 ? length : action.payload;
        
          case "SET_REVIEW":
            return action.payload < 0 ? length : action.payload;
          
            case "SET_ENGAGE":
              return action.payload < 0 ? length : action.payload;
            
      
      default:
        return state;
    }
  };
  
  export default handleCarousel;
  