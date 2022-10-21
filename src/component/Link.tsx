type LinkProps = {
  to: string;
  name: string;
};

export const Link = ({to, name}: LinkProps) => {
  return (
    <a 
      href={to} 
      className='modal-contact-link'
      onMouseDown={() => {console.log('Hi')}}
      onMouseLeave={() => {console.log('Bye')}}
    >
      {name}
    </a>
  )
};
