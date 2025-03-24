import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TaskLayout({ children }) {
  return (
    <main className="container h-auto bg-gray-800 border border-red-500 rounded-lg mx-auto m-5  text-white decoration-none md:mt-20 p-5 md:flex md:justify-center md:w-1/2">
      <div className="m-5 md:w-3/4 lg:w-2/3">
        <h1 className="mb-5 text-xl"><Link to={'/'}>Challenge ForIT</Link></h1>
        <Container className="p-2 w-full">{children}</Container>
      </div>
    </main>
  );
};

TaskLayout.propTypes = {
  children: PropTypes.node.isRequired,
}