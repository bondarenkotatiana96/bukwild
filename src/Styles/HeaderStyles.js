import sizes from './sizes'; //responsive for different sizes 

const styles = {
    root: {
      //positioning for menu+logo box and contact button
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      [sizes.down("xs")]: {
        //Repositioning from row to column on the extra small screens
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft: "2rem"
      }
    },
  
    HeaderMenu: {
      //positioning menu and logo
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "1.179rem",
      marginLeft: "8.125rem",

      [sizes.down("xs")]: {
        marginLeft: "0"
      }
    }
  };

  export default styles;