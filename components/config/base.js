import _ from 'lodash'
const BaseConfig = {
    baseUrl: '/api/',
    buildUrl: function(params, urlTemplate) {
        let paramsUrl = urlTemplate
        if (_.size(params) > 0 && paramsUrl) { //参数获取正确
            /**
            例如url为: /sample/:id/:typeId
            传入的参数为: {id:123,typeId:2343}
            **/
            _.each(params, (v, k) => {
                paramsUrl = paramsUrl.replace(':' + k, v)
            })

            return BaseConfig.baseUrl + paramsUrl
        }
    },
    fetchFunc: function(component, nextProps, shuffle, setCallBack) {
        if (null === nextProps) {
            return (component) => {
                const loadMore = () => {
                    let currentIndex = component.state.currentIndex
                    let totalPage = Math.ceil(component.state.count / component.props.params.pageSize)
                    currentIndex = (currentIndex + 1) % totalPage
                    let p = ''
                    if (_.size(component.props.params) > 0) {
                        p = '?' + $.param(_.omit(component.props.params, ['pageIndex'])) + '&' + $.param({
                            'pageIndex': currentIndex + 1
                        })
                    }
                    fetch(component.props.baseUrl + component.props.dataUrl + p)
                        .then(res => {
                            return res.json()
                        })
                        .then(j => {
                            let temp = component.state.dataStore
                            temp[currentIndex] = j.data
                            let t = _.flatten(temp.slice(0, currentIndex + 1))
                            if (t.length === component.state.count) {
                                $('#J_MoreButton').hide()
                            }
                            component.setState({
                                'data': shuffle ? _.shuffle(t) : t,
                                'dataStore': temp,
                                'currentIndex': currentIndex
                            },setCallBack)
                        })
                }
                const loadLess = () => {

                }
                if (component.props.dataUrl !== undefined) {
                    let p = ''
                    if (_.size(component.props.params) > 0) {
                        p = '?' + $.param(component.props.params)
                    }
                    fetch(component.props.baseUrl + component.props.dataUrl + p)
                        .then(res => {
                            return res.json()
                        })
                        .then(j => {
                            if (
                                component.props.params.pageSize &&
                                component.props.params.pageIndex &&
                                parseInt(j.count) > parseInt(component.props.params.pageSize) * parseInt(component.props.params.pageIndex)
                            ) {
                                $('#J_MoreButton')
                                    .show()
                                    .on('click', loadMore)
                                    .on('dblclick', loadLess)
                            } else {
                                $('#J_MoreButton').hide() //只有一页或者压根就没有分页
                            }
                            let temp = []
                            temp[0] = j.data
                            component.setState({
                                data: j.data,
                                count: j.count,
                                dataStore: temp
                            },setCallBack)
                        })
                }
            }
        } else {
            return (component, nextProps) => {
                if (nextProps.dataUrl !== undefined) {
                    let p = ''
                    if (_.size(nextProps.params) > 0) {
                        p = '?' + $.param(nextProps.params)
                    }
                    fetch(nextProps.baseUrl + nextProps.dataUrl + p)
                        .then(res => {
                            return res.json()
                        })
                        .then(j => {
                            if (
                                nextProps.params.pageSize &&
                                nextProps.params.pageIndex &&
                                parseInt(j.count) > parseInt(nextProps.params.pageSize) * parseInt(nextProps.params.pageIndex)
                            ) {
                                $('#J_MoreButton').show()
                            } else {
                                $('#J_MoreButton').hide() //只有一页或者压根就没有分页
                            }
                            let temp = []
                            temp[0] = j.data
                            component.setState({
                                data: shuffle ? _.shuffle(j.data) : j.data,
                                count: j.count,
                                dataStore: temp,
                                currentIndex: 0
                            },setCallBack)
                        })
                }
            }
        }

    }
}
export { BaseConfig }
