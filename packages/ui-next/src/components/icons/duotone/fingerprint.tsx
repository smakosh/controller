import { forwardRef, memo } from "react";
import { duotoneIconVariants } from "../utils";
import { DuotoneIconProps } from "../types";

export const FingerprintDuoIcon = memo(
  forwardRef<SVGSVGElement, DuotoneIconProps>(
    ({ className, variant, size, ...props }, forwardedRef) => (
      <svg
        viewBox="0 0 30 30"
        className={duotoneIconVariants({ variant, size, className })}
        ref={forwardedRef}
        {...props}
      >
        <path
          className="accentColor fill-tertiary"
          d="M8.22061 6.8689C7.98597 7.06674 7.68692 7.16795 7.38326 7.14035C7.07962 7.11735 6.79436 6.97472 6.59652 6.74467C6.39869 6.51003 6.30208 6.21098 6.32508 5.90732C6.34808 5.60366 6.4907 5.31843 6.72535 5.12059L8.23899 3.82778C9.30636 2.91682 10.5301 2.21292 11.8507 1.74825C13.1435 1.29277 14.5053 1.06274 15.8717 1.06274C17.4037 1.06274 18.9174 1.34799 20.339 1.90928C21.7929 2.47977 23.1133 3.34471 24.2222 4.44889H24.2268L24.328 4.55471C26.6652 6.89189 27.9765 10.0618 27.9765 13.3652C27.9765 16.6686 26.6653 19.8383 24.328 22.1709L21.7056 24.798C20.7855 25.7181 19.5341 26.2334 18.2367 26.2334C16.9347 26.2334 15.6879 25.7181 14.7678 24.798C13.8477 23.8778 13.3324 22.631 13.3324 21.3291C13.3324 20.0317 13.8477 18.7803 14.7678 17.8602L17.427 15.201C17.9147 14.7133 18.1862 14.0554 18.1862 13.3653C18.1862 12.6751 17.9147 12.0126 17.427 11.525L17.4224 11.5204C16.9348 11.0327 16.2723 10.7612 15.5775 10.7612C14.8874 10.7612 14.2249 11.0327 13.7373 11.5204L10.894 14.3682C9.04912 16.2131 8.00933 18.7205 8.00933 21.3293C8.00933 22.3368 8.16576 23.3398 8.46481 24.2967C8.55683 24.5866 8.52922 24.904 8.3866 25.1755C8.24858 25.4469 8.00473 25.6493 7.71491 25.7414C7.42046 25.8334 7.10761 25.8012 6.83616 25.6631C6.56471 25.5205 6.36228 25.2767 6.27026 24.9868C5.89761 23.8044 5.70898 22.5714 5.70898 21.3292C5.70898 18.1085 6.9926 15.0168 9.26532 12.7396L12.1132 9.89633C13.0333 8.97618 14.2801 8.4609 15.5777 8.4609C16.8797 8.4609 18.1265 8.97618 19.0466 9.89633L19.0512 9.90093H19.0558C19.9713 10.8211 20.4866 12.0679 20.4866 13.3654C20.4866 14.6629 19.9713 15.9096 19.0558 16.8299H19.0512L16.3919 19.4891C15.9043 19.9768 15.6328 20.6393 15.6328 21.3294C15.6328 22.0195 15.9043 22.682 16.3919 23.1743C16.8796 23.6619 17.5467 23.9334 18.2368 23.9334C18.9269 23.9334 19.5895 23.6619 20.0771 23.1743L22.7042 20.5472C24.6089 18.6425 25.6763 16.0569 25.6763 13.3654C25.6763 10.6738 24.6089 8.08828 22.7042 6.1835L22.5983 6.07768C21.715 5.19893 20.6568 4.50884 19.4975 4.04876C18.3427 3.59328 17.1143 3.36326 15.8723 3.36326C14.7635 3.36326 13.6639 3.54729 12.6151 3.91535C11.5615 4.288 10.5862 4.84931 9.73504 5.57621L8.22061 6.8689Z"
        />
        <path
          className="color fill-current"
          fillOpacity="0.32"
          d="M4.42964 19.5809C4.38824 19.8845 4.22721 20.156 3.98797 20.3446C3.74413 20.5286 3.43588 20.6068 3.13684 20.57C2.83321 20.5286 2.55713 20.3676 2.3731 20.1238C2.18907 19.8845 2.10626 19.5763 2.14767 19.2726C2.38231 17.529 2.90678 15.8359 3.68893 14.2579C4.51706 12.6062 5.61202 11.1064 6.92785 9.81351L9.58247 7.1957V7.1911C11.1927 5.61303 13.3596 4.7251 15.6139 4.7251C17.8821 4.7251 20.0583 5.62225 21.6684 7.21872C23.3016 8.84736 24.2172 11.0648 24.2172 13.37C24.2172 15.6753 23.3016 17.8924 21.6684 19.5213L19.046 22.1437C18.8343 22.36 18.5399 22.4796 18.2362 22.4796C17.928 22.4796 17.6381 22.36 17.4219 22.1437C17.2057 21.9275 17.0861 21.6376 17.0861 21.3294C17.0861 21.0258 17.2057 20.7313 17.4219 20.5197L20.0443 17.8973C21.2451 16.6965 21.9168 15.0678 21.9168 13.3701C21.9168 11.6725 21.2451 10.0485 20.0443 8.85214C18.8665 7.67894 17.2747 7.02565 15.6138 7.02565C13.9621 7.02565 12.3748 7.67434 11.197 8.83373L8.54242 11.4515C7.40603 12.5695 6.46289 13.8623 5.74976 15.2841C5.07807 16.6367 4.63208 18.0855 4.42964 19.5809Z"
        />
        <path
          className="color fill-current"
          fillOpacity="0.32"
          d="M14.6526 26.5463C14.9103 26.7074 15.0943 26.965 15.1587 27.264C15.2277 27.5631 15.1725 27.8713 15.0115 28.129C14.8459 28.3912 14.5882 28.5707 14.2892 28.6397C13.9947 28.7041 13.6819 28.6535 13.4243 28.4879C12.9044 28.1612 12.4259 27.7794 11.998 27.3423C10.4245 25.7596 9.54582 23.6157 9.555 21.3888C9.5596 19.0563 10.4936 16.8158 12.1452 15.1733L14.7676 12.5509C14.9839 12.3347 15.2737 12.2151 15.5774 12.2151C15.8856 12.2151 16.1755 12.3347 16.3917 12.5509C16.6079 12.7672 16.7275 13.0616 16.7275 13.3653C16.7275 13.6689 16.6079 13.9633 16.3917 14.1796L13.7693 16.7974V16.802C12.5455 18.0166 11.86 19.6683 11.8554 21.3936C11.8508 23.0131 12.4903 24.5728 13.6312 25.7229C13.9395 26.0357 14.2799 26.3117 14.6526 26.5463Z"
        />
      </svg>
    ),
  ),
);

FingerprintDuoIcon.displayName = "FingerprintDuoIcon";