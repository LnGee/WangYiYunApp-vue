import request from '../utils/request'
import API from './allApi'
export const banner = (type) => {
  return request({
    url: API.banner + '?type=' + type,
    methods: 'post',
    // params: {
    //   start
    // }
  })
}
export const recommend = () => {
  return request({
    url: API.recommend,
    methods: 'post',
    // params: {
    //   start
    // }
  })
}
export const musicUrl = (id) => {
  return request({
    url: API.musicUrl + '?id=' + id,
    methods: 'post',
    // params: {
    //   start
    // }
  })
}
export const search = (keywords) => {
  return request({
    url: API.search + '?keywords=' + keywords,
    methods: 'post',
    // params: {
    //   start
    // }
  })
}
export const musicOrder = (limit) => {
  return request({
    url: API.musicOrder + '?limit=' + limit,
    methods: 'GET'
  })
}

export const orderDetail = (id, limit) => {
  return request({
    url: API.orderDetail + '?' + `id=${id}&limit=${limit}`,
    methods: 'GET'
  })
}

export const orderList = () => {
  return request({
    url: API.orderList,
    methods: 'GET'
  })
}

export const musicOrderDetail = (id) => {
  return request({
    url: API.musicOrderDetail + `?id=${id}`,
    methods: 'GET'
  })
}
