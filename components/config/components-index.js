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
  'home':{
    'seoTitle':'金色百年',
    'seoKeywords':'home',
    'seoDescription':'home'
  },
  'index':{
    'seoTitle':'金色旅拍',
    'seoKeywords':'index',
    'seoDescription':'index'
  },
  'sample':{
    'seoTitle':'作品欣赏',
    'seoKeywords':'sample',
    'seoDescription':'sample'
  },
  'pringles':{
    'seoTitle':'客片欣赏',
    'seoKeywords':'pringles',
    'seoDescription':'pringles'
  },
  'suite':{
    'seoTitle':'套系报价',
    'seoKeywords':'suite',
    'seoDescription':'suite'
  },
  'suite-details':{
    'seoTitle':'套系详情',
    'seoKeywords':'suite-details',
    'seoDescription':'suite-details'
  },
  'pringles-details':{
    'seoTitle':'客片详情',
    'seoKeywords':'pringles-details',
    'seoDescription':'pringles-details'
  },
  'sample-details':{
    'seoTitle':'作品详情',
    'seoKeywords':'sample-details',
    'seoDescription':'sample-details'
  }
}


export {
  ComponentsIndex,
  ComponentsSeo
}
