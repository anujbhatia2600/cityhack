const Logo = (props) => (
  <img
    alt="Logo"
    src={!props.src ? "/static/AsiaDhraaLogo.png" : props.src}
    height={!props.height ? "40px" : props.height}
    {...props}
  />
);

export default Logo;
