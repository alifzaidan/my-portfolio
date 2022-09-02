import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NextLink = (props) => {
  return (
    <Link to={props.link} className="flex w-fit items-center gap-8">
      <p className="next-content">{props.description}</p>
      <BsArrowRight className="next-arrow" />
    </Link>
  );
};

export default NextLink;
