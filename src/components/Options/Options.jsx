import s from "./Options.module.css";

export default function Options({ updateFeedback, totalFeedback }) {
  return (
    <div className={s.wrapper}>
      <button onClick={() => updateFeedback("good")} className={s.button}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={s.button}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={s.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={() => updateFeedback("reset")} className={s.button}>
          Reset
        </button>
      )}
    </div>
  );
}
