import React, { PropTypes } from 'react'
import { Index } from '../index.jsx'
import { Home } from '../home.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'
import { Suite } from '../suite.jsx'


const ComponentsIndex = {
  'index': <Index />,
  'home': <Home />,
  'sample': <Sample />,
  'pringles': <Pringles />,
  'suite': <Suite />
}



const ComponentsSeo = {
  'index':{
    'seoTitle':'index',
    'seoKeywords':'index',
    'seoDescription':'index'
  },
  'home':{
    'seoTitle':'home',
    'seoKeywords':'home',
    'seoDescription':'home'
  },
  'sample':{
    'seoTitle':'sample',
    'seoKeywords':'sample',
    'seoDescription':'sample'
  },
  'pringles':{
    'seoTitle':'pringles',
    'seoKeywords':'pringles',
    'seoDescription':'pringles'
  },
  'suite':{
    'seoTitle':'suite',
    'seoKeywords':'suite',
    'seoDescription':'suite'
  }
}


export {
  ComponentsIndex,
  ComponentsSeo
}
