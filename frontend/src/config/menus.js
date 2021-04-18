// 抽离出来的菜单项
const menuList = [
    {
        title: '首页',
        key: '/dashboard',
        icon: 'icon-dashboard'
    },
    {
        title: '商品',
        key: '/products',
        icon: 'icon-goods',
        children: [
            {
                title: '品类管理',
                key: '/product/category',
                icon: 'icon-category'
            },
            {
                title: '商品管理',
                key: '/product/index',
                icon: 'icon-product'
            }
        ]
    },
    {
        title: '用户管理',
        key: '/user',
        icon: 'icon-user'
    },
    {
        title: '角色管理',
        key: '/role',
        icon: 'icon-role'
    },
    {
        title: '图表',
        key: '/charts',
        icon: 'icon-charts',
        children: [
            {
                title: '扇形图',
                key: '/charts/pie',
                icon: 'icon-pie',
            },
            {
                title: '折线图',
                key: '/charts/line',
                icon: 'icon-line',
            },
            {
                title: '柱状图',
                key: '/charts/bar',
                icon: 'icon-bar',
            }
        ]
    }
]
export default menuList
