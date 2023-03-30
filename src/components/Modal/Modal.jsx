import React from 'react';

const Modal = ({uniqueId,modalData}) => {
    console.log(modalData.data);
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">uniqueId={uniqueId}</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="my-modal-5" className="btn">Yay!</label>
                </div>
        </div>
        </div>
                </>
    );
};

export default Modal;