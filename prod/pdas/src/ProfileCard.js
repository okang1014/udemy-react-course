function ProfileCard({ title, handle, image, description }) {
  console.log(title, handle);

  // const title = props.title;
  // const handle = props.handle;

  // const {title, handle} = props;


  // function ProfileCard(props) {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-1by1'>
          <img src={image} alt="PDA logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          {/* <div>Title is {props.title}</div> */}
          <p className="subtitle is-6">{handle}</p>
          {/* <div>Handle is {props.handle}</div> */}
        </div>
        <div className="content">
          {description}
        </div>
      </div>
    </div >
  );
};

export default ProfileCard