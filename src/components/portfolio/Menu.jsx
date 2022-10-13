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

import Work3 from "../../assets/images/work-3.svg";
import Work4 from "../../assets/images/work-4.svg";
import Work5 from "../../assets/images/work-5.svg";
import Work6 from "../../assets/images/work-6.svg";
const Menu = [
  {
    id: 1,
    image: Workk,
    title: "Project Management Illustration",
    category: "Design",
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
  },
  {
    id: 2,
    image: Work2,
    title: "Guest App Walkthrough Screens",
    category: "Art",
    images: [HomeEc, products, CartHome],
  },
  {
    id: 3,
    image: Work3,
    title: "Delivery App Wireframe",
    category: "Branding",
  },

  {
    id: 4,
    image: Work4,
    title: "Onboarding Motivation",
    category: "Design",
  },

  {
    id: 5,
    image: Work5,
    title: "iMac Mockup Design",
    category: "Creative",
  },

  {
    id: 6,
    image: Work6,
    title: "Game Store App Concept",
    category: "Art",
  },
];

export default Menu;
