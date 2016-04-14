import React, { PropTypes } from 'react'
import { Index } from '../index.jsx'
import { Home } from '../home.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'
import { Suite } from '../suite.jsx'
import { SuiteDetail } from '../suite-detail.jsx'
import { PringlesDetail } from '../pringles-details.jsx'
import { SampleDetail } from '../sample-details.jsx'

const ComponentsIndex = {
  'index': <Index />,
  'home': <Home />,
  'sample': <Sample />,
  'pringles': <Pringles />,
  'suite': <Suite />,
  'suite-detail':<SuiteDetail />,
  'pringles-detail':<PringlesDetail />,
  'sample-detail':<SampleDetail />
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
  'suite-detail':{
    'seoTitle':'suite-detail',
    'seoKeywords':'suite-detail',
    'seoDescription':'suite-detail'
  },
  'pringles-detail':{
    'seoTitle':'pringles-detail',
    'seoKeywords':'pringles-detail',
    'seoDescription':'pringles-detail'
  },
  'sample-detail':{
    'seoTitle':'sample-detail',
    'seoKeywords':'sample-detail',
    'seoDescription':'sample-detail'
  }
}


export {
  ComponentsIndex,
  ComponentsSeo
}
