import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ChatMessages } from '../../components/ChatMessages'
import { ChatUser } from '../../components/ChatUser'

export const ChatPage = () => {
    return(
        <div className={styles['chat-page-container']}>
            <Header user={{ picture_uri: '' }} useMargin={false} />
            <div className={styles['chat-page-content']}>
                <div className={styles['chat-main']}>
                    <ChatMessages />
                    <ChatUser />
                </div>
            </div>
            <Footer useMargin={false} />
        </div>
    )
}

export default ChatPage
