import { PropTypes } from "prop-types";
const User = ({ name, age }) => {
    return (
        <>
            <p> Name: {name} </p>
            <p> Age: {age}</p>
        </>
    )
}

User.defaultProps = {
    name: "Unknown",
    age: "Unknown"
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default User;

