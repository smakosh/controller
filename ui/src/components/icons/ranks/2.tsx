import { Icon, useStyleConfig } from "@chakra-ui/react";

export const Two = (props: any) => {
  const { variant, size, ...rest } = props;
  const styles = useStyleConfig("Icon", { variant, size });

  return (
    <Icon viewBox="0 0 10 9" fill="currentColor" __css={styles} {...rest}>
      <path d="M4.97691 3.45859L8.53062 1.78392C8.75798 1.69442 8.93621 1.51933 9.02199 1.30107C9.10777 1.08282 9.09278 0.841001 8.98202 0.632933C8.87042 0.424865 8.67221 0.270205 8.43484 0.205825C8.19748 0.141443 7.94264 0.172846 7.7311 0.292972L4.57715 1.77529L1.4232 0.292972C1.21166 0.172848 0.956813 0.141445 0.719452 0.205825C0.48209 0.270203 0.283881 0.424865 0.172281 0.632933C0.0615145 0.840981 0.0465242 1.08282 0.132305 1.30107C0.218099 1.51933 0.396318 1.69441 0.62368 1.78392L4.17739 3.45859C4.42891 3.57793 4.72539 3.57793 4.97691 3.45859Z" />
      <path d="M4.97691 7.95797L8.53062 6.2833C8.75798 6.1938 8.93621 6.01871 9.02199 5.80046C9.10777 5.5822 9.09278 5.34038 8.98202 5.13232C8.87042 4.92425 8.67221 4.76959 8.43484 4.70521C8.19748 4.64082 7.94264 4.67223 7.7311 4.79235L4.57715 6.27468L1.4232 4.79235C1.21166 4.67223 0.956813 4.64083 0.719452 4.70521C0.48209 4.76958 0.283881 4.92425 0.172281 5.13232C0.0615145 5.34036 0.0465242 5.5822 0.132305 5.80046C0.218099 6.01871 0.396318 6.1938 0.62368 6.2833L4.17739 7.95797C4.42891 8.07731 4.72539 8.07731 4.97691 7.95797Z" />
    </Icon>
  );
};