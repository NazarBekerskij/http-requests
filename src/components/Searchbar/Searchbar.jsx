import { Component } from "react";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchValue);
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form onSubmit={this.handleSubmit} className={style.form}>
          <button type="submit" className={style.button}>
            <span className={style.buttonLabel}>Search</span>
          </button>

          <input
            className={style.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={(event) =>
              this.setState({ searchValue: event.target.value })
            }
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
