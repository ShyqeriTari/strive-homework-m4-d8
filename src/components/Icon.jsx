const Icon = (props) => {
  return (
    <a
      className="social-link"
      href="www.netflix.com"
      target="_blank"
      aria-label="facebook">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-icon svg-icon-facebook-logo">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={props.path}
          fill="white"></path>
      </svg>
    </a>
  )
}

export default Icon
