import React from 'react'
import emailjs from 'emailjs-com';

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o4rzld8', 'template_a14aw6v', e.target, 'user_FUANJ58gzYKCvGGWMYDwP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <div className="container contact">
                <form className="row" onSubmit={sendEmail}>
                    <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name="email"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" name="name"/>
                    </div>
                    <div className="col-12">
                        <label  className="form-label">Company</label>
                        <input type="text" className="form-control" id="inputCompany" name="company"/>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" name="message"></textarea>
                    </div>
                    <div className="col-12 mt-4">
                        <button type="submit" className="btn btn-contact">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
