import * as React from 'react'

export const CalamariCircle = (props: React.ComponentProps<'svg'>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="black" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3514 15.3038C12.3637 15.6555 12.0889 15.9507 11.737 15.9634C11.712 15.9643 11.631 15.9668 11.5052 15.9668C10.367 15.9668 5.54921 15.764 5.10241 12.3539C4.8491 10.4207 5.12126 8.96136 5.32005 7.89588C5.47755 7.05187 5.55539 6.56517 5.3922 6.30065C5.38448 6.29369 5.37671 6.2869 5.36894 6.28012C5.35219 6.26547 5.33543 6.25083 5.31912 6.23453C5.06986 5.98563 5.06986 5.58185 5.31912 5.33295C5.32035 5.33172 5.32171 5.33071 5.32308 5.3297C5.32437 5.32875 5.32566 5.32779 5.32685 5.32665C5.32799 5.32547 5.32894 5.32418 5.32989 5.3229C5.3309 5.32154 5.3319 5.32018 5.33314 5.31894C5.58208 5.06989 5.98651 5.06989 6.23546 5.31895C6.25186 5.33533 6.26659 5.35216 6.28132 5.36899C6.28804 5.37667 6.29476 5.38434 6.30163 5.39197C6.56641 5.5551 7.05317 5.47739 7.89819 5.31988C8.96456 5.1211 10.4243 4.84917 12.36 5.10242C16.1503 5.59835 15.9813 11.4813 15.9722 11.7315C15.9598 12.0755 15.6769 12.3457 15.3351 12.3457C15.3275 12.3457 15.3198 12.3455 15.3122 12.3454L15.3122 12.3454C14.9601 12.3329 14.6848 12.0376 14.697 11.686C14.6987 11.6362 14.8376 6.71255 12.1942 6.36668C10.4606 6.14043 9.17018 6.38037 8.13312 6.57319L8.13203 6.57339C7.64264 6.66465 7.18233 6.7504 6.75839 6.75707C6.75167 7.18058 6.66587 7.64046 6.57461 8.12952C6.38128 9.16589 6.14074 10.4555 6.36773 12.1883C6.70929 14.7956 11.5158 14.6929 11.6872 14.6892C11.6894 14.6892 11.6908 14.6891 11.6915 14.6891C12.0419 14.6742 12.3389 14.952 12.3514 15.3038ZM21 9.70833C21 9.20617 20.8043 8.73406 20.449 8.379C20.0936 8.02379 19.621 7.82813 19.1182 7.82813C18.6157 7.82813 18.143 8.02379 17.7878 8.37885C17.4323 8.7339 17.2365 9.20617 17.2365 9.70833C17.2365 9.99069 17.3004 10.2626 17.4177 10.5105C17.4405 10.6326 17.4988 10.7494 17.5934 10.8439C17.9032 11.1535 17.8872 11.6097 17.8501 11.8542C17.7761 12.3411 17.4985 12.8554 17.0886 13.2651C16.295 14.0584 15.1855 14.2894 14.665 13.7695C14.4158 13.5207 14.0118 13.5206 13.7625 13.7696C13.5134 14.0187 13.5134 14.4223 13.7627 14.6713C14.0726 14.981 14.0565 15.4372 14.0194 15.6817C13.9454 16.1686 13.6678 16.6829 13.2579 17.0926C12.8479 17.5022 12.3332 17.7795 11.8459 17.8535C11.6013 17.8899 11.1445 17.9066 10.8343 17.597C10.7358 17.4984 10.6127 17.4404 10.4848 17.4199C9.78941 17.1001 8.93976 17.2196 8.36743 17.7912C7.63398 18.5244 7.63398 19.717 8.36759 20.4503C8.73447 20.8167 9.21617 21 9.69818 21C10.18 21 10.662 20.8166 11.0289 20.4502C11.3905 20.0888 11.572 19.6156 11.5771 19.141C11.5804 19.141 11.5836 19.1414 11.587 19.1414C12.4542 19.1414 13.4061 18.7477 14.1603 17.9942C14.7675 17.3876 15.1656 16.6342 15.2812 15.873C15.3103 15.6812 15.3186 15.4928 15.3103 15.3094C15.3233 15.3099 15.3361 15.3106 15.349 15.3113C15.3717 15.3126 15.3944 15.3139 15.4175 15.3139C16.2848 15.3139 17.2369 14.9202 17.991 14.1667C18.5982 13.5601 18.9963 12.8067 19.1118 12.0455C19.1355 11.8901 19.1426 11.7376 19.1416 11.5874C19.6355 11.5814 20.0992 11.3875 20.4488 11.038C20.8043 10.6829 21 10.2106 21 9.70833ZM10.1264 19.5484C9.89026 19.7847 9.50593 19.7843 9.27007 19.5486C9.0339 19.3126 9.0339 18.9288 9.26991 18.6929C9.388 18.575 9.54301 18.516 9.69818 18.516C9.85319 18.516 10.0084 18.575 10.1264 18.6928C10.3625 18.9288 10.3623 19.3126 10.1264 19.5484ZM19.5463 10.1362C19.3176 10.3646 18.9191 10.3647 18.6901 10.1361C18.5758 10.0218 18.5127 9.87006 18.5127 9.70833C18.5127 9.54675 18.5758 9.39499 18.6903 9.28058C18.8046 9.16632 18.9565 9.10328 19.1182 9.10328C19.2801 9.10328 19.432 9.16632 19.5463 9.28058L19.5465 9.28073C19.6608 9.39499 19.7238 9.54675 19.7238 9.70833C19.7238 9.87005 19.6608 10.0218 19.5463 10.1362ZM13.3579 10.3241C13.3579 10.7543 13.0089 11.103 12.5783 11.103C12.1478 11.103 11.7987 10.7543 11.7987 10.3241C11.7987 9.89391 12.1478 9.54517 12.5783 9.54517C13.0089 9.54517 13.3579 9.89391 13.3579 10.3241ZM11.1073 12.5728C11.1073 13.003 10.7583 13.3518 10.3277 13.3518C9.89717 13.3518 9.54814 13.003 9.54814 12.5728C9.54814 12.1426 9.89717 11.7939 10.3277 11.7939C10.7583 11.7939 11.1073 12.1426 11.1073 12.5728Z"
      fill="url(#paint0_linear_4145_347)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_4145_347"
        x1="9.62629"
        y1="20.9395"
        x2="5.6444"
        y2="3.88277"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7200C3" />
        <stop offset="0.541667" stop-color="#F50E84" />
        <stop offset="1" stop-color="#FF9E00" />
      </linearGradient>
    </defs>
  </svg>
)
