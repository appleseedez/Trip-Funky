import React, { PropTypes } from 'react'
import { Home } from '../home.jsx'
import { Sample } from '../sample.jsx'
import { Pringles } from '../pringles.jsx'


const ComponentsIndex = {
  'home': <Home />,
'sample': <Sample />,
'pringles': <Pringles />,

}



const ComponentsSeo = {
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
}


export {
  ComponentsIndex,
  ComponentsSeo
}
