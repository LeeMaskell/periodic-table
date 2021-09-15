import React from "react"
import '../assets/style.css'
import Alkali from '../components/Alkali'
import AlkalineEarth from '../components/AlkalineEarth'
import TransitionMetals from '../components/TransitionMetals'
import OtherElements from '../components/OtherElements'
import Halogens from '../components/Halogens'
import NobleGases from '../components/NobleGases'
import RareEarth from '../components/RareEarth'
import FeatureElement from "../components/FeatureElement"
import { useState } from 'react'
import ElementDetails from "../components/ElementDetails"
import HydrogenException from "../components/HydrogenException"
import SEO from "../components/SEO"

export default function Home() {
  const [featured, setFeatured] = useState(null);
  return (
    <div className="home">
        <SEO title="Home" />
        <div className="responsive-portrait">
          <h1 className="portrait-message">Turn your device to portrait to view the Periodic Table of the Elements</h1>
        </div>
        <div className="table-grid">
          <FeatureElement featured={featured} />
          <HydrogenException onElementSelected={setFeatured} />
          <ElementDetails featured={featured} />
          <Alkali onElementSelected={setFeatured} />
          <AlkalineEarth onElementSelected={setFeatured}/>
          <TransitionMetals onElementSelected={setFeatured}/>
          <OtherElements onElementSelected={setFeatured}/>
          <Halogens onElementSelected={setFeatured}/>
          <NobleGases onElementSelected={setFeatured}/>
          <RareEarth onElementSelected={setFeatured}/>
        </div>
    </div>
  )
}
