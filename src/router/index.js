import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

// 导入组件
const Probation = () => import('@/views/fuyou/Probation.vue')
const Profile = () => import('@/views/koubei/Profile.vue')
const Spa = () => import('@/views/hufu/Spa.vue')
const Invitation = () => import('@/views/yaoqing/Invitation.vue')
const Construction = () => import('@/views/yaoqing/construction/Construction.vue')
const Task = () => import('@/views/meiri/Task.vue')
const Poster = () => import('@/views/poster/Poster.vue')
const Nproject = () => import('@/views/fuyou/child/Nproject.vue')
const Record = () => import('@/views/fuyou/record/Record.vue')
// const TableDetail = () => import('@/views/fuyou/detail/TableDetail.vue')
const EditProfile = () => import('@/views/fuyou/record/childrecord/childprofile/EditProfile.vue')


const routes = [
  {
    path: '',
    redirect: '/fuyou'
  },

  {
    path: '/fuyou',

    component: Probation,
    children: [

    ]
  },

  {

    path: "/child",
    component: Nproject,
  },
  {
    path: '/childprofile',
    component: EditProfile,
  },
  {
    path: '/record',
    component: Record,
    // children: [

    // ]
  },


  // {
  //   path: '/detail',
  //   component: TableDetail,
  // },
  {
    path: '/koubei',
    component: Profile
  },
  {
    path: '/hufu',
    component: Spa
  },

  {
    path: '/yaoqing',
    component: Invitation
  },
  {
    path: '/construction',
    component: Construction
  },
  {
    path: '/meiri',
    component: Task
  },
  {
    path: '/poster',
    component: Poster
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router