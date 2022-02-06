import s from "./Statistic.module.css";
import PropTypes from "prop-types";

const Statistic = ({ name, data }) => {
  return (
    <li>
      <span>{name} -</span>
      <span className={s.fedbackStatistics}>{data}</span>
    </li>
  );
};

export default Statistic;

Statistic.propTypes = {
  namet: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  fedbackStatistics: PropTypes.func.isRequired,
};