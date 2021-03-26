import sizes from './sizes';

const styles = {
    root: {
      //Positioning for main content of the page (layout and call to action box are positioned separately)
      marginTop: "5%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap",

      //Changing positioning from row to column on smaller screen sizes
      [sizes.down("lg")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "5rem"
      },

      [sizes.down("xs")]: {
        marginLeft: "2rem"
      }
    },
  
    MainPageHeading: {
        width: "38.25rem",
        minHeight: "17rem",
        fontSize: "5.25rem",
        fontWeight: "bold",
        lineHeight: "1",
        letterSpacing: "-2.2px",
        color: "#fff",
        marginBottom: "12rem",

        [sizes.down("lg")]: {
          marginBottom: "0"
        },

        [sizes.down("md")]: {
          minHeight: "10rem"
        },

        [sizes.down("sm")]: {
          fontSize: "4.5rem",
          minHeight: "12rem"
        },

        [sizes.down("xs")]: {
          fontSize: "3.5rem",
          minHeight: "8rem",
          marginTop: "5rem"
        }
    },
  
    MainPageText: {
        width: "22.5rem",
        minHeight: "14.188rem",
        fontSize: "0.875rem",
        fontWeight: "normal",
        lineHeight: "1.86",
        letterSpacing: "normal",
        marginRight: "10.5rem",
        color: "#fff",
        marginBottom: "12rem",

        [sizes.down("sm")]: {
          width: "80%",
          marginBottom: "8rem",
        }
    },
    
    //CALL TO ACTION
    CtaBox: {
      //positioning of CTA box
        position: "fixed",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",

      //positioning of the elements inside CTA box
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        width: "73.75rem",
        height: "11.188rem",
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "-5px -5px 10px -2px rgba(0, 0, 0, .45)",

        [sizes.down("lg")]: {
          width: "60rem",
          height: "10rem"
        },

        [sizes.down("md")]: {
          width: "40rem",
          height: "7rem",
          justifyContent: "space-around"
        },

        [sizes.down("sm")]: {
          width: "30rem"
        },

        [sizes.down("xs")]: {
          width: "20rem"
        }
    },
  
    CtaText: {
        paddingLeft: "4.813rem",
        fontSize: "1.5rem",

        [sizes.down("sm")]: {
          fontSize: "1.2rem",
        },

        [sizes.down("xs")]: {
          fontSize: "1rem",
          paddingLeft: "2rem",
        }
    },
  
    CtaBtn: {
        fontSize: "0.688rem",
        fontWeight: "500",
        lineHeight: "1.82",
        letterSpacing: "1px",
        textTransform: "uppercase",
        color: "#000000",
        border: "none",
        backgroundColor: "#fff",
        outline: "none",
        transition: "all .2s",
        paddingLeft: "13.75rem",
  
        "&:active": {
          color: "#666"
        },
  
        "&:hover": {
          cursor: "pointer",
          transform: "translateY(-2px)"
        },
        
        //arrow near the button
        "& span": {
          color: "#ffc001",
          fontWeight: "bold",
          fontSize: "1rem"
        },

        [sizes.down("md")]: {
          paddingLeft: "5rem",
          minWidth: "max-content",
          paddingRight: "4.813rem"
        },

        [sizes.down("sm")]: {
          paddingLeft: "2rem",
          minWidth: "mfit-content",
          paddingRight: "2rem",
          fontSize: "0.5rem",
        }
    }
  };

  export default styles;