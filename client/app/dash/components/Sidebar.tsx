import React from "react";
import { MdLocalOffer } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { FaComment } from "react-icons/fa";

import Link from "next/link";

function Sidebar() {
  return (
    <aside className="sidebar h-screen justify-start">
      <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <span className="menu-title">Main menu</span>
            <ul className="menu-items">
              <li className="menu-item">
                <MdLocalOffer className="text-5" />
                <Link href="/dash/offer">Offer</Link>
              </li>
              <li className="menu-item ">
                <FaUsers className="text-5" />
                <Link href="/dash/users">users</Link>
              </li>
              <li className="menu-item">
                <RiCommunityFill className="text-5" />
                <Link href="/dash/developer">Developer</Link>
              </li>
              <li className="menu-item">
                <FaComment className="text-5" />
                <Link href="/dash/request">Request</Link>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </aside>
    // <div className="sticky flex h-screen flex-row gap-4 overflow-y-auto  sm:overflow-x-hidden">
    //   <aside className="sidebar-sticky sidebar justify-start">
    //     <section className="sidebar-content min-h-[20rem]">
    //       <nav className="menu rounded-md">
    //         <section className="menu-section px-4">
    //           <span className="menu-title">Main menu</span>
    //           <ul className="menu-items">
    //             <li className="menu-item">
    //               <MdLocalOffer className="text-5" />
    //               <Link href="dash/offer">Offer</Link>
    //             </li>
    //             <li className="menu-item menu-active">
    //               <FaUsers className="text-5" />
    //               <span></span>
    //               <Link href="dash/users">users</Link>
    //             </li>
    //             <li className="menu-item">
    //               <RiCommunityFill className="text-5" />
    //               <Link href="dash/Developer">Developer</Link>
    //               <span></span>
    //             </li>
    //             <li className="menu-item">
    //               <FaComment className="text-5" />
    //               <Link href="dash/Request">Request</Link>
    //             </li>
    //           </ul>
    //         </section>
    //       </nav>
    //     </section>
    //   </aside>
    // </div>
  );
}

export default Sidebar;
