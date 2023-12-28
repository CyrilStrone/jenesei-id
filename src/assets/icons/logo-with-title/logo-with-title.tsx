export const LogoWithTitle = (): JSX.Element => {
  return (
    <>
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 29.473 1.1747 33.6716 3.23242 37.3041C3.4301 37.2706 3.81303 37.2113 4.34179 37.1293C8.56494 36.4745 22.0906 34.3773 24.832 32.5045C27.9675 30.3623 27.6286 27.0616 23.9051 23.4772C21.9079 21.5544 20.3575 20.5978 15.8432 18.5027C10.0149 15.7978 7.58377 14.0417 7.58377 12.5375C7.58377 9.9618 13.2061 8.15096 22.1668 7.84054C26.8039 7.68003 34.9077 8.08479 38.4275 8.65291C40.3757 8.96747 40.068 8.98814 32.9876 9.01709C25.484 9.04811 21.4714 9.2996 17.9945 9.95741C15.8326 10.3663 13.6198 11.2585 13.41 11.8062C12.9839 12.9184 16.1506 14.4868 22.2605 16.1891C32.6944 19.0964 36.8639 21.0801 40.5582 24.8959C41.8355 26.2154 42.6971 27.393 43.2683 28.6011C44.0232 30.1969 44.1051 30.6016 44.0978 32.6981C44.0909 34.7756 44.0021 35.2057 43.2688 36.7212C40.6895 42.0498 33.4775 46.4913 24.1671 48.4846C22.9961 48.7353 20.2426 49.4114 20.2426 49.5479C21.7828 49.8446 23.3732 50 25 50Z"
          fill="black"
        />
        <path
          d="M23.9051 23.4772C27.6286 27.0616 27.9675 30.3623 24.832 32.5045C22.0906 34.3773 8.56494 36.4745 4.34179 37.1293C3.81303 37.2113 3.4301 37.2706 3.23242 37.3041C3.55662 37.8764 3.90272 38.4347 4.26961 38.9777C7.91537 44.3742 13.6128 48.2706 20.2426 49.5479C20.2426 49.4114 22.9961 48.7353 24.1671 48.4846C33.4775 46.4913 40.6895 42.0498 43.2688 36.7212C44.0021 35.2057 44.0909 34.7756 44.0978 32.6981C44.1051 30.6016 44.0232 30.1969 43.2683 28.6011C42.6971 27.393 41.8355 26.2154 40.5582 24.8959C36.8639 21.0801 32.6944 19.0964 22.2605 16.1891C16.1506 14.4868 12.9839 12.9184 13.41 11.8062C13.6198 11.2585 15.8326 10.3663 17.9945 9.95741C21.4714 9.2996 25.484 9.04811 32.9876 9.01709C40.068 8.98814 40.3757 8.96747 38.4275 8.65291C34.9077 8.08479 26.8039 7.68003 22.1668 7.84054C13.2061 8.15096 7.58377 9.9618 7.58377 12.5375C7.58377 14.0417 10.0149 15.7978 15.8432 18.5027C20.3575 20.5978 21.9079 21.5544 23.9051 23.4772Z"
          fill="#4195D2"
        />
      </svg>
      <svg className="title" xmlns="http://www.w3.org/2000/svg" width="208" height="34" viewBox="0 0 208 34" fill="none">
        <path
          d="M22.8837 0.050073V23.8851C22.8837 26.6892 21.8488 29.026 19.7791 30.8954C17.7094 32.7648 15.0054 33.6996 11.6672 33.6996C8.46244 33.6996 5.82523 32.7648 3.75552 30.8954C1.68581 29.026 0.433972 26.6392 0 23.7349L5.85862 22.2327C6.02553 23.9686 6.60972 25.3873 7.61119 26.489C8.64605 27.5906 9.96465 28.1414 11.567 28.1414C13.136 28.1414 14.3878 27.7074 15.3225 26.8395C16.2906 25.9381 16.7747 24.7698 16.7747 23.3343V0.050073H22.8837Z"
          fill="white"
        />
        <path
          d="M32.4696 22.8837C32.6032 24.7197 33.1707 26.1217 34.1721 27.0898C35.1736 28.0579 36.5423 28.542 38.2782 28.542C39.5801 28.542 40.665 28.2248 41.533 27.5906C42.4343 26.9229 43.0018 26.0216 43.2355 24.8866L49.1441 25.7879C48.5766 28.2916 47.3081 30.2612 45.3385 31.6966C43.4024 33.1321 41.0489 33.8498 38.2782 33.8498C34.5393 33.8498 31.6017 32.7315 29.4652 30.4948C27.3621 28.2248 26.3106 25.1203 26.3106 21.1811C26.3106 17.3088 27.3287 14.2543 29.3651 12.0177C31.4014 9.74767 34.1888 8.61267 37.7274 8.61267C41.2659 8.61267 44.0533 9.74767 46.0897 12.0177C48.126 14.2543 49.1441 17.2086 49.1441 20.8807V22.8837H32.4696ZM32.5698 18.7776H42.9851C42.9851 17.3422 42.4844 16.1738 41.4829 15.2725C40.4814 14.3378 39.2296 13.8704 37.7274 13.8704C36.2585 13.8704 35.0735 14.3044 34.1721 15.1723C33.3042 16.0069 32.7701 17.2086 32.5698 18.7776Z"
          fill="white"
        />
        <path
          d="M67.6119 18.4271C67.6119 17.0584 67.1946 15.9735 66.3601 15.1723C65.5589 14.3378 64.5074 13.9205 63.2054 13.9205C61.8701 13.9205 60.7685 14.3544 59.9006 15.2224C59.0326 16.0569 58.5987 17.1586 58.5987 18.5272H57.6973C57.6973 15.8233 58.4485 13.5199 59.9507 11.6171C61.4863 9.6809 63.4558 8.71281 65.8594 8.71281C68.0626 8.71281 69.9153 9.59745 71.4175 11.3667C72.9197 13.136 73.6708 15.3058 73.6708 17.8763V32.7982H67.6119V18.4271ZM52.5398 9.76436H58.5987L57.0464 15.7231L58.5987 16.2739V32.7982H52.5398V9.76436Z"
          fill="white"
        />
        <path
          d="M83.2279 22.8837C83.3614 24.7197 83.9289 26.1217 84.9304 27.0898C85.9318 28.0579 87.3005 28.542 89.0364 28.542C90.3383 28.542 91.4232 28.2248 92.2912 27.5906C93.1925 26.9229 93.76 26.0216 93.9937 24.8866L99.9024 25.7879C99.3349 28.2916 98.0663 30.2612 96.0968 31.6966C94.1606 33.1321 91.8071 33.8498 89.0364 33.8498C85.2976 33.8498 82.3599 32.7315 80.2234 30.4948C78.1203 28.2248 77.0688 25.1203 77.0688 21.1811C77.0688 17.3088 78.087 14.2543 80.1233 12.0177C82.1596 9.74767 84.9471 8.61267 88.4856 8.61267C92.0241 8.61267 94.8116 9.74767 96.8479 12.0177C98.8842 14.2543 99.9024 17.2086 99.9024 20.8807V22.8837H83.2279ZM83.328 18.7776H93.7433C93.7433 17.3422 93.2426 16.1738 92.2411 15.2725C91.2396 14.3378 89.9878 13.8704 88.4856 13.8704C87.0168 13.8704 85.8317 14.3044 84.9304 15.1723C84.0624 16.0069 83.5283 17.2086 83.328 18.7776Z"
          fill="white"
        />
        <path
          d="M121.875 26.7894C121.875 28.9259 121.057 30.6618 119.422 31.9971C117.819 33.3324 115.716 34 113.112 34C110.408 34 108.105 33.2823 106.202 31.8468C104.299 30.4114 103.064 28.3083 102.497 25.5376L108.305 24.7364C108.94 27.6406 110.408 29.0928 112.712 29.0928C113.647 29.0928 114.381 28.8591 114.915 28.3918C115.483 27.9244 115.766 27.3068 115.766 26.539C115.766 26.1051 115.666 25.7378 115.466 25.4374C115.266 25.1036 114.932 24.8198 114.464 24.5862C113.997 24.3191 113.58 24.1188 113.213 23.9853C112.879 23.8517 112.345 23.6848 111.61 23.4845C111.443 23.4178 111.31 23.3677 111.21 23.3343C110.208 23.0673 109.39 22.8169 108.756 22.5832C108.122 22.3495 107.387 22.0157 106.553 21.5817C105.718 21.1144 105.051 20.647 104.55 20.1797C104.082 19.6789 103.665 19.028 103.298 18.2268C102.964 17.4256 102.797 16.541 102.797 15.5729C102.797 13.4364 103.565 11.7506 105.101 10.5155C106.67 9.24693 108.773 8.61267 111.41 8.61267C116.851 8.61267 120.256 11.133 121.625 16.1738L115.766 17.3255C115.199 14.7884 113.897 13.5199 111.861 13.5199C110.926 13.5199 110.191 13.7202 109.657 14.1208C109.123 14.5214 108.856 15.0555 108.856 15.7231C108.856 16.4909 109.173 17.0751 109.808 17.4757C110.475 17.8763 111.477 18.2769 112.812 18.6775C112.912 18.7108 113.079 18.7609 113.313 18.8277C114.081 19.0614 114.665 19.245 115.065 19.3785C115.466 19.512 116.017 19.729 116.718 20.0295C117.452 20.2965 118.003 20.5636 118.37 20.8306C118.771 21.0643 119.221 21.3814 119.722 21.782C120.256 22.1826 120.657 22.6166 120.924 23.0839C121.191 23.5513 121.408 24.1021 121.575 24.7364C121.775 25.3706 121.875 26.055 121.875 26.7894Z"
          fill="white"
        />
        <path
          d="M130.661 22.8837C130.794 24.7197 131.362 26.1217 132.363 27.0898C133.365 28.0579 134.734 28.542 136.469 28.542C137.771 28.542 138.856 28.2248 139.724 27.5906C140.626 26.9229 141.193 26.0216 141.427 24.8866L147.335 25.7879C146.768 28.2916 145.499 30.2612 143.53 31.6966C141.594 33.1321 139.24 33.8498 136.469 33.8498C132.731 33.8498 129.793 32.7315 127.656 30.4948C125.553 28.2248 124.502 25.1203 124.502 21.1811C124.502 17.3088 125.52 14.2543 127.556 12.0177C129.593 9.74767 132.38 8.61267 135.919 8.61267C139.457 8.61267 142.245 9.74767 144.281 12.0177C146.317 14.2543 147.335 17.2086 147.335 20.8807V22.8837H130.661ZM130.761 18.7776H141.176C141.176 17.3422 140.676 16.1738 139.674 15.2725C138.673 14.3378 137.421 13.8704 135.919 13.8704C134.45 13.8704 133.265 14.3044 132.363 15.1723C131.495 16.0069 130.961 17.2086 130.761 18.7776Z"
          fill="white"
        />
        <path
          d="M150.18 3.50515C150.18 2.57045 150.531 1.75258 151.232 1.05155C151.933 0.350516 152.751 0 153.685 0C154.653 0 155.471 0.350516 156.139 1.05155C156.84 1.75258 157.191 2.57045 157.191 3.50515C157.191 4.47324 156.84 5.3078 156.139 6.00884C155.471 6.70987 154.653 7.06038 153.685 7.06038C152.751 7.06038 151.933 6.70987 151.232 6.00884C150.531 5.3078 150.18 4.47324 150.18 3.50515ZM150.731 9.76436H156.79V32.7982H150.731V9.76436Z"
          fill="white"
        />
        <path d="M171.562 0H177.621V32.7982H171.562V0Z" fill="white" />
        <path
          d="M181.831 32.7982V0.050073H193.499C197.538 0.050073 200.826 1.58566 203.363 4.65685C205.9 7.72803 207.169 11.7005 207.169 16.5744C207.169 21.4148 205.9 25.3373 203.363 28.3417C200.859 31.3127 197.571 32.7982 193.499 32.7982H181.831ZM187.89 27.0398H192.948C195.552 27.0398 197.555 26.1217 198.957 24.2857C200.392 22.4163 201.11 19.7624 201.11 16.324C201.11 12.919 200.409 10.2985 199.007 8.46244C197.605 6.62641 195.585 5.7084 192.948 5.7084H187.89V27.0398Z"
          fill="white"
        />
      </svg>
    </>
  );
};
