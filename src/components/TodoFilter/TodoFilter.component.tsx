import { FC, MouseEvent } from "react";
import { capitalizeWord } from "../../utils/helperFunctions";
import "./TodoFilter.styles.scss";

const TodoFilter: FC<{ filterBy: string; setFilterBy: Function }> = ({
  filterBy,
  setFilterBy,
}) => {
  const options = ["all", "done", "undone"];

  const handleChoose = ({ currentTarget }: MouseEvent) => {
    setFilterBy(currentTarget.getAttribute("data-option"));
  };

  return (
    <div className="TodoFilter">
      <h2>Filter</h2>
      <div className="TodoFilter-optionsWrapper">
        {options.map((option, idx) => (
          <div
            key={idx}
            data-option={option}
            className={`TodoFilter-option ${
              filterBy === option ? "TodoFilter-option-chosen" : ""
            }`}
            onClick={handleChoose}
          >
            {capitalizeWord(option)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoFilter;
