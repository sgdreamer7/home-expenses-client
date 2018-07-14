import {
  infoColor,
  primaryBoxShadow,
  defaultFont
} from "assets/jss/material-dashboard-react.jsx";

const emailStyle = theme => ({
  emailLabel: {
    ...defaultFont,
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    WebkitTransition: "all 150ms linear",
    MozTransition: "all 150ms linear",
    OTransition: "all 150ms linear",
    MsTransition: "all 150ms linear",
    transition: "all 150ms linear",
    display: "inline-block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "1.42857143",
    color: "#333",
    whiteSpace: "nowrap",
    height: "unset",
    "&:hover": {
      backgroundColor: infoColor,
      color: "#FFFFFF",
      ...primaryBoxShadow
    }
  }
});

export default emailStyle;
