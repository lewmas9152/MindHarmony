import Link from "next/link";
import ChatIcon from "../images/chatscon.svg";
import Image from "next/image";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import "../sass/Chats.scss";

export default function SupportGroups(){
    return (
        <div className="container">
            <div className="nav-bar">
                <nav>
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
                            <Link href="/chats">Chats</Link>
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
                                <Link href="/groups">Groups</Link>
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
                                <Link href="/users">Users</Link>
                            </div>
                        </div>
                    </div>
            <Link href="/groups"></Link>
            <Link href="/users"></Link>
            </nav>
            </div>
            <div className="content-container">
                <h1>Chats</h1>
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