const styles = {
    root: {
      //positioning of menu items inside nav
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",

      listStyle: "none",
      paddingLeft: "0",
      paddingTop: "0.958rem"
    },
  
    MenuItem: {
        fontFamily: "Helvetica Neue",
        fontSize: "0.875rem",
        fontWeight: "bold",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.86",
        letterSpacing: "normal",
        textDecoration: "none",
        color: "#fff",
        transition: "all .2s",
  
        "&:hover": {
          color: "#ffc004",
          cursor: "pointer"
        }
      },
      
    //active NavLink styles
    MenuItemActive: {
          color: "#ffc004"
        }
    };

    export default styles;