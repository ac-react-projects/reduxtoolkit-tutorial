import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: { textDecoration: "none" },
});

const DashboardPage = () => {
  const classes = useStyles({
    link: {},
  });
  return (
    <section>
      <h1>Dashboard</h1>
      <p>This is the dashboard.</p>

      <Link to="/posts" className={classes.link}>
        <Button variant="contained" color="primary" href="#contained-buttons">
          View Posts
        </Button>
      </Link>
    </section>
  );
};

export default DashboardPage;
