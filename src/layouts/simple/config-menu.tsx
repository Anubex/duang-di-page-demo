
export interface MenuItem {
  title: string
  path: string
}

const useMenuItems = (): MenuItem[] => {


  return [
    {
      title: 'ดูดวง',
      path: '/home',
    },
    {
      title: ' แพ็กเกจดูดวง',
      path: '/package',
    },
    {
      title: 'จองคิว',
      path: '/activate-sim',
    },
    // {
    //   title: 'E-Service',
    //   path: '/e-service',
    // },
  ]
}

export default useMenuItems
