import React from 'react';

function PopupMessage(props) {
        return (
            <div className="popup_message">
                Are you sure to delete todo?
                <div className="yes_to_delete"
                 onClick={() => props.deleteTodo()}
                >Yes</div>
                <div className="no_to_delete"
                    onClick={() => props.closePopup()}
                >No</div>
            </div>
        )
    
}

export default PopupMessage
