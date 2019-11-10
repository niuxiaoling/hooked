import React, { useState, useRef } from 'react'
const Search = (props) => {
    /**
     * 返回一个有状态值，以及一个更新它的函数。在初始渲染期间，返回的状态（state）与作为第一个参数（initialState）传递的值相同。
     * 在随后的重新渲染过程中，返回的第一个值searchValue将始终是应用更新后的最新状态。
     */
    const initialState = ''
    const [searchValue, setSearchValue] = useState(initialState);
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }
    const resetInputField = () => {
        setSearchValue("")
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }
    /**useRef
     * 返回一个可变的ref对象，.current该对象的属性已初始化为传递的参数（initialValue）。返回的对象将在组件的整个生存期内持续存在。
     * 常用的是强制性地访问子级 
     * */
    const inputEl = useRef(null);
    const onButtonClick = () => {
        console.log(inputEl)
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <div>
            <form className="search">
                <input value={searchValue} onChange={handleSearchInputChanges} type="text"/>
                <input onClick={callSearchFunction} type="submit" value="SEARCH"/>
            </form>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
}
export default Search