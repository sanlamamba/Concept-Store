import { Link } from "react-router-dom";

export const MenuLink = (props) => {
  return (
    <Link
      to={props.link}
      className={
        props.extraClass
          ? "px-3 d-flex " + props.extraClass
          : "px-3 d-flex mx-1"
      }
    >
      {props.title}
    </Link>
  );
};
