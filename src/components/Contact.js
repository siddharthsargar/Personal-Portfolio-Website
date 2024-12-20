import React, {useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`Message Sent: ${formData.message}`);
  }

  return (
    <div>
        <h2>Contact Me</h2>
        <form className="box-align" onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} />
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} />
            <textarea name='message' rows="1" placeholder='Message' value={formData.message} onChange={handleChange} />
            <button type='submit'>Send</button>
        </form>
    </div>
  );
};

export default Contact;