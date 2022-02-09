import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGoogle, BsApple } from "react-icons/bs";
function Authentification(props) {
  let [auth, setAuth] = useState("login");
  return (
    <div className="container">
      <div className="row mt-1 ">
        <h5 className="col-6 d-flex">Authentification</h5>
        <p className="col-6 d-flex justify-content-end">
          <button
            className="bg bg-light d-flex justify-content-center align-items-center text-muted px-2"
            onClick={() => {
              setAuth((auth = "login"));
            }}
          >
            {" "}
            Se connecter
          </button>
          <button
            className="bg bg-light  d-flex justify-content-center align-items-center text-muted px-2"
            onClick={() => {
              setAuth((auth = "register"));
            }}
          >
            {" "}
            S'inscrire
          </button>
          <Link
            to="/support/faq"
            className="bg bg-light d-flex justify-content-center align-items-center text-muted px-2"
          >
            {" "}
            FAQ
          </Link>
        </p>
      </div>
      <div className="row">
        {auth === "login" ? <Connection /> : <Register />}
      </div>
    </div>
  );
}

const Connection = (props) => {
  const MailChecker = (mail) => {
    let mailEx =
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';
    return mail.match(mailEx);
  };
  console.log(MailChecker("san"));
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-4">
        <div className="row d-flex justify-content-center align-items-center p-2">
          <img
            className="rounded w-50"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUArP////8Aqf8Aqv8Ap/8Apf8Arf8Ar/8As//v+v+V2//j8/8Asf+p4/+N2P+Z3f/3/f+34/92z//e9f/X8//L7f/p9//a7//I6P+d1f+W1/8vt/+w4f/x+/9Huv9Uw/9oxf+J0P+m2v+Bzv9dv/9Dvv+D0/8nuv/E6/9wy/95y/+l4f/O6v+a1f9fyP/Z9f/J8sepAAADKklEQVR4nO3XbVPqSBCG4emeQBKDmvASPASICiGgHPf//7vtRIHobun5tGSr7qvKKozTVfM4Mz3BOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/EXV1pL79GERR8P4wGEWDrwODqB7qe4mvVd2Xkt7SsYhM1k3EYioyDdunM3tWfx4Y7W3gri3Z2adN+7BT0l+p7Geyt4UIlzKby9Ky6kKmM8k+zdwvJF+m6aP9uZY4k1XluyU9Vsu0qGKxPbmOZVTGeWHLlazKUNJ1d1yYyViX8kudvsqzu5U77Zb0ly/T12E0k9D5R9kPXJIevC9XyXCwl4N2Bo6ytNY3y+ZcsnoMHmUWdEquNf0/EZWFaxPagbwNdC5Pqi/pXG2lbJV8uXF+vbBxw6oM9dAkjJK40q3kQafk2im+5b0Wudh07+Regwfbh/okx0Bv7FcXTOQQzqRsFsnr4F6e1RV5XltC29iXkmuH+F4xnsqrHa97udEgswz6Wx4Cm/2tTbyYSC537YXg317TifWXukm4TpuE55JrZ/iWf7GGb73Cpnun2ib8JVmb0ILpIZVs2A4M/hJrNs5VeV7oeiXaKblyhh8Uh2kT5l8S2sTtiEr63nL823063fpzwuB/k9BpEUvk7ODdfJzDj11q51CnchclUrXN0g+eZel8u0u37S49l1w7wk9soSp/ahtP505jvVTHi6HfLj/ufrstspG3TtP00tWlOfW7lxb1qHkhK/2p9W/UH+y2CG5l10x8+PET1rXtU9mP3CiJS0s4udwWmz4ntFP0O7C3y8J5m/TAZl95X8XJaDCVbfcib5pnsGte5YKjvAzGTfu9lFxt/j+zt+hjvRFx7cVQjdPEdmSYpONKJp9exuy/8FbPZOGbvZnZvj5ot6THIpE8bRbEuYXEq/Y+sPO2itsXtI6lpLm0yxWu7I6ctvnPJT2m1TGZt1+KnN/Zp/ZyD8bzZPdl4HCRJMeoCeOLhyQr/OeSHvManr7O2hfh0yfn/rEw6oanZzo8pbqUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL3wN/+OMASYO+AqAAAAAElFTkSuQmCC"
            width="50"
          />
        </div>
        <form className="p-2">
          <h4>Connexion</h4>
          <p className="text-muted">Sign in to your account now !</p>
          <input
            className="mail"
            className="form-control py-2"
            placeholder="Votre Addresse mail"
          />
          <input
            className="password"
            className="form-control py-2"
            placeholder="Votre Mot de passe"
          />

          <button className="my-2 btn btn-primary">Se connecter</button>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </form>
        <WebAuth />
      </div>
    </div>
  );
};

const WebAuth = (props) => {
  return (
    <div className="row">
      <h5>Or continue With :</h5>
      <div className="col-12 d-flex justify-content-center">
        <button className="p-1 rounded border mx-2">
          <BsFacebook size={20} />
        </button>
        <button className="p-1 rounded border mx-2">
          <BsGoogle size={20} />
        </button>
        <button className="p-1 rounded border mx-2">
          <BsApple size={20} />
        </button>
      </div>
    </div>
  );
};
const Register = (props) => {
  const submitForm = (e) => {
    alert("yes");
    const userInfo = {
      email: document.getElementById("emailTxt").value,
      name:
        document.getElementById("prenomTxt").value +
        " " +
        document.getElementById("prenomTxt").value,
      telephone: document.getElementById("telephoneTxt"),
      password: document.getElementById("passwordTxt"),
      country: "Senegal",
      address: document.getElementById("addressTxt"),
      profile_pic: null,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };
    fetch("localhost:9000/api/v1/users/create", options);
    console.log(userInfo);
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-4">
        <h4>Creer un compte !</h4>
        <p className="text-muted">Avez vous deja un compte ? Connectez vous</p>
        <div className="p-2 row">
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  className="row form-control py-2 my-1"
                  placeholder="Prenom"
                  required
                  id="prenomTxt"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="row form-control py-2 my-1"
                  placeholder="Nom de Famille"
                  required
                  id="nomTxt"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <input
                  type="text"
                  className="row form-control py-2 my-1"
                  placeholder="Adresse de livraison : Quartier, Ville, Pays"
                  id="addressTxt"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="mail"
                  className="row form-control py-2 my-1 w-100"
                  placeholder="Adresse Mail"
                  required
                  id="emailTxt"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  type="mail"
                  className="row form-control py-2 my-1 w-100"
                  placeholder="Numero de telephone"
                  required
                  id="telephoneTxt"
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-12">
                <input
                  type="password"
                  className="row form-control py-2 my-1 w-100"
                  placeholder="Mot de passe"
                  required
                  id="passwordTxt"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <input
                  type="password"
                  className="row form-control py-2 my-1 w-100"
                  placeholder="Confirmer votre mot de passe"
                  required
                  id="passwordTxtConf"
                />
              </div>
            </div>
          </div>
          <button className="my-2 btn btn-primary" onClick={submitForm}>
            Se connecter
          </button>
          <div id="emailHelp" class="form-text">
            We'll never share your personal information with third parties.
          </div>
        </div>
        <WebAuth />
      </div>
    </div>
  );
};
export default Authentification;
