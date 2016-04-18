import React, { PropTypes } from 'react'
import { Index } from '../index.jsx'
import { Home } from '../home.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'
import { Suite } from '../suite.jsx'
import { SuiteDetails } from '../suite-details.jsx'
import { PringlesDetails } from '../pringles-details.jsx'
import { SampleDetails } from '../sample-details.jsx'

const ComponentsIndex = {
  'home': <Home />,
  'index': <Index />,
  'sample': <Sample />,
  'pringles': <Pringles />,
  'suite': <Suite />,
  'suite-details':<SuiteDetails />,
  'pringles-details':<PringlesDetails />,
  'sample-details':<SampleDetails />
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
  },
  'suite-details':{
    'seoTitle':'suite-details',
    'seoKeywords':'suite-details',
    'seoDescription':'suite-details'
  },
  'pringles-details':{
    'seoTitle':'pringles-details',
    'seoKeywords':'pringles-details',
    'seoDescription':'pringles-details'
  },
  'sample-details':{
    'seoTitle':'sample-details',
    'seoKeywords':'sample-details',
    'seoDescription':'sample-details'
  }
}


export {
  ComponentsIndex,
  ComponentsSeo
}
