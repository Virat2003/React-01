


const Card = (props) => {
  return (
    <div className="profile-card">
      <div className="price">${props.pay}</div>

      <img
        src="https://i.ibb.co/3y0YjvP/user.jpg"
        alt="profile"
        className="profile-img"
      />

      <h2 className="name">{props.name}</h2>
      <p className="role">{props.role}</p>

      <p className="status">
        <span className="dot"></span> {props.jobprofile}
      </p>

      <div className="skills">
        <span>PHP</span>
        <span>android</span>
        <span>iOS</span>
        <span className="more">+2</span>
      </div>

      <p className="desc">
        {props.jobdes}
      </p>

      <button className="view-btn">VIEW PROFILE</button>
    </div>
  );
};

export default Card;
