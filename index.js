const Notification = (props) => {
  const { name, img, className } = props;
  return (
    <div className={className}>
      <img src={`img ${img}`} className="img-style" />
      <p>{name}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1>Notifications</h1>
    <Notification
      name="Information Message"
      img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      className="p-3 mb-2 bg-primary text-white"
    />
    <Notification
      name="Success-Message"
      img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      className="p-3 mb-2 bg-success text-white"
    />
    <Notification
      name="Warning Message"
      img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      className="p-3 mb-2 bg-warning text-white"
    />
    <Notification
      name="Error Message"
      img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      className="p-3 mb-2 bg-danger text-white"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
