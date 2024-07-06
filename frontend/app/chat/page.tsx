import Link from "next/link";
import ChatIcon from "../images/chatscon.svg";
import Image from "next/image";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import ChatLogo from "../images/chat2.png";
import "../sass/Chats.scss";

export default function SupportGroups(){
    return (
        <div className="container">
            <div className="nav-bar">
                <div className="nav-logo">
                    <div className="img-logo">
                        <Image
                        src={ChatLogo}
                        alt="logo"
                        width={40}
                        quality={100}
                        />

                    </div>
                </div>
                <nav className="nav-container">
                    <div className="chats-container">
                        <div className="image-cont">
                            <Image
                                src={ChatIcon}
                                alt="Chat Icon"
                                width={30}
                                height={30}
                                quality={100}
                            />
                        </div>
                        <div className="chat-item">
                            <Link href="/chat/chats">Chats</Link>
                        </div>
                        </div>
                        <div className="group-container">
                            <div className="image-cont">
                                <Image
                                    src={Groupcon}
                                    alt="Chat Icon"
                                    width={30}
                                    height={30}
                                    quality={100}
                                />
                            </div>
                            <div className="group-item">
                                <Link href="/chat/groups">Groups</Link>
                            </div>
                        </div>
                        <div className="user-container">
                            <div className="image-cont">
                                <Image
                                    src={UserIcon}
                                    alt="Chat Icon"
                                    width={30}
                                    height={30}
                                    quality={100}
                                />
                            </div>
                            <div className="user-item">
                                <Link href="/chat/users">Users</Link>
                            </div>
                        </div>
            </nav>
            </div>
            <div className="content-container">
                <h1>All Chats</h1>
            </div>
            <div className="chat-content-container">
                <div className="content">
                    <h1>Support Groups</h1>
                    <p>Support groups are a great way to connect with others who are going through similar experiences. You can join a support group to share your experiences, learn from others, and get support from people who understand what you are going through.</p>
                </div>
                <div className="group-list">
                    <div className="group">
                        <h2>Group Name</h2>
                        <p>Group Description</p>
                        <button>Join Group</button>
                    </div>
                    <div className="group">
                        <h2>Group Name</h2>
                        <p>Group Description</p>
                        <button>Join Group</button>
                    </div>
                    <div className="group">
                        <h2>Group Name</h2>
                        <p>Group Description</p>
                        <button>Join Group</button>
                    </div>
                    <div className="group">
                        <h2>Group Name</h2>
                        <p>Group Description</p>
                        <button>Join Group</button>
                    </div>
                </div>

            </div>
        </div>

    )

}