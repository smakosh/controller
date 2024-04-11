import { forwardRef, memo } from "react";
import { iconVariants } from "../utils";
import { StateIconProps } from "../types";

export const SparklesIcon = memo(
  forwardRef<SVGSVGElement, StateIconProps>(
    ({ className, size, variant, ...props }, forwardedRef) => (
      <svg
        viewBox="0 0 24 24"
        className={iconVariants({ size, className })}
        ref={forwardedRef}
        {...props}
      >
        {(() => {
          switch (variant) {
            case "solid":
              return (
                <path
                  className="fill-current"
                  d="M14.234 6.662A.362.362 0 0 0 14 7c0 .15.094.284.234.338L16 8l.663 1.766a.362.362 0 0 0 .674 0L18 8l1.766-.662A.362.362 0 0 0 20 7a.362.362 0 0 0-.234-.338L18 6l-.663-1.766a.362.362 0 0 0-.674 0L16 6l-1.766.662Zm-3.825-.371a.498.498 0 0 0-.906 0l-1.65 3.562L4.291 11.5a.5.5 0 0 0 0 .91l3.565 1.646L9.5 17.62a.498.498 0 0 0 .906 0l1.647-3.566 3.566-1.647a.498.498 0 0 0 0-.906l-3.563-1.644-1.647-3.565ZM16 16l-1.766.663A.362.362 0 0 0 14 17c0 .15.094.284.234.337L16 18l.663 1.766c.053.14.187.234.337.234.15 0 .284-.094.337-.234L18 18l1.766-.663A.362.362 0 0 0 20 17a.362.362 0 0 0-.234-.337L18 16l-.663-1.766A.362.362 0 0 0 17 14a.362.362 0 0 0-.337.234L16 16Z"
                />
              );
            case "line":
              return (
                <path
                  className="fill-current"
                  d="M17.5 5a.5.5 0 0 1 .5.5V7h1.5c.275 0 .5.225.5.5s-.225.5-.5.5H18v1.5c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5V8h-1.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5H17V5.5a.5.5 0 0 1 .5-.5Zm0 9c.275 0 .5.225.5.5V16h1.5c.275 0 .5.225.5.5s-.225.5-.5.5H18v1.5c0 .275-.225.5-.5.5a.501.501 0 0 1-.5-.5V17h-1.5a.501.501 0 0 1-.5-.5c0-.275.225-.5.5-.5H17v-1.5c0-.275.225-.5.5-.5Zm-9.647.056L4.29 12.41a.5.5 0 0 1 0-.909l3.563-1.647L9.5 6.29a.501.501 0 0 1 .91 0l1.646 3.563L15.62 11.5a.5.5 0 0 1 0 .91l-3.563 1.646-1.647 3.563a.5.5 0 0 1-.91 0l-1.646-3.563Zm-2.16-2.1 2.582 1.19a1 1 0 0 1 .487.488l1.194 2.582 1.19-2.582a1 1 0 0 1 .488-.487l2.582-1.19-2.582-1.195a1 1 0 0 1-.487-.487l-1.19-2.581-1.195 2.581a1 1 0 0 1-.487.487l-2.583 1.194Z"
                />
              );
          }
        })()}
      </svg>
    ),
  ),
);

SparklesIcon.displayName = "SparklesIcon";