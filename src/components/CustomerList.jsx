import { EyeIcon, PlusIcon } from '@heroicons/react/24/outline';
import { FaPlus, FaCalendarAlt, FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CustomerList() {
  const customers = new Array(8).fill({
    date: "Dec. 30, 2024",
    name: "Amit Jain",
    amount: "INR 45,000",
    pieces: 4,
    invoiceId: "#123432",
    status: "Pending",
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-poppins font-semibold text-[18px] leading-[20px] tracking-[0.5px]">Customer List</h2>
        <div className="flex items-center gap-2">
          <NavLink to="/new-customer">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-secondary">
              <svg width="237" height="32" viewBox="0 0 237 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.1875 6.1625C25.825 5.6375 25.3625 5.175 24.8375 4.8125C23.65 3.95 22.1 3.5 20.2375 3.5H9.7625C9.5125 3.5 9.2625 3.5125 9.025 3.5375C4.925 3.8 2.5 6.4625 2.5 10.7625V21.2375C2.5 23.1 2.95 24.65 3.8125 25.8375C4.175 26.3625 4.6375 26.825 5.1625 27.1875C6.1875 27.9375 7.4875 28.375 9.025 28.475C9.2625 28.4875 9.5125 28.5 9.7625 28.5H20.2375C24.7875 28.5 27.5 25.7875 27.5 21.2375V10.7625C27.5 8.9 27.05 7.35 26.1875 6.1625ZM10.575 14.35L9.9625 13.7125C9.6375 13.3875 9.375 12.8 9.375 12.4V10.9C9.375 10.1125 9.9625 9.525 10.6875 9.525H13.3625C13.875 9.525 14.1875 10.0875 13.9125 10.525L11.6 14.25C11.375 14.6125 10.8625 14.6625 10.575 14.35ZM20.625 12.275C20.625 12.8 20.3 13.45 19.975 13.775L17.1625 16.2625C16.775 16.5875 16.5125 17.2375 16.5125 17.7625V20.575C16.5125 20.9625 16.25 21.4875 15.925 21.6875L15 22.275C14.15 22.8 12.975 22.2125 12.975 21.1625V17.7C12.975 17.2375 12.7125 16.65 12.45 16.325L12.15 16C11.95 15.7875 11.9125 15.4625 12.0625 15.2L15.4125 9.825C15.5375 9.6375 15.7375 9.5125 15.9625 9.5125H19.3125C20.0375 9.5125 20.625 10.1 20.625 10.825V12.275Z" fill="#5A6ACF" />
                <path d="M58 26C57.45 26 56.9792 25.8042 56.5875 25.4125C56.1958 25.0208 56 24.55 56 24V10C56 9.45 56.1958 8.97917 56.5875 8.5875C56.9792 8.19583 57.45 8 58 8H59V6H61V8H69V6H71V8H72C72.55 8 73.0208 8.19583 73.4125 8.5875C73.8042 8.97917 74 9.45 74 10V24C74 24.55 73.8042 25.0208 73.4125 25.4125C73.0208 25.8042 72.55 26 72 26H58ZM58 24H72V14H58V24ZM58 12H72V10H58V12ZM65 18C64.7167 18 64.4792 17.9042 64.2875 17.7125C64.0958 17.5208 64 17.2833 64 17C64 16.7167 64.0958 16.4792 64.2875 16.2875C64.4792 16.0958 64.7167 16 65 16C65.2833 16 65.5208 16.0958 65.7125 16.2875C65.9042 16.4792 66 16.7167 66 17C66 17.2833 65.9042 17.5208 65.7125 17.7125C65.5208 17.9042 65.2833 18 65 18ZM61 18C60.7167 18 60.4792 17.9042 60.2875 17.7125C60.0958 17.5208 60 17.2833 60 17C60 16.7167 60.0958 16.4792 60.2875 16.2875C60.4792 16.0958 60.7167 16 61 16C61.2833 16 61.5208 16.0958 61.7125 16.2875C61.9042 16.4792 62 16.7167 62 17C62 17.2833 61.9042 17.5208 61.7125 17.7125C61.5208 17.9042 61.2833 18 61 18ZM69 18C68.7167 18 68.4792 17.9042 68.2875 17.7125C68.0958 17.5208 68 17.2833 68 17C68 16.7167 68.0958 16.4792 68.2875 16.2875C68.4792 16.0958 68.7167 16 69 16C69.2833 16 69.5208 16.0958 69.7125 16.2875C69.9042 16.4792 70 16.7167 70 17C70 17.2833 69.9042 17.5208 69.7125 17.7125C69.5208 17.9042 69.2833 18 69 18ZM65 22C64.7167 22 64.4792 21.9042 64.2875 21.7125C64.0958 21.5208 64 21.2833 64 21C64 20.7167 64.0958 20.4792 64.2875 20.2875C64.4792 20.0958 64.7167 20 65 20C65.2833 20 65.5208 20.0958 65.7125 20.2875C65.9042 20.4792 66 20.7167 66 21C66 21.2833 65.9042 21.5208 65.7125 21.7125C65.5208 21.9042 65.2833 22 65 22ZM61 22C60.7167 22 60.4792 21.9042 60.2875 21.7125C60.0958 21.5208 60 21.2833 60 21C60 20.7167 60.0958 20.4792 60.2875 20.2875C60.4792 20.0958 60.7167 20 61 20C61.2833 20 61.5208 20.0958 61.7125 20.2875C61.9042 20.4792 62 20.7167 62 21C62 21.2833 61.9042 21.5208 61.7125 21.7125C61.5208 21.9042 61.2833 22 61 22ZM69 22C68.7167 22 68.4792 21.9042 68.2875 21.7125C68.0958 21.5208 68 21.2833 68 21C68 20.7167 68.0958 20.4792 68.2875 20.2875C68.4792 20.0958 68.7167 20 69 20C69.2833 20 69.5208 20.0958 69.7125 20.2875C69.9042 20.4792 70 20.7167 70 21C70 21.2833 69.9042 21.5208 69.7125 21.7125C69.5208 21.9042 69.2833 22 69 22Z" fill="#5A6ACF" />
                <circle cx="116" cy="16" r="16" fill="#FFE6CC" />
                <path d="M115 17H109V15H115V9H117V15H123V17H117V23H115V17Z" fill="#5A6ACF" />
                <path d="M149.868 19.14H146.22L145.548 21H144.396L147.42 12.684H148.68L151.692 21H150.54L149.868 19.14ZM149.556 18.252L148.044 14.028L146.532 18.252H149.556ZM153.102 17.688C153.102 17.016 153.238 16.428 153.51 15.924C153.782 15.412 154.154 15.016 154.626 14.736C155.106 14.456 155.642 14.316 156.234 14.316C156.746 14.316 157.222 14.436 157.662 14.676C158.102 14.908 158.438 15.216 158.67 15.6V12.12H159.774V21H158.67V19.764C158.454 20.156 158.134 20.48 157.71 20.736C157.286 20.984 156.79 21.108 156.222 21.108C155.638 21.108 155.106 20.964 154.626 20.676C154.154 20.388 153.782 19.984 153.51 19.464C153.238 18.944 153.102 18.352 153.102 17.688ZM158.67 17.7C158.67 17.204 158.57 16.772 158.37 16.404C158.17 16.036 157.898 15.756 157.554 15.564C157.218 15.364 156.846 15.264 156.438 15.264C156.03 15.264 155.658 15.36 155.322 15.552C154.986 15.744 154.718 16.024 154.518 16.392C154.318 16.76 154.218 17.192 154.218 17.688C154.218 18.192 154.318 18.632 154.518 19.008C154.718 19.376 154.986 19.66 155.322 19.86C155.658 20.052 156.03 20.148 156.438 20.148C156.846 20.148 157.218 20.052 157.554 19.86C157.898 19.66 158.17 19.376 158.37 19.008C158.57 18.632 158.67 18.196 158.67 17.7ZM161.711 17.688C161.711 17.016 161.847 16.428 162.119 15.924C162.391 15.412 162.763 15.016 163.235 14.736C163.715 14.456 164.251 14.316 164.843 14.316C165.355 14.316 165.831 14.436 166.271 14.676C166.711 14.908 167.047 15.216 167.279 15.6V12.12H168.383V21H167.279V19.764C167.063 20.156 166.743 20.48 166.319 20.736C165.895 20.984 165.399 21.108 164.831 21.108C164.247 21.108 163.715 20.964 163.235 20.676C162.763 20.388 162.391 19.984 162.119 19.464C161.847 18.944 161.711 18.352 161.711 17.688ZM167.279 17.7C167.279 17.204 167.179 16.772 166.979 16.404C166.779 16.036 166.507 15.756 166.163 15.564C165.827 15.364 165.455 15.264 165.047 15.264C164.639 15.264 164.267 15.36 163.931 15.552C163.595 15.744 163.327 16.024 163.127 16.392C162.927 16.76 162.827 17.192 162.827 17.688C162.827 18.192 162.927 18.632 163.127 19.008C163.327 19.376 163.595 19.66 163.931 19.86C164.267 20.052 164.639 20.148 165.047 20.148C165.455 20.148 165.827 20.052 166.163 19.86C166.507 19.66 166.779 19.376 166.979 19.008C167.179 18.632 167.279 18.196 167.279 17.7ZM174.02 16.812C174.02 15.996 174.204 15.264 174.572 14.616C174.94 13.96 175.44 13.448 176.072 13.08C176.712 12.712 177.42 12.528 178.196 12.528C179.108 12.528 179.904 12.748 180.584 13.188C181.264 13.628 181.76 14.252 182.072 15.06H180.764C180.532 14.556 180.196 14.168 179.756 13.896C179.324 13.624 178.804 13.488 178.196 13.488C177.612 13.488 177.088 13.624 176.624 13.896C176.16 14.168 175.796 14.556 175.532 15.06C175.268 15.556 175.136 16.14 175.136 16.812C175.136 17.476 175.268 18.06 175.532 18.564C175.796 19.06 176.16 19.444 176.624 19.716C177.088 19.988 177.612 20.124 178.196 20.124C178.804 20.124 179.324 19.992 179.756 19.728C180.196 19.456 180.532 19.068 180.764 18.564H182.072C181.76 19.364 181.264 19.984 180.584 20.424C179.904 20.856 179.108 21.072 178.196 21.072C177.42 21.072 176.712 20.892 176.072 20.532C175.44 20.164 174.94 19.656 174.572 19.008C174.204 18.36 174.02 17.628 174.02 16.812ZM190.029 14.424V21H188.937V20.028C188.729 20.364 188.437 20.628 188.061 20.82C187.693 21.004 187.285 21.096 186.837 21.096C186.325 21.096 185.865 20.992 185.457 20.784C185.049 20.568 184.725 20.248 184.485 19.824C184.253 19.4 184.137 18.884 184.137 18.276V14.424H185.217V18.132C185.217 18.78 185.381 19.28 185.709 19.632C186.037 19.976 186.485 20.148 187.053 20.148C187.637 20.148 188.097 19.968 188.433 19.608C188.769 19.248 188.937 18.724 188.937 18.036V14.424H190.029ZM194.701 21.108C194.197 21.108 193.745 21.024 193.345 20.856C192.945 20.68 192.629 20.44 192.397 20.136C192.165 19.824 192.037 19.468 192.013 19.068H193.141C193.173 19.396 193.325 19.664 193.597 19.872C193.877 20.08 194.241 20.184 194.689 20.184C195.105 20.184 195.433 20.092 195.673 19.908C195.913 19.724 196.033 19.492 196.033 19.212C196.033 18.924 195.905 18.712 195.649 18.576C195.393 18.432 194.997 18.292 194.461 18.156C193.973 18.028 193.573 17.9 193.261 17.772C192.957 17.636 192.693 17.44 192.469 17.184C192.253 16.92 192.145 16.576 192.145 16.152C192.145 15.816 192.245 15.508 192.445 15.228C192.645 14.948 192.929 14.728 193.297 14.568C193.665 14.4 194.085 14.316 194.557 14.316C195.285 14.316 195.873 14.5 196.321 14.868C196.769 15.236 197.009 15.74 197.041 16.38H195.949C195.925 16.036 195.785 15.76 195.529 15.552C195.281 15.344 194.945 15.24 194.521 15.24C194.129 15.24 193.817 15.324 193.585 15.492C193.353 15.66 193.237 15.88 193.237 16.152C193.237 16.368 193.305 16.548 193.441 16.692C193.585 16.828 193.761 16.94 193.969 17.028C194.185 17.108 194.481 17.2 194.857 17.304C195.329 17.432 195.713 17.56 196.009 17.688C196.305 17.808 196.557 17.992 196.765 18.24C196.981 18.488 197.093 18.812 197.101 19.212C197.101 19.572 197.001 19.896 196.801 20.184C196.601 20.472 196.317 20.7 195.949 20.868C195.589 21.028 195.173 21.108 194.701 21.108ZM200.475 15.324V19.2C200.475 19.52 200.543 19.748 200.679 19.884C200.815 20.012 201.051 20.076 201.387 20.076H202.191V21H201.207C200.599 21 200.143 20.86 199.839 20.58C199.535 20.3 199.383 19.84 199.383 19.2V15.324H198.531V14.424H199.383V12.768H200.475V14.424H202.191V15.324H200.475ZM206.882 21.108C206.266 21.108 205.706 20.968 205.202 20.688C204.706 20.408 204.314 20.012 204.026 19.5C203.746 18.98 203.606 18.38 203.606 17.7C203.606 17.028 203.75 16.436 204.038 15.924C204.334 15.404 204.734 15.008 205.238 14.736C205.742 14.456 206.306 14.316 206.93 14.316C207.554 14.316 208.118 14.456 208.622 14.736C209.126 15.008 209.522 15.4 209.81 15.912C210.106 16.424 210.254 17.02 210.254 17.7C210.254 18.38 210.102 18.98 209.798 19.5C209.502 20.012 209.098 20.408 208.586 20.688C208.074 20.968 207.506 21.108 206.882 21.108ZM206.882 20.148C207.274 20.148 207.642 20.056 207.986 19.872C208.33 19.688 208.606 19.412 208.814 19.044C209.03 18.676 209.138 18.228 209.138 17.7C209.138 17.172 209.034 16.724 208.826 16.356C208.618 15.988 208.346 15.716 208.01 15.54C207.674 15.356 207.31 15.264 206.918 15.264C206.518 15.264 206.15 15.356 205.814 15.54C205.486 15.716 205.222 15.988 205.022 16.356C204.822 16.724 204.722 17.172 204.722 17.7C204.722 18.236 204.818 18.688 205.01 19.056C205.21 19.424 205.474 19.7 205.802 19.884C206.13 20.06 206.49 20.148 206.882 20.148ZM220.098 14.304C220.61 14.304 221.066 14.412 221.466 14.628C221.866 14.836 222.182 15.152 222.414 15.576C222.646 16 222.762 16.516 222.762 17.124V21H221.682V17.28C221.682 16.624 221.518 16.124 221.19 15.78C220.87 15.428 220.434 15.252 219.882 15.252C219.314 15.252 218.862 15.436 218.526 15.804C218.19 16.164 218.022 16.688 218.022 17.376V21H216.942V17.28C216.942 16.624 216.778 16.124 216.45 15.78C216.13 15.428 215.694 15.252 215.142 15.252C214.574 15.252 214.122 15.436 213.786 15.804C213.45 16.164 213.282 16.688 213.282 17.376V21H212.19V14.424H213.282V15.372C213.498 15.028 213.786 14.764 214.146 14.58C214.514 14.396 214.918 14.304 215.358 14.304C215.91 14.304 216.398 14.428 216.822 14.676C217.246 14.924 217.562 15.288 217.77 15.768C217.954 15.304 218.258 14.944 218.682 14.688C219.106 14.432 219.578 14.304 220.098 14.304ZM231.053 17.46C231.053 17.668 231.041 17.888 231.017 18.12H225.761C225.801 18.768 226.021 19.276 226.421 19.644C226.829 20.004 227.321 20.184 227.897 20.184C228.369 20.184 228.761 20.076 229.073 19.86C229.393 19.636 229.617 19.34 229.745 18.972H230.921C230.745 19.604 230.393 20.12 229.865 20.52C229.337 20.912 228.681 21.108 227.897 21.108C227.273 21.108 226.713 20.968 226.217 20.688C225.729 20.408 225.345 20.012 225.065 19.5C224.785 18.98 224.645 18.38 224.645 17.7C224.645 17.02 224.781 16.424 225.053 15.912C225.325 15.4 225.705 15.008 226.193 14.736C226.689 14.456 227.257 14.316 227.897 14.316C228.521 14.316 229.073 14.452 229.553 14.724C230.033 14.996 230.401 15.372 230.657 15.852C230.921 16.324 231.053 16.86 231.053 17.46ZM229.925 17.232C229.925 16.816 229.833 16.46 229.649 16.164C229.465 15.86 229.213 15.632 228.893 15.48C228.581 15.32 228.233 15.24 227.849 15.24C227.297 15.24 226.825 15.416 226.433 15.768C226.049 16.12 225.829 16.608 225.773 17.232H229.925ZM234.086 15.492C234.278 15.116 234.55 14.824 234.902 14.616C235.262 14.408 235.698 14.304 236.21 14.304V15.432H235.922C234.698 15.432 234.086 16.096 234.086 17.424V21H232.994V14.424H234.086V15.492Z" fill="#1F384C" />
              </svg>


              {/* <PlusIcon className="w-6 h-6 text-[#5A6ACF] bg-[#FFE6CC] rounded-full p-1" />
              Add Customer */}
            </button>
          </NavLink>
        </div>
      </div>

      {/* Subheading */}
      <p className="text-gray-500 text-sm mb-4 font-poppins">List of people whose orders are there</p>

      {/* Table Section */}
      <div className="mt-4 p-4">
        <table className="w-full ">
          {/* Table Header */}
          <thead className='text-left'>
            <tr className="text-black">
              <th className="p-3 font-poppins">Date</th>
              <th className="p-3 font-poppins">Name</th>
              <th className="p-3 font-poppins">Amount</th>
              <th className="p-3 font-poppins">Pieces</th>
              <th className="p-3 font-poppins">Invoice ID</th>
              <th className="p-3 font-poppins">Status</th>
              {/* <th className="p-3">Action</th> */}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="text-gray-700">
                <td className="p-3">{customer.date}</td>
                <td className="p-3 flex items-center gap-2 ">
                  <img
                    src={`https://i.pravatar.cc/40?img=${index + 1}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  {customer.name}
                </td>
                <td className="p-3 font-poppins">{customer.amount}</td>
                <td className="p-3 font-poppins">{customer.pieces}</td>
                <td className="p-3 font-poppins">{customer.invoiceId}</td>
                <td className="p-3 font-poppins">{customer.status}</td>
                <td className="p-3 flex justify-center">
                  <button className="text-gray-600 hover:text-gray-800 transition">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
