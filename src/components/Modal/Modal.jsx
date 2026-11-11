import { Component } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscModalClose);
  }

  handleEscModalClose = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBeckdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largImage } = this.props;

    return (
      <div onClick={this.handleBeckdropClick} className={style.beackdrop}>
        <div className={style.modal}>
          <img className={style.img} src={largImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
