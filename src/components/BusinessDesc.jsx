const BusinessDesc = ({ name, description, picture }) => {
  return (
    <div className="container business-desc">
      <article>
        <h1>{name}</h1>
        <p>{description}</p>
      </article>
      <img src={picture} alt="" />
    </div>
  );
};

export default BusinessDesc;
