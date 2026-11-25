type Props = {
  noPadding?: boolean;
};

const Footer: React.FC<Props> = ({ noPadding = false }) => {
  return (
    <footer
      className={`${noPadding ? "pb-4" : "pb-24"} md:pb-4 text-center mt-auto`}
    >
      <div className="flex justify-center space-x-12 mb-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            title={social.title}
            className="transform scale-150 md:scale-125 link-outline"
          >
            {social.svg}
          </a>
        ))}
      </div>
      <div>
        Coded with <span className="sr-only">love</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-1 inline-block mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>{" "}
        by farah Al Sayed
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "farah Al Sayed's Github Profile",
    link: "https://github.com/farah-el-sayed",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "farah Al Sayed's LinkedIn Profile",
    link: "https://www.linkedin.com/in/farah-el-sayed-494bb2336",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "farah Al Sayed's Instagram Profile",
    link: "https://www.instagram.com/your_username/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "farah Al Sayed's WhatsApp",
    link: "https://wa.me/972592249678",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.97L2 22l5.2-1.36A9.93 9.93 0 1 0 12.04 2zm0 18.05a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.8.82-3-.2-.31a8.1 8.1 0 1 1 6.89 3.82zm4.45-6.07c-.24-.12-1.43-.7-1.65-.78s-.38-.12-.54.12-.62.78-.76.94-.28.18-.52.06a6.62 6.62 0 0 1-1.94-1.2 7.28 7.28 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42s.16-.24.24-.4.04-.3-.02-.42-.54-1.3-.74-1.78c-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.3.98 2.46a9.3 9.3 0 0 0 3.57 3.15c.5.22.9.36 1.2.46.5.16.96.14 1.32.08.4-.06 1.43-.58 1.63-1.14s.2-1.04.14-1.14-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "farah Al Sayed on Mostaql",
    link: "https://mostaql.com",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <text
          x="16"
          y="16"
          textAnchor="middle"
          fontSize="8"
          fontWeight="bold"
          direction="rtl"
        >
          مستقل
        </text>
      </svg>
    ),
  },
];

export default Footer;
