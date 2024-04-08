import { useState } from "react";

import classes from "./SearchForm.module.scss";

const SearchForm = ({ setText }) => {
    const [enteredSearch, setEnteredSearch] = useState("");

    const searchHandler = (event) => {
        event.preventDefault();
        // Remove leading and trailing spaces in JavaScript strings
        setText(enteredSearch.trim());
    };

    const resetSearch = () => setEnteredSearch("");

    const onChangeHandler = (e) => setEnteredSearch(e.target.value);

    // check-in search tool is available
    const checkInput = (search) => search.trim().length === 0;
    // styled button
    const styled = checkInput(enteredSearch) ? classes.invalid : classes.valid;

    return (
        <div className={classes.showcase}>
            <form className={classes.form} onSubmit={searchHandler}>
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={enteredSearch}
                    onChange={onChangeHandler}
                />
                <div className={classes.button}>
                    <button
                        type="button"
                        onClick={resetSearch}
                        style={{ cursor: "pointer" }}
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={checkInput(enteredSearch)}
                        className={styled}
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
