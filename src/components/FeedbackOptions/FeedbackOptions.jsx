import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={s.conteiner}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            name={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
