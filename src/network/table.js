import { request } from './request'

export function gethome() {
  return request({
    url: '/postTrial/list',
    params: {
      // pageIndex,
      // pageSize,
      wechatMpId,
      activityTitle,
      awardType,
      awardName
    }
  })
}
