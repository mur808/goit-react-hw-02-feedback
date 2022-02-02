import s from "./FeedbackOptions.module.css";

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
