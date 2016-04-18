function adpateParam (params){
  if (params.cityId !== undefined || params.cityId === '' || params.cityId === null) {
    store.set('cityId',params.cityId )
  }else {
    if (store.get('cityId')) {
      params.cityId = store.get('cityId')
    }else {
      window.location.href='/'
    }
  }
  if (params.cityName !== undefined || params.cityName === '' || params.cityName === null) {
    store.set('cityName',params.cityName)
  }else {
    if (store.get('cityName')) {
      params.cityName = decodeURIComponent(store.get('cityName'))
    }else {
      window.location.href='/'
    }
  }

  return params
}
