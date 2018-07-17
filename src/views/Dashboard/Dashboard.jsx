import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomSelect/CustomSelect.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const styles = theme => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  addExpensesButton: {
    marginTop: "37px",
    marginBottom: "0px",
    paddingBottom: "10px"
  }
});

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>New expenses</h4>
                <p className={classes.cardCategoryWhite}>
                  Please, enter new expenses data here
                </p>
              </CardHeader>
              <CardBody>
                <Grid container>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomSelect
                      labelText="Category"
                      id="category"
                      formControlProps={{
                        fullWidth: true
                      }}
                    >
                      {Array.from(Array(10).keys()).map(index => (
                        <option
                          key={`keyCategory${index + 1}`}
                          value={`Category ${index + 1}`}
                          formControlProps={{
                            fullWidth: true
                          }}
                        >{`Category ${index + 1}`}</option>
                      ))}
                    </CustomSelect>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Description"
                      id="expenses-description"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                    <CustomInput
                      labelText="Value"
                      id="expenses-value"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        startAdornment: (
                          <InputAdornment position="start">UAH</InputAdornment>
                        )
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <Button
                      color="primary"
                      className={classes.addExpensesButton}
                    >
                      Add expenses
                    </Button>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>Latest expenses</h4>
                <p className={classes.cardCategoryWhite}>
                  Here is latest 20 expenses
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Date", "Category", "Expenses", "Value, UAH"]}
                  tableData={Array.from(Array(20).keys()).map(index => [
                    new Date().toDateString(),
                    `Category ${index + 1}`,
                    index % 2 === 0 ? `Expenses ${index + 1}` : "",
                    ((index + 1) * 12.34).toFixed(2)
                  ])}
                />
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withStyles(dashboardStyle)(Dashboard));
