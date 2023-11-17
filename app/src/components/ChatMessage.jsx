import React from 'react';
import { Avatar, Card, CardBody, Tooltip } from "@nextui-org/react";

const ChatMessage = ({ name, avatar, message, colorClass, position }) => {
  const flexDirection = position === 'left' ? 'flex-row' : 'flex-row-reverse';
  return (
    <div className={`chat-message mb-2`}>
      <div className={`overflow-visible flex ${flexDirection} gap-3`}>
        <div className="flex shrink">

          <Tooltip offset={-2} color={colorClass} content={name} className="capitalize">
            <Avatar className={`'self-center place-self-center ${avatar ? 'visible' : 'invisible'}`} isBordered color={colorClass} src={avatar} alt={name} />
          </Tooltip>

        </div>
        <Card className={`bg-${colorClass} max-w-[80%] rounded-full`}>
          <CardBody className="flex flex-col grow py-2 px-4" >
            <p>{message}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ChatMessage;
