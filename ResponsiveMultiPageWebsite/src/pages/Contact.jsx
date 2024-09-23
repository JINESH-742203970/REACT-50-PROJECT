const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            className="form-control"
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            required
            className="form-control"
            autoComplete="false"
            name="Email"
            placeholder="Enter your email"
          />
          <textarea
            className="form-control"
            rows="28"
            cols="28"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;

// In React19 fromData.entries() returns an iterator of key value paris from the form data.
// Each key corresponds to a form input's name and the value corresponds the input's value
// For example if your form has fields like <input name="username value="john"/>,it will return ['username','john']
// Object.fromEntries(formData.entries());
//Object.fromEntries() is a method that converts an iterable of key value pairs(like the one returned by formData.entries())into a plain javascript object
// This allows you to take the form data and easily convert it into array where each input field's name is a key and its value is corresponds to the input field value
