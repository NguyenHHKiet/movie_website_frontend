import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const portalElement = document.getElementById("overlays");

// background outside of click outside onClose button
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />;
};

// content zone on background outside
const ModalOverlay = (props) => {
    return (
        <div className={`${classes.modal} app`}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

// Modal Component is using the default modal for the popup
const Modal = ({ children, onClose }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                portalElement,
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement,
            )}
        </Fragment>
    );
};

export default Modal;
