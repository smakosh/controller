import { Icon, useStyleConfig } from "@chakra-ui/react";

const Link = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 24 24" fill="currentColor" __css={styles} {...rest}>
      <path d="M13.9286 4.28571C13.575 4.28571 13.2857 3.99804 13.2857 3.64286C13.2857 3.28768 13.575 3 13.9286 3H20.3571C20.7107 3 21 3.28768 21 3.64286V10.0714C21 10.425 20.7107 10.7143 20.3571 10.7143C20.0036 10.7143 19.7143 10.425 19.7143 10.0714V5.19496L10.5254 14.3826C10.2763 14.6357 9.86652 14.6357 9.61741 14.3826C9.36429 14.1335 9.36429 13.7237 9.61741 13.4746L18.8062 4.28571H13.9286ZM3 6.21429C3 5.14915 3.86344 4.28571 4.92857 4.28571H10.0714C10.425 4.28571 10.7143 4.57339 10.7143 4.92857C10.7143 5.28375 10.425 5.57143 10.0714 5.57143H4.92857C4.57339 5.57143 4.28571 5.86071 4.28571 6.21429V19.0714C4.28571 19.425 4.57339 19.7143 4.92857 19.7143H17.7857C18.1393 19.7143 18.4286 19.425 18.4286 19.0714V13.9286C18.4286 13.575 18.7179 13.2857 19.0714 13.2857C19.425 13.2857 19.7143 13.575 19.7143 13.9286V19.0714C19.7143 20.1362 18.8504 21 17.7857 21H4.92857C3.86344 21 3 20.1362 3 19.0714V6.21429Z" />
    </Icon>
  );
};

export default Link;