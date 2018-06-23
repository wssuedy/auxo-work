import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _72331633 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _174bc7aa = () => import('../pages/mystoretest.vue' /* webpackChunkName: "pages/mystoretest" */).then(m => m.default || m)
const _c2bddca4 = () => import('../pages/createmessage.vue' /* webpackChunkName: "pages/createmessage" */).then(m => m.default || m)
const _456d7cc5 = () => import('../pages/abc.vue' /* webpackChunkName: "pages/abc" */).then(m => m.default || m)
const _dbbc0218 = () => import('../pages/qingjia.vue' /* webpackChunkName: "pages/qingjia" */).then(m => m.default || m)
const _9fbc6dbe = () => import('../pages/sub/about.vue' /* webpackChunkName: "pages/sub/about" */).then(m => m.default || m)
const _e3c75d14 = () => import('../pages/sub/b.vue' /* webpackChunkName: "pages/sub/b" */).then(m => m.default || m)
const _e3e38c16 = () => import('../pages/sub/a.vue' /* webpackChunkName: "pages/sub/a" */).then(m => m.default || m)
const _99202316 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _339ab1fa = () => import('../pages/_hi.vue' /* webpackChunkName: "pages/_hi" */).then(m => m.default || m)
const _36a12d16 = () => import('../pages/_message.vue' /* webpackChunkName: "pages/_message" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _72331633,
			name: "about"
		},
		{
			path: "/mystoretest",
			component: _174bc7aa,
			name: "mystoretest"
		},
		{
			path: "/createmessage",
			component: _c2bddca4,
			name: "createmessage"
		},
		{
			path: "/abc",
			component: _456d7cc5,
			name: "abc"
		},
		{
			path: "/qingjia",
			component: _dbbc0218,
			name: "qingjia"
		},
		{
			path: "/sub/about",
			component: _9fbc6dbe,
			name: "sub-about"
		},
		{
			path: "/sub/b",
			component: _e3c75d14,
			name: "sub-b"
		},
		{
			path: "/sub/a",
			component: _e3e38c16,
			name: "sub-a"
		},
		{
			path: "/",
			component: _99202316,
			name: "index"
		},
		{
			path: "/:hi",
			component: _339ab1fa,
			name: "hi"
		},
		{
			path: "/:message",
			component: _36a12d16,
			name: "message"
		}
    ],
    
    
    fallback: false
  })
}
