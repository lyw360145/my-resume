import PropTypes from 'prop-types';
import { ReactComponent as SchoolIcon } from '../assets/school.svg';
import { ReactComponent as MailIcon } from '../assets/mail.svg';
import { ReactComponent as PhoneIcon } from '../assets/phone.svg';
import { ReactComponent as DateIcon } from '../assets/date.svg';
import { ReactComponent as AddressIcon } from '../assets/address.svg';




function MyComponent(props) {
    const { name ,width, height} = props;
    const icons = {
        school: <SchoolIcon width={width} height={height}/>,
        mail: <MailIcon  width={width} height={height} />,
        phone:<PhoneIcon  width={width} height={height} />,
        date:<DateIcon  width={width} height={height} />,
        address:<AddressIcon  width={width} height={height} />
        // ...
    }
  return (
    <>
     {icons[name] || null } </>
       
  );
}
MyComponent.propTypes = {
    name: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }
export default MyComponent;