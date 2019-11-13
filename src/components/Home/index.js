import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'shared/Layout'
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import ThirdSection from "./thirdSection";
import FourthSection from "./fourthSection";

const Home = () => {
  return (
    <Layout>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Layout>
  )
}

Home.propTypes = {
  getList: PropTypes.func
}

export default Home
