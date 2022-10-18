import React from "react";
import Work1 from "../../assets/images/acceuilPage.png";
import Workk from "../../assets/images/Homepage.png";

import ProfilAcountant from "../../assets/images/profilComptable.png";
import AddAcountant from "../../assets/images/ajoutcomptable.png";
import Login from "../../assets/images/login.png";

import AddAgent from "../../assets/images/Ajoutagent.png";
import AddClient from "../../assets/images/AjoutClient.png";
import Addfourisseur from "../../assets/images/ajoutFournisseur.png";
import Emailverif from "../../assets/images/emailVerification.png";
import listFournisseur from "../../assets/images/listFournissuer.png";
import listClients from "../../assets/images/listClients.png";
import listeAgents from "../../assets/images/listeAgents.png";
import ajoutAgentForClient from "../../assets/images/ajoutAgentForClient.png";
import ajoufacture from "../../assets/images/ajoufacture.png";
import SelctZones from "../../assets/images/SelctZones.png";
import selectZones from "../../assets/images/selectZones.png";

import Work2 from "../../assets/images/ecomHome.png";
import HomeEc from "../../assets/images/HomeEc.png";
import products from "../../assets/images/products.png";
import CartHome from "../../assets/images/CartHome.png";

import Work3 from "../../assets/images/NoteAppList.png";
import noteapp from "../../assets/images/noteapp.png";
import Note from "../../assets/images/Note.png";
import newnote from "../../assets/images/newnote.png";

import Work4 from "../../assets/images/work4Portfolio.png";
import Home from "../../assets/images/HomeY.png";
import about from "../../assets/images/about.png";
import services from "../../assets/images/services.png";
import experience from "../../assets/images/experience.png";
import contact from "../../assets/images/contact.png";
import works from "../../assets/images/works.png";
import personal from "../../assets/images/Personal.png";

const Menu = [
  {
    id: 1,
    image: Workk,
    title: "RobotComptable website",
    category: "Django",
    images: [
      Work1,
      AddAcountant,
      Login,
      ProfilAcountant,
      AddAgent,
      listeAgents,
      AddClient,
      listClients,
      Addfourisseur,
      listFournisseur,
      Emailverif,
      ajoutAgentForClient,
      ajoufacture,
      SelctZones,
      selectZones,
    ],
    description:
      "  Web application for accounting firm allows managing agents, customers, bills, and invoices. Using OCR technology, I was able to improve the platform by extract all the details from scanned invoices and convert them into editable data online to achieve easy and fast management of daily accounting operations.",
    info: [
      "March – October 2021",
      "Django, React, Bootstrap, Ocr",
      "https://github.com/yasmineismail/Ecommerce-Django-",
    ],
  },
  {
    id: 2,
    image: Work2,
    title: "Ecommerce Website",
    category: "Django",
    images: [HomeEc, products, CartHome],
    description: "Ecommerce website using Django",
    info: [
      "January – March 2022",
      "Django, Python, Bootstrap",
      "https://github.com/yasmineismail/Ecommerce-Django-",
    ],
  },
  {
    id: 3,
    image: Work3,
    title: "Note Application",
    category: "React",
    images: [noteapp, Note, newnote],
    description: "A NoteApp using Django to Create, Delete And update Note",
    info: [
      "December 2021",
      "React, Django, Html, Css",
      "https://github.com/yasmineismail/ReactDjango-NoteApp",
    ],
  },

  {
    id: 4,
    image: Work4,
    title: "Portfolio Website",
    category: "React",
    images: [Home, about, services, experience, works, personal, contact],
    description: "Portfolio App to show works and services",
    info: [
      "September 2022",
      "ReactJs, Html, Css",
      "https://github.com/yasmineismail/My-portfolio",
    ],
  },
];

export default Menu;
