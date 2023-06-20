import { useState } from "react";

import classes from "./SearchForm.module.scss";

const SearchForm = ({ setText }) => {
    const [search, setSearch] = useState("");

    const searchHandler = (event) => {
        event.preventDefault();
        // Remove leading and trailing spaces in JavaScript strings
        setText(search.trim());
    };

    const resetSearch = () => setSearch("");

    const onChangeHandler = (e) => setSearch(e.target.value);

    // check-in search tool is available
    const checkInput = (search) => (search.trim().length === 0 ? false : true);

    // styled button
    const styled = checkInput(search) ? classes.valid : classes.invalid;

    return (
        <div className={classes.showcase}>
            <form className={classes.form} onSubmit={searchHandler}>
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    value={search}
                    onChange={onChangeHandler}
                />
                <div className={classes.button}>
                    <button type="button" onClick={resetSearch}>
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={checkInput}
                        className={styled}>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
