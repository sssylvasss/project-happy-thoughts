import React from 'react';

import { MessageElement } from './MessageElement'

export const MessageList = ({ messageList, onLikesIncrease }) => {
    

    return (
        <>
            {messageList.map(message => (
                <MessageElement
                    key={message._id}
                    message={message}
                    onLikesIncrease={onLikesIncrease}
                />
            ))}
        </>
    );
};

