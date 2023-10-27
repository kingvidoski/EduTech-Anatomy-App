import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Logo = (props) => (
  <Svg
    width={165}
    height={47}
    viewBox="0 0 165 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 25H9.02423C14.9143 25 19.6892 29.7749 19.6892 35.665C19.6892 41.5551 14.9144 46.33 9.02423 46.33H0.856056C0.38327 46.33 0 45.9467 0 45.4739V25Z"
      fill="black"
    />
    <Path
      d="M0 4H18.25C23.6348 4 28 8.36522 28 13.75C28 19.1348 23.6348 23.5 18.25 23.5H1C0.447715 23.5 0 23.0523 0 22.5V4Z"
      fill="black"
    />
    <Path
      d="M37.2958 15.872H32.8478L32.1118 18H29.7598L33.7758 6.816H36.3838L40.3998 18H38.0318L37.2958 15.872ZM36.6878 14.08L35.0718 9.408L33.4557 14.08H36.6878ZM46.8129 9.008C47.8689 9.008 48.7222 9.344 49.3729 10.016C50.0235 10.6773 50.3489 11.6053 50.3489 12.8V18H48.1089V13.104C48.1089 12.4 47.9329 11.8613 47.5809 11.488C47.2289 11.104 46.7489 10.912 46.1409 10.912C45.5222 10.912 45.0315 11.104 44.6689 11.488C44.3169 11.8613 44.1409 12.4 44.1409 13.104V18H41.9009V9.136H44.1409V10.24C44.4395 9.856 44.8182 9.55733 45.2769 9.344C45.7462 9.12 46.2582 9.008 46.8129 9.008ZM51.903 13.536C51.903 12.64 52.079 11.8453 52.431 11.152C52.7937 10.4587 53.279 9.92533 53.887 9.552C54.5057 9.17867 55.1937 8.992 55.951 8.992C56.6123 8.992 57.1883 9.12533 57.679 9.392C58.1803 9.65867 58.5803 9.99467 58.879 10.4V9.136H61.135V18H58.879V16.704C58.591 17.12 58.191 17.4667 57.679 17.744C57.1777 18.0107 56.5963 18.144 55.935 18.144C55.1883 18.144 54.5057 17.952 53.887 17.568C53.279 17.184 52.7937 16.6453 52.431 15.952C52.079 15.248 51.903 14.4427 51.903 13.536ZM58.879 13.568C58.879 13.024 58.7723 12.56 58.559 12.176C58.3457 11.7813 58.0577 11.4827 57.695 11.28C57.3323 11.0667 56.943 10.96 56.527 10.96C56.111 10.96 55.727 11.0613 55.375 11.264C55.023 11.4667 54.735 11.7653 54.511 12.16C54.2977 12.544 54.191 13.0027 54.191 13.536C54.191 14.0693 54.2977 14.5387 54.511 14.944C54.735 15.3387 55.023 15.6427 55.375 15.856C55.7377 16.0693 56.1217 16.176 56.527 16.176C56.943 16.176 57.3323 16.0747 57.695 15.872C58.0577 15.6587 58.3457 15.36 58.559 14.976C58.7723 14.5813 58.879 14.112 58.879 13.568ZM65.9308 10.976V15.264C65.9308 15.5627 66.0001 15.7813 66.1388 15.92C66.2881 16.048 66.5334 16.112 66.8748 16.112H67.9148V18H66.5068C64.6188 18 63.6748 17.0827 63.6748 15.248V10.976H62.6188V9.136H63.6748V6.944H65.9308V9.136H67.9148V10.976H65.9308ZM73.4619 18.144C72.6085 18.144 71.8405 17.9573 71.1579 17.584C70.4752 17.2 69.9365 16.6613 69.5419 15.968C69.1579 15.2747 68.9659 14.4747 68.9659 13.568C68.9659 12.6613 69.1632 11.8613 69.5579 11.168C69.9632 10.4747 70.5125 9.94133 71.2059 9.568C71.8992 9.184 72.6725 8.992 73.5259 8.992C74.3792 8.992 75.1525 9.184 75.8459 9.568C76.5392 9.94133 77.0832 10.4747 77.4779 11.168C77.8832 11.8613 78.0859 12.6613 78.0859 13.568C78.0859 14.4747 77.8779 15.2747 77.4619 15.968C77.0565 16.6613 76.5019 17.2 75.7979 17.584C75.1045 17.9573 74.3259 18.144 73.4619 18.144ZM73.4619 16.192C73.8672 16.192 74.2459 16.096 74.5979 15.904C74.9605 15.7013 75.2485 15.4027 75.4619 15.008C75.6752 14.6133 75.7819 14.1333 75.7819 13.568C75.7819 12.7253 75.5579 12.08 75.1099 11.632C74.6725 11.1733 74.1339 10.944 73.4939 10.944C72.8539 10.944 72.3152 11.1733 71.8779 11.632C71.4512 12.08 71.2379 12.7253 71.2379 13.568C71.2379 14.4107 71.4459 15.0613 71.8619 15.52C72.2885 15.968 72.8219 16.192 73.4619 16.192ZM90.737 9.008C91.825 9.008 92.6997 9.344 93.361 10.016C94.033 10.6773 94.369 11.6053 94.369 12.8V18H92.129V13.104C92.129 12.4107 91.953 11.8827 91.601 11.52C91.249 11.1467 90.769 10.96 90.161 10.96C89.553 10.96 89.0677 11.1467 88.705 11.52C88.353 11.8827 88.177 12.4107 88.177 13.104V18H85.937V13.104C85.937 12.4107 85.761 11.8827 85.409 11.52C85.057 11.1467 84.577 10.96 83.969 10.96C83.3503 10.96 82.8597 11.1467 82.497 11.52C82.145 11.8827 81.969 12.4107 81.969 13.104V18H79.729V9.136H81.969V10.208C82.257 9.83467 82.625 9.54133 83.073 9.328C83.5317 9.11467 84.033 9.008 84.577 9.008C85.2703 9.008 85.889 9.15733 86.433 9.456C86.977 9.744 87.3983 10.16 87.697 10.704C87.985 10.192 88.401 9.78133 88.945 9.472C89.4997 9.16267 90.097 9.008 90.737 9.008ZM104.975 9.136L99.4866 22.192H97.1026L99.0226 17.776L95.4706 9.136H97.9826L100.271 15.328L102.591 9.136H104.975ZM115.755 18L113.291 13.648H112.235V18H109.995V6.832H114.187C115.051 6.832 115.787 6.98667 116.395 7.296C117.003 7.59467 117.456 8.00533 117.755 8.528C118.064 9.04 118.219 9.616 118.219 10.256C118.219 10.992 118.005 11.6587 117.579 12.256C117.152 12.8427 116.517 13.248 115.675 13.472L118.347 18H115.755ZM112.235 11.968H114.107C114.715 11.968 115.168 11.824 115.467 11.536C115.765 11.2373 115.915 10.8267 115.915 10.304C115.915 9.792 115.765 9.39733 115.467 9.12C115.168 8.832 114.715 8.688 114.107 8.688H112.235V11.968ZM128.485 13.376C128.485 13.696 128.463 13.984 128.421 14.24H121.941C121.994 14.88 122.218 15.3813 122.613 15.744C123.007 16.1067 123.493 16.288 124.069 16.288C124.901 16.288 125.493 15.9307 125.845 15.216H128.261C128.005 16.0693 127.514 16.7733 126.789 17.328C126.063 17.872 125.173 18.144 124.117 18.144C123.263 18.144 122.495 17.9573 121.813 17.584C121.141 17.2 120.613 16.6613 120.229 15.968C119.855 15.2747 119.669 14.4747 119.669 13.568C119.669 12.6507 119.855 11.8453 120.229 11.152C120.602 10.4587 121.125 9.92533 121.797 9.552C122.469 9.17867 123.242 8.992 124.117 8.992C124.959 8.992 125.711 9.17333 126.373 9.536C127.045 9.89867 127.562 10.416 127.925 11.088C128.298 11.7493 128.485 12.512 128.485 13.376ZM126.165 12.736C126.154 12.16 125.946 11.7013 125.541 11.36C125.135 11.008 124.639 10.832 124.053 10.832C123.498 10.832 123.029 11.0027 122.645 11.344C122.271 11.6747 122.042 12.1387 121.957 12.736H126.165ZM129.544 13.536C129.544 12.64 129.72 11.8453 130.072 11.152C130.434 10.4587 130.92 9.92533 131.528 9.552C132.146 9.17867 132.834 8.992 133.592 8.992C134.253 8.992 134.829 9.12533 135.32 9.392C135.821 9.65867 136.221 9.99467 136.52 10.4V9.136H138.776V18H136.52V16.704C136.232 17.12 135.832 17.4667 135.32 17.744C134.818 18.0107 134.237 18.144 133.576 18.144C132.829 18.144 132.146 17.952 131.528 17.568C130.92 17.184 130.434 16.6453 130.072 15.952C129.72 15.248 129.544 14.4427 129.544 13.536ZM136.52 13.568C136.52 13.024 136.413 12.56 136.2 12.176C135.986 11.7813 135.698 11.4827 135.336 11.28C134.973 11.0667 134.584 10.96 134.168 10.96C133.752 10.96 133.368 11.0613 133.016 11.264C132.664 11.4667 132.376 11.7653 132.152 12.16C131.938 12.544 131.832 13.0027 131.832 13.536C131.832 14.0693 131.938 14.5387 132.152 14.944C132.376 15.3387 132.664 15.6427 133.016 15.856C133.378 16.0693 133.762 16.176 134.168 16.176C134.584 16.176 134.973 16.0747 135.336 15.872C135.698 15.6587 135.986 15.36 136.2 14.976C136.413 14.5813 136.52 14.112 136.52 13.568ZM143.203 6.16V18H140.963V6.16H143.203ZM146.553 8.08C146.158 8.08 145.827 7.95733 145.561 7.712C145.305 7.456 145.177 7.14133 145.177 6.768C145.177 6.39467 145.305 6.08533 145.561 5.84C145.827 5.584 146.158 5.456 146.553 5.456C146.947 5.456 147.273 5.584 147.529 5.84C147.795 6.08533 147.929 6.39467 147.929 6.768C147.929 7.14133 147.795 7.456 147.529 7.712C147.273 7.95733 146.947 8.08 146.553 8.08ZM147.657 9.136V18H145.417V9.136H147.657ZM152.478 10.976V15.264C152.478 15.5627 152.547 15.7813 152.686 15.92C152.835 16.048 153.08 16.112 153.422 16.112H154.462V18H153.054C151.166 18 150.222 17.0827 150.222 15.248V10.976H149.166V9.136H150.222V6.944H152.478V9.136H154.462V10.976H152.478ZM164.553 9.136L159.065 22.192H156.681L158.601 17.776L155.049 9.136H157.561L159.849 15.328L162.169 9.136H164.553Z"
      fill="#1E1E1E"
    />
    <Path
      d="M36.6805 29.636V38H35.5885V34.208H31.3285V38H30.2365V29.636H31.3285V33.308H35.5885V29.636H36.6805ZM44.3771 31.424V38H43.2851V37.028C43.0771 37.364 42.7851 37.628 42.4091 37.82C42.0411 38.004 41.6331 38.096 41.1851 38.096C40.6731 38.096 40.2131 37.992 39.8051 37.784C39.3971 37.568 39.0731 37.248 38.8331 36.824C38.6011 36.4 38.4851 35.884 38.4851 35.276V31.424H39.5651V35.132C39.5651 35.78 39.7291 36.28 40.0571 36.632C40.3851 36.976 40.8331 37.148 41.4011 37.148C41.9851 37.148 42.4451 36.968 42.7811 36.608C43.1171 36.248 43.2851 35.724 43.2851 35.036V31.424H44.3771ZM54.1289 31.304C54.6409 31.304 55.0969 31.412 55.4969 31.628C55.8969 31.836 56.2129 32.152 56.4449 32.576C56.6769 33 56.7929 33.516 56.7929 34.124V38H55.7129V34.28C55.7129 33.624 55.5489 33.124 55.2209 32.78C54.9009 32.428 54.4649 32.252 53.9129 32.252C53.3449 32.252 52.8929 32.436 52.5569 32.804C52.2209 33.164 52.0529 33.688 52.0529 34.376V38H50.9729V34.28C50.9729 33.624 50.8089 33.124 50.4809 32.78C50.1609 32.428 49.7249 32.252 49.1729 32.252C48.6049 32.252 48.1529 32.436 47.8169 32.804C47.4809 33.164 47.3129 33.688 47.3129 34.376V38H46.2209V31.424H47.3129V32.372C47.5289 32.028 47.8169 31.764 48.1769 31.58C48.5449 31.396 48.9489 31.304 49.3889 31.304C49.9409 31.304 50.4289 31.428 50.8529 31.676C51.2769 31.924 51.5929 32.288 51.8009 32.768C51.9849 32.304 52.2889 31.944 52.7129 31.688C53.1369 31.432 53.6089 31.304 54.1289 31.304ZM58.1762 34.688C58.1762 34.016 58.3122 33.428 58.5842 32.924C58.8562 32.412 59.2282 32.016 59.7002 31.736C60.1802 31.456 60.7122 31.316 61.2962 31.316C61.8722 31.316 62.3722 31.44 62.7962 31.688C63.2202 31.936 63.5362 32.248 63.7442 32.624V31.424H64.8482V38H63.7442V36.776C63.5282 37.16 63.2042 37.48 62.7722 37.736C62.3482 37.984 61.8522 38.108 61.2842 38.108C60.7002 38.108 60.1722 37.964 59.7002 37.676C59.2282 37.388 58.8562 36.984 58.5842 36.464C58.3122 35.944 58.1762 35.352 58.1762 34.688ZM63.7442 34.7C63.7442 34.204 63.6442 33.772 63.4442 33.404C63.2442 33.036 62.9722 32.756 62.6282 32.564C62.2922 32.364 61.9202 32.264 61.5122 32.264C61.1042 32.264 60.7322 32.36 60.3962 32.552C60.0602 32.744 59.7922 33.024 59.5922 33.392C59.3922 33.76 59.2922 34.192 59.2922 34.688C59.2922 35.192 59.3922 35.632 59.5922 36.008C59.7922 36.376 60.0602 36.66 60.3962 36.86C60.7322 37.052 61.1042 37.148 61.5122 37.148C61.9202 37.148 62.2922 37.052 62.6282 36.86C62.9722 36.66 63.2442 36.376 63.4442 36.008C63.6442 35.632 63.7442 35.196 63.7442 34.7ZM69.8975 31.304C70.6975 31.304 71.3455 31.548 71.8415 32.036C72.3375 32.516 72.5855 33.212 72.5855 34.124V38H71.5055V34.28C71.5055 33.624 71.3415 33.124 71.0135 32.78C70.6855 32.428 70.2375 32.252 69.6695 32.252C69.0935 32.252 68.6335 32.432 68.2895 32.792C67.9535 33.152 67.7855 33.676 67.7855 34.364V38H66.6935V31.424H67.7855V32.36C68.0015 32.024 68.2935 31.764 68.6615 31.58C69.0375 31.396 69.4495 31.304 69.8975 31.304ZM82.5125 36.14H78.8645L78.1925 38H77.0405L80.0645 29.684H81.3245L84.3365 38H83.1845L82.5125 36.14ZM82.2005 35.252L80.6885 31.028L79.1765 35.252H82.2005ZM88.8585 31.304C89.6585 31.304 90.3065 31.548 90.8025 32.036C91.2985 32.516 91.5465 33.212 91.5465 34.124V38H90.4665V34.28C90.4665 33.624 90.3025 33.124 89.9745 32.78C89.6465 32.428 89.1985 32.252 88.6305 32.252C88.0545 32.252 87.5945 32.432 87.2505 32.792C86.9145 33.152 86.7465 33.676 86.7465 34.364V38H85.6545V31.424H86.7465V32.36C86.9625 32.024 87.2545 31.764 87.6225 31.58C87.9985 31.396 88.4105 31.304 88.8585 31.304ZM92.9223 34.688C92.9223 34.016 93.0583 33.428 93.3303 32.924C93.6023 32.412 93.9743 32.016 94.4463 31.736C94.9263 31.456 95.4583 31.316 96.0423 31.316C96.6183 31.316 97.1183 31.44 97.5423 31.688C97.9663 31.936 98.2823 32.248 98.4903 32.624V31.424H99.5943V38H98.4903V36.776C98.2743 37.16 97.9503 37.48 97.5183 37.736C97.0943 37.984 96.5983 38.108 96.0303 38.108C95.4463 38.108 94.9183 37.964 94.4463 37.676C93.9743 37.388 93.6023 36.984 93.3303 36.464C93.0583 35.944 92.9223 35.352 92.9223 34.688ZM98.4903 34.7C98.4903 34.204 98.3903 33.772 98.1903 33.404C97.9903 33.036 97.7183 32.756 97.3743 32.564C97.0383 32.364 96.6663 32.264 96.2583 32.264C95.8503 32.264 95.4783 32.36 95.1423 32.552C94.8063 32.744 94.5383 33.024 94.3383 33.392C94.1383 33.76 94.0383 34.192 94.0383 34.688C94.0383 35.192 94.1383 35.632 94.3383 36.008C94.5383 36.376 94.8063 36.66 95.1423 36.86C95.4783 37.052 95.8503 37.148 96.2583 37.148C96.6663 37.148 97.0383 37.052 97.3743 36.86C97.7183 36.66 97.9903 36.376 98.1903 36.008C98.3903 35.632 98.4903 35.196 98.4903 34.7ZM102.772 32.324V36.2C102.772 36.52 102.84 36.748 102.976 36.884C103.112 37.012 103.348 37.076 103.684 37.076H104.488V38H103.504C102.896 38 102.44 37.86 102.136 37.58C101.832 37.3 101.68 36.84 101.68 36.2V32.324H100.828V31.424H101.68V29.768H102.772V31.424H104.488V32.324H102.772ZM108.679 38.108C108.063 38.108 107.503 37.968 106.999 37.688C106.503 37.408 106.111 37.012 105.823 36.5C105.543 35.98 105.403 35.38 105.403 34.7C105.403 34.028 105.547 33.436 105.835 32.924C106.131 32.404 106.531 32.008 107.035 31.736C107.539 31.456 108.103 31.316 108.727 31.316C109.351 31.316 109.915 31.456 110.419 31.736C110.923 32.008 111.319 32.4 111.607 32.912C111.903 33.424 112.051 34.02 112.051 34.7C112.051 35.38 111.899 35.98 111.595 36.5C111.299 37.012 110.895 37.408 110.383 37.688C109.871 37.968 109.303 38.108 108.679 38.108ZM108.679 37.148C109.071 37.148 109.439 37.056 109.783 36.872C110.127 36.688 110.403 36.412 110.611 36.044C110.827 35.676 110.935 35.228 110.935 34.7C110.935 34.172 110.831 33.724 110.623 33.356C110.415 32.988 110.143 32.716 109.807 32.54C109.471 32.356 109.107 32.264 108.715 32.264C108.315 32.264 107.947 32.356 107.611 32.54C107.283 32.716 107.019 32.988 106.819 33.356C106.619 33.724 106.519 34.172 106.519 34.7C106.519 35.236 106.615 35.688 106.807 36.056C107.007 36.424 107.271 36.7 107.599 36.884C107.927 37.06 108.287 37.148 108.679 37.148ZM121.395 31.304C121.907 31.304 122.363 31.412 122.763 31.628C123.163 31.836 123.479 32.152 123.711 32.576C123.943 33 124.059 33.516 124.059 34.124V38H122.979V34.28C122.979 33.624 122.815 33.124 122.487 32.78C122.167 32.428 121.731 32.252 121.179 32.252C120.611 32.252 120.159 32.436 119.823 32.804C119.487 33.164 119.319 33.688 119.319 34.376V38H118.239V34.28C118.239 33.624 118.075 33.124 117.747 32.78C117.427 32.428 116.991 32.252 116.439 32.252C115.871 32.252 115.419 32.436 115.083 32.804C114.747 33.164 114.579 33.688 114.579 34.376V38H113.487V31.424H114.579V32.372C114.795 32.028 115.083 31.764 115.443 31.58C115.811 31.396 116.215 31.304 116.655 31.304C117.207 31.304 117.695 31.428 118.119 31.676C118.543 31.924 118.859 32.288 119.067 32.768C119.251 32.304 119.555 31.944 119.979 31.688C120.403 31.432 120.875 31.304 121.395 31.304ZM131.514 31.424L127.554 41.096H126.426L127.722 37.928L125.07 31.424H126.282L128.346 36.752L130.386 31.424H131.514Z"
      fill="#1E1E1E"
    />
  </Svg>
);
export default Logo;
