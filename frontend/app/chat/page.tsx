import Link from "next/link";
import Image from "next/image";
import ChatIcon from "../images/chatscon.svg";
import UserIcon from "../images/user.svg";
import Groupcon from "../images/groupcon.svg";
import ChatLogo from "../images/chat2.png";
import "../sass/Chats.scss";
import User1 from "../images/avatar-1.jpg";
import User2 from "../images/avatar-2.jpg";
import User3 from "../images/avatar-3.jpg";
import User4 from "../images/avatar-7.jpg";
import User5 from "../images/avatar-5.jpg";

export default function SupportGroups() {
    return (
        <div className="container">
            <div className="nav-bar">
                <div className="nav-logo">
                    <div className="img-logo">
                        <Image src={ChatLogo} alt="logo" width={40} quality={100} />
                    </div>
                </div>
                <nav className="nav-container">
                    <div className="chats-container">
                        <div className="image-cont">
                            <Image src={ChatIcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        </div>
                        <div className="chat-item">
                            <Link href="/chat/chats">Chats</Link>
                        </div>
                    </div>
                    <div className="group-container">
                        <div className="image-cont">
                            <Image src={Groupcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        </div>
                        <div className="group-item">
                            <Link href="/chat/groups">Groups</Link>
                        </div>
                    </div>
                    <div className="user-container">
                        <div className="image-cont">
                            <Image src={UserIcon} alt="Chat Icon" width={30} height={30} quality={100} />
                        </div>
                        <div className="user-item">
                            <Link href="/chat/users">Users</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="content-container">
                <div className="top">
                    <div className="top-content">
                        <h1>All Chats</h1>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="active-users">
                    <h2>Active Users</h2>
                    <div className="active">
                        <div className="user1">
                            <div className="user-profile">
                                <Image src={User1} alt="User Icon" width={50} height={50} quality={100} />
                                <div className="online-status"></div>
                            </div>
                        </div>
                        <div className="user2">
                            <div className="user-profile">
                                <Image src={User2} alt="User Icon" width={50} height={50} quality={100} />
                                <div className="online-status"></div>
                            </div>
                        </div>
                        <div className="user3">
                            <div className="user-profile">
                                <Image src={User3} alt="User Icon" width={50} height={50} quality={100} />
                                <div className="online-status"></div>
                            </div>
                        </div>
                        <div className="user4">
                            <div className="user-profile">
                                <Image src={User4} alt="User Icon" width={50} height={50} quality={100} />
                                <div className="online-status"></div>
                            </div>
                        </div>
                        <div className="user5">
                            <div className="user-profile">
                                <Image src={User5} alt="User Icon" width={50} height={50} quality={100} />
                                <div className="online-status"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
    );
}
