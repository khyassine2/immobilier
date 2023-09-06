import { useRef } from "react";
import emailjs from "emailjs-com"
function Contact() {
    const form = useRef();
    
const sendEmail = (e) => {
    e.preventDefault();
        
    emailjs.sendForm('service_xdy6spf', 'template_2oqzbar', form.current,"YQgSBy9NI6U8iNFBm")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    alert("Email Send");
};
    return ( 
    <>
    <div className="img">
         <img src="http://localhost:3000/images/dar.PNG" />
    </div>
        <div className="row my-4">
                <div className="col-2">
                    <img src="images/nous_contacter.jpg" width="100%"/>
                </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
                <div className="row ms-3">
                    <div className="col-6">
                        <label className="form-label" >Nom</label><input type="text" name="nom" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label" >Prenom</label><input type="text" name="prenom" className="form-control"/>
                    </div>
                </div>
                <div className="row ms-3">
                    <div className="col">
                        <label className="form-label" >Adresse Email</label><input type="email" name="email" className="form-control"/>
                    </div>
                </div>
                <div className="row ms-3">
                    <div className="col-6">
                        <label className="form-label" >Telephone</label><input type="tel" name="tel" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label" >Fax</label><input type="tel" name="fax" className="form-control"/>
                    </div>
                </div>
                
                <div className="row ms-3">
                    <div className="col">
                        <label className="form-label" >Questions</label><textarea name="Question"   className="form-control" cols="100" rows="10"></textarea>
                    </div>
                </div>
                <div className="row ms-3 my-5">
                    <div className="col">
                        <input type="submit" value="Envoyer" style={{width:"140px"}}/>
                     </div>
                   
                </div>
                <div className="row ms-3 my-5" >
                    <h6>GSV communication</h6>
                    <div>
                        Adresse  :19 rue pierre honfroy 94200 lvry sur seine<br/>
                        Adress : gerom.ola@jsvcom.fr<br/>
                        tél: 01.43.37.91.36<br/>
                        fax : 01.43.37.15.31
                    </div>
                </div>
            </form>
        </>
     );
}

export default Contact;