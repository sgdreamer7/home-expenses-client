import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
// core components
import { FormLabel } from "@material-ui/core";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  periodLabel: {
    display: "inline-block",
    marginTop: "13px",
    marginBottom: "13px"
  },
  button: {
    paddingLeft: "10px",
    paddingRight: "10px"
  }
};

function ReportsPage(props) {
  const { classes } = props;
  return (
    <Grid container>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Expenses reports</h4>
            <p className={classes.cardCategoryWhite}>
              Here is some expenses reports
            </p>
          </CardHeader>
          <CardBody>
            <Grid container>
              <GridItem xs={12} sm={12} md={4}>
                <FormLabel
                  className={classes.periodLabel}
                >{`${new Date().toDateString()}/${new Date().toDateString()}`}</FormLabel>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button color="primary" className={classes.button}>
                  <ChevronLeft />
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button color="primary" className={classes.button}>
                  <ChevronRight />
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button color="primary" className={classes.button}>
                  Day
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button color="primary" className={classes.button}>
                  Week
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button color="primary" className={classes.button}>
                  Month
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={1}>
                <Button color="primary" className={classes.button}>
                  Period
                </Button>
              </GridItem>
            </Grid>
            <Table
              tableHeaderColor="primary"
              tableHead={["Category", "Expneses value, UAH"]}
              tableData={Array.from(Array(20).keys()).map(index => [
                `Category ${index + 1}`,
                ((index + 1) * 12.34).toFixed(2)
              ])}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
}

export default withStyles(styles)(ReportsPage);
