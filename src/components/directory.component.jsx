import React from "react";
import MenuItem from "./menuItem";
import "./directoryStyles.scss";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../redux/directory/directory.selector";

function Directory() {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
}

export default withRouter(Directory);
