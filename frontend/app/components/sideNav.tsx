import Link from "next/link";
import "../sass/Sidenav.scss";
import HomeIcon from "../images/home.svg";
import ProfileIcon from "../images/profile.svg";
import AppointmentsIcon from "../images/appointments.svg";
import ResourcesIcon from "../images/resources.svg";
import GroupsIcon from "../images/groups.svg";
import Image from "next/image";
import BrainIcon from "../images/fluent--brain-circuit-20-filled.svg";

export default function Sidenav(){
    return (
        
        <div className="navbar"> 
          <div className="nav-logo">
                <div className="logo-image">
                    <Image
                        src={BrainIcon}
                        alt="MindHarmony Logo"
                        width={40}
                        quality={100}
                    />
                </div>
                <div className="logo-content">
                <h1>MindHarmony</h1>
                </div>
            
            </div>    
            <div className="nav-content-container"> 
            <div className="home-container">
                <div className="icon-img">
                    <Image
                        src={HomeIcon}
                        alt="Home Icon"
                        width={30}
                        height={30}
                        quality={100}
                    />
                </div>
                <div className="nav-item">
        <Link href="home" >Dashboard</Link>
        </div>
        </div>
        <div className="profile-container">
            <div className="icon-img">
                <Image
                    src={ProfileIcon}
                    alt="Profile Icon"
                    width={30}
                    height={30}
                    quality={100}
                />
            </div>
            <div className="nav-item">
        <Link href="profile" >Profile</Link>
        </div>
        </div>
        <div className="appointments-container">
            <div className="icon-img">
                <Image
                    src={AppointmentsIcon}
                    alt="Appointments Icon"
                    width={30}
                    height={30}
                    quality={100}
                />
            </div>
            <div className="nav-item">
        <Link href="appointments" >Appointments</Link>
        </div>
        </div>
        <div className="resources-container">
            <div className="icon-img">
                <Image
                    src={ResourcesIcon}
                    alt="Resources Icon"
                    width={30}
                    height={30}
                    quality={100}
                />
            </div>
            <div className="nav-item">
        <Link href="resources">Resources</Link>
        </div>
        </div>
        <div className="groups-container">
            <div className="icon-img">
                <Image
                    src={GroupsIcon}
                    alt="Groups Icon"
                    width={30}
                    height={30}
                    quality={100}
                />
            </div>
            <div className="nav-item">
        <Link href="groups">Support Groups</Link>
        </div>
        </div>
        </div> 
        </div>
    )

}