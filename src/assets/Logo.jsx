export default function Logo({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="148"
      // height="132"
      fill="none"
      viewBox="0 0 148 132"
      className={className}
      style={{ overflow: "visible" }}
    >
      <g className="BackRect">
        <rect
          width="105"
          height="105"
          x="6.044"
          y="20.698"
          fill="#0077B6"
          stroke="#023E8A"
          strokeWidth="5"
          rx="3.5"
          transform="rotate(2 6.044 20.698)"
        ></rect>
      </g>
      <g className="MidRect">
        <rect
          width="105"
          height="105"
          x="25.954"
          y="2.439"
          fill="#0077B6"
          stroke="#023E8A"
          strokeWidth="5"
          rx="3.5"
          transform="rotate(1 25.954 2.44)"
        ></rect>
      </g>
      <g className="FrontRect">
        <rect
          width="105"
          height="105"
          x="40.315"
          y="14.633"
          fill="#fff"
          stroke="#023E8A"
          strokeWidth="5"
          rx="3.5"
        ></rect>
        <g>
          <mask
            id="mask0_0_1"
            width="91"
            height="91"
            x="47"
            y="22"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <path fill="#023E8A" d="M47.815 22.133h90v90h-90z"></path>
          </mask>
          <g mask="url(#mask0_0_1)">
            {/* <path fill="#023E8A" d="M47.815 22.133h90v90h-90z"></path> */}
            <path
              fill="#023E8A"
              d="M47.815 22.133h90v90h-90z"
              stroke="#219EBC"
              strokeWidth="4"
            ></path>
            <circle cx="87.966" cy="45.983" r="10" fill="#FFB703"></circle>
            <path
              fill="#fff"
              stroke="#219EBC"
              strokeWidth="3"
              d="M62.934 77.233c1.348-2.334 4.716-2.334 6.063 0l18.186 31.5c1.348 2.333-.337 5.25-3.03 5.25H47.778c-2.694 0-4.378-2.917-3.031-5.25z"
            ></path>
            <path
              fill="#fff"
              stroke="#219EBC"
              strokeWidth="3"
              d="M104.934 58.233c1.348-2.334 4.716-2.334 6.063 0l31.177 54c1.347 2.333-.337 5.25-3.032 5.25H76.789c-2.694 0-4.379-2.917-3.031-5.25z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

// const SvgIcon = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     // width="148"
//     // height="132"
//     fill="none"
//     viewBox="0 0 148 132"
//     className={className}
//     style={{ overflow: "visible" }}
//   >
//     <g className="BackRect">
//       <rect
//         width="105"
//         height="105"
//         x="6.044"
//         y="20.698"
//         fill="#0077B6"
//         stroke="#023E8A"
//         strokeWidth="5"
//         rx="3.5"
//         transform="rotate(2 6.044 20.698)"
//       ></rect>
//     </g>
//     <g className="MidRect">
//       <rect
//         width="105"
//         height="105"
//         x="25.954"
//         y="2.439"
//         fill="#0077B6"
//         stroke="#023E8A"
//         strokeWidth="5"
//         rx="3.5"
//         transform="rotate(1 25.954 2.44)"
//       ></rect>
//     </g>
//     <g className="FrontRect">
//       <rect
//         width="105"
//         height="105"
//         x="40.315"
//         y="14.633"
//         fill="#fff"
//         stroke="#023E8A"
//         strokeWidth="5"
//         rx="3.5"
//       ></rect>
//       <g>
//         <mask
//           id="mask0_0_1"
//           width="91"
//           height="91"
//           x="47"
//           y="22"
//           maskUnits="userSpaceOnUse"
//           style={{ maskType: "alpha" }}
//         >
//           <path fill="#023E8A" d="M47.815 22.133h90v90h-90z"></path>
//         </mask>
//         <g mask="url(#mask0_0_1)">
//           {/* <path fill="#023E8A" d="M47.815 22.133h90v90h-90z"></path> */}
//           <path
//             fill="#023E8A"
//             d="M47.815 22.133h90v90h-90z"
//             stroke="#219EBC"
//             strokeWidth="4"
//           ></path>
//           <circle cx="87.966" cy="45.983" r="10" fill="#FFB703"></circle>
//           <path
//             fill="#fff"
//             stroke="#219EBC"
//             strokeWidth="3"
//             d="M62.934 77.233c1.348-2.334 4.716-2.334 6.063 0l18.186 31.5c1.348 2.333-.337 5.25-3.03 5.25H47.778c-2.694 0-4.378-2.917-3.031-5.25z"
//           ></path>
//           <path
//             fill="#fff"
//             stroke="#219EBC"
//             strokeWidth="3"
//             d="M104.934 58.233c1.348-2.334 4.716-2.334 6.063 0l31.177 54c1.347 2.333-.337 5.25-3.032 5.25H76.789c-2.694 0-4.379-2.917-3.031-5.25z"
//           ></path>
//         </g>
//       </g>
//     </g>
//   </svg>
// );
