import { ChatAvatar } from "../ChatAvatar";

export const ChatItem = ({user, msg, image}) => {
    return (
        <div
          style={{ animationDelay: `0.8s` }}
          className={`chat__item ${user ? user : ""}`}
        >
            <div className="chat__item__content">
                <div className="chat__msg">{msg}</div>
                    <div className="chat__meta">
                        <span>16 mins ago</span>
                        <span>Seen 1.03PM</span>
                </div>
            </div>
            <ChatAvatar isOnline="active" image={image} />
        </div>
    );
}